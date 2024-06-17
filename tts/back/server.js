// server.js (백엔드 서버)
const express = require('express');
//const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 16001;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: '0.tcp.jp.ngrok.io',
    user: 'root',
    password: 'root',
    database: 'emotion_analysis',
    port: 16001,
    insecureAuth: true
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

app.post('/uttEmotion', (req,res) => {
    const id = req.body.id;
    const sql = `SELECT EMT_TY FROM emotion_types WHERE EMT_TY_ID= ?`;
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log('발화의 감정 : ',results);
        res.json(results);
    });
})

app.post('/getRelations', (req, res) => {
    const sceneId = req.body.sceneId;
    const sql = `
        SELECT
            r.RELATION_ID,
            r.SCENES_ID,
            r.CHARCR_ONE_ID,
            r.CHARCR_TWO_ID,
            rt.RELATE_TY,
            r.RELATE_PT,
            c1.CHAR_NM AS CHARCR_ONE_NAME,
            c1.AGE AS CHARCR_ONE_AGE,
            c1.SEXDSTN AS CHARCR_ONE_SEX,
            c2.CHAR_NM AS CHARCR_TWO_NAME,
            c2.AGE AS CHARCR_TWO_AGE,
            c2.SEXDSTN AS CHARCR_TWO_SEX
        FROM
            relationships r
        JOIN
            relationship_types rt ON r.RELATE_TY_ID = rt.RELATE_TY_ID
        JOIN
            characters c1 ON r.CHARCR_ONE_ID = c1.CHAR_ID
        JOIN
            characters c2 ON r.CHARCR_TWO_ID = c2.CHAR_ID
        WHERE
            r.SCENES_ID = ?
    `;
    console.log('씬아이디: ',sceneId);

    db.query(sql, [sceneId], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log(results);
        res.json(results);
    });
});

app.post('/getCharacters', (req,res) => {
    const id = req.body.id;
    const sql = `SELECT * FROM characters WHERE SCENARIO_ID = ?`;
    db.query(sql, [id], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log('등장인물 : ',results);
        res.json(results);
    });
})

app.post('/getScenario', (req, res) => {
    const name = req.body.name;
    const sql = `
    SELECT 
        scn.SCENARIO_ID,
        scn.TITLE AS SCENARIO_TITLE,
        s.SCENES_ID,
        s.SCENES_NO,
        s.SCENES_NM,
        c.CN_ID,
        c.CN_TEXT,
        u.UTT_ID,
        u.SPKR_ID,
        u.UTT_TEXT
    FROM 
        scenarios AS scn
    JOIN 
        scenes AS s ON scn.SCENARIO_ID = s.SCENARIO_ID
    LEFT JOIN 
        contexts AS c ON s.SCENES_ID = c.SCENES_ID
    LEFT JOIN 
        utterances AS u ON s.SCENES_ID = u.SCENES_ID AND c.CN_ID = u.CN_ID
    WHERE 
        scn.TITLE = ?
    ORDER BY 
        s.SCENES_NO, 
        c.CN_ID, 
        u.UTT_ID;
  `;

    db.query(sql, [name], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        console.log('db 데이터 :',results);
        const formattedData = formatData(results);
        res.json(formattedData);
    });
});

const formatData = (data) => {
    const scenesMap = {};
    data.forEach(row => {
        if(!scenesMap[row.SCENES_ID]){
            scenesMap[row.SCENES_ID]={
                sceneId:row.SCENES_ID,
                sceneName:row.SCENES_NM,
                sceneNUMBER:row.SCENES_NO,
                contexts:[]
            }
        }
        const contextIndex = scenesMap[row.SCENES_ID].contexts.findIndex(context => context.contextId === row.CN_ID);
    if (contextIndex === -1) {
      scenesMap[row.SCENES_ID].contexts.push({
        contextId: row.CN_ID,
        contextText: row.CN_TEXT,
        utterances: row.UTT_ID ? [{
          utteranceId: row.UTT_ID,
          speakerId: row.SPKR_ID,
          utteranceText: row.UTT_TEXT
        }] : []
      });
    } else if (row.UTT_ID) {
      scenesMap[row.SCENES_ID].contexts[contextIndex].utterances.push({
        utteranceId: row.UTT_ID,
        speakerId: row.SPKR_ID,
        utteranceText: row.UTT_TEXT
      });
    }
    })
    return Object.values(scenesMap);
}

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});