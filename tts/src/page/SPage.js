import { React,useState,useEffect } from 'react'
import '../css/Home.css'
import playImage from "../assets/sad.jpg"
import surpriseIcon from "../assets/surprise.jpg"
import sadIcon from "../assets/sad.jpg"
// import neutralIcon from "../assets/neutral.jpg"
import happyIcon from "../assets/happy.jpg"
import angryIcon from "../assets/angry.jpg"
import defaultImage from "../assets/sad.jpg"
import pauseImage from "../assets/sad.jpg"
import man from "../assets/sad.jpg"
import girl from "../assets/sad.jpg"
//import axios from 'axios';


const SPage = () => {
    const [dialogues, setDialogues] = useState([]);
    const [emotion, setEmotion] = useState('');
    const [icon, setIcon] = useState('');
    const [isPlaying, setIsPlaying] = useState(false); // 버튼 클릭 상태 저장
    const [ttsIcon, setTtsIcon] = useState(playImage);
    const [characters, setCharacters] = useState([]);

    // useEffect(() => {
    //     getDialogues();
    //     getCharacters();
    // }, []);

    // const getDialogues = () => {
    //     console.log('Fetching dialogues...');
    //     axios.post('http://localhost:3006/dialogue')
    //         .then(response => {
    //             console.log('Response:', response.data);
    //             setDialogues(response.data);
    //         })
    //         .catch(error => {
    //             console.error('서버 에러:', error);
    //         });
    // }

    // const getCharacters = () => {
    //     axios.get('http://localhost:3006/characters')
    //         .then(response => {
    //             console.log('Response:',response.data)
    //             setCharacters(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }

    useEffect(() => {
        switch (emotion) {
            case 'Sad':
                setIcon(sadIcon);
                break;
            case 'Angry':
                setIcon(angryIcon);
                break;
            case 'Happy':
                setIcon(happyIcon);
                break;
            case 'Surprise':
                setIcon(surpriseIcon);
                break;
            default:
                setIcon(defaultImage); // No icon for default case
        }
    }, [emotion]);

    const handleDialogueClick = (id) => {
        console.log(`Dialogue clicked: ${id}`);
        const selectedDialogue = dialogues.find(dialogue => dialogue.id === id);
        if (selectedDialogue) {
            setEmotion(selectedDialogue.emotion);
        }
    };

    const handleButtonClick = () => {
        setIsPlaying(!isPlaying); 
    };

    useEffect(() => {
        setTtsIcon(isPlaying ? pauseImage : playImage);
    }, [isPlaying]);
    

   return (
        <div className="relative left-0 top-0 w-[1440px] h-[1024px] bg-[#fff] overflow-hidden">
                <div className="background">
                <div style={{ position: 'absolute', left: '10px', top: '84px', width: '359px', height: '83px', fontSize: '48px', fontFamily: 'Inter', fontWeight: 'bold', color: '#000', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>백설공주</div>
                    <div style={{ position: 'absolute', left: '87px', top: '168px', width: '205px', height: '37px', fontSize: '30px', fontFamily: 'Inter', fontWeight: 'medium', color: '#000' }}>등장인물</div>
                    <div style={{ position: 'absolute', left: '87px', top: '378px', width: '300px', height: '37px', fontSize: '30px', fontFamily: 'Inter', fontWeight: 'medium', color: '#000' }}>등장인물 관계도</div>
                    <div style={{ position: 'absolute', left: '87px', top: '734px', width: '531px', height: '37px', fontSize: '30px', fontFamily: 'Inter', fontWeight: 'medium', color: '#000' }}>발화의 감정</div>
                </div>
                <div className="absolute left-[87px] top-[426px] w-[531px] h-[283px] bg-[#fff] rounded-[24px] overflow-hidden">
                    {/**등장인물 관계도 위치 */}
                </div>            
                <div style={{ position: 'absolute', left: '773px', top: '72px', width: '627px', height: '870px', backgroundColor: '#ffffffc7', borderRadius: '24px', overflow: 'hidden', zIndex:'1' }}>
                {/* 스토리 텍스트 칸 */}
                <div style={{ position: 'absolute', left: '63px', top: '35px', width: '500px', height: '705px', fontFamily: 'Inter', overflow: 'auto', zIndex:'2' }}>
                    {dialogues.map(dialogue => (
                        <span 
                            key={dialogue.id} 
                            style={{ fontSize: '20px', color: 'blue', display: 'block', marginBottom: '10px', cursor: 'pointer', zIndex:'3' }}
                            onClick={() => handleDialogueClick(dialogue.id)}
                            role="button" 
                            tabIndex={0} 
                        >
                            {dialogue.dialogue}
                        </span>
                    ))}
                </div>
            <button 
                onClick={handleButtonClick}
                style={{ position: 'absolute', left: '176px', top: '780px', width: '275px', height: '49px', backgroundImage: `url(${ttsIcon})`, backgroundSize: 'cover', backgroundPosition: 'center',border: 'none', padding: 0, cursor: 'pointer' }}/>
            <div style={{ position: 'absolute', transform: 'translateX(-50%)', left: '50%', top: '27px', width: '580px', height: '713px', border: '1px solid #66666659', borderRadius: '12px' }}></div>
            </div>
            {/* 발화의 감정 칸 */}
            <div style={{ position: 'absolute', left: '87px', top: '796px', width: '531px', height: '146px', backgroundColor: '#fff', borderRadius: '24px', overflow: 'hidden',zIndex:'1' }}>
                <div style={{ position: 'absolute', left: '121px', top: '83px', width: '275px', height: '39px', display: 'flex', zIndex:'2' }}>
                    <button 
                        style={{ position: 'absolute', left: 0, top: 0, width: '275px', height: '39px', fontSize: '16px', backgroundColor: '#dce73a', border: '3px solid #dce73a', fontFamily: 'Poppins',
                            fontWeight: 'bold', color: '#000', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', zIndex:'3' }}
                        onClick={() => {
                        }}
                    >상세 분석 결과</button>
                </div>
                <div style={{ position: 'absolute', left: '108px', top: '13px', width: '50px', height: '50px', overflow: 'hidden' }}>
                    <img style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} width="50" height="50" src={icon} alt='icon'/>
                </div>
                <div style={{ position: 'absolute', left: '125px', top: '18px', width: '275px', height: '39px', fontSize: '32px', fontFamily: 'Poppins', fontWeight: 'bold', color: '#fb1616', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>{emotion}</div>
            </div>
            {/* 등장인물 관계도 칸 */}
            <div style={{ position: 'absolute', left: '87px', top: '426px', width: '531px', height: '283px', backgroundColor: '#fff', borderRadius: '24px', overflow: 'hidden' }}>

            </div>
            {/* 등장인물 칸 */}
            {/* <div style={{ position: 'absolute', left: '87px', top: '210px', width: '531px', height: '160px', backgroundColor: '#fff', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ marginBottom: '10px' }} width="80" height="80" src={man} alt="man" />
                <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '20px', fontFamily: 'Inter', fontWeight: '600' }}>남편<br /></span>
                    <span style={{ fontSize: '16px', fontFamily: 'Inter' }}>40대, 남자</span>
                </div>
            </div> */}
            <div style={{ position: 'absolute', left: '87px', top: '210px', width: '531px', height: '160px', backgroundColor: '#fff', borderRadius: '24px', overflow: 'auto', display: 'flex', flexDirection: 'row', alignItems: 'center', zIndex: '1' }}>
                {characters.map((character, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '20px' }}>
                        <img src={character.sex === '남자' ? man : girl} alt={character.name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
                        <span style={{ fontSize: '16px', color: '#000' }}>{character.name}</span>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default SPage;