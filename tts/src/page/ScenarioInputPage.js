import React from 'react';

function ScenarioInputPage() {
    const containerStyle = {
        textAlign: 'center',
        color: 'white',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    };

    const formContainerStyle = {
        backgroundColor: 'white',
        color: 'black',
        padding: '30px',
        borderRadius: '10px',
        width: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'left',
        position: 'relative'
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '1.5em',
        cursor: 'pointer',
    };

    const headerStyle = {
        fontSize: '1.5em',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const inputStyle = {
        width: '100%',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '1em',
        backgroundColor: 'white',
        color: 'black',
    };

    const textareaStyle = {
        width: '100%',
        height: '150px',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '14px',
        border: '1px solid #ccc',
        fontSize: '1em',
        backgroundColor: 'white',
        color: 'black',
    };

    const buttonStyle = {
        backgroundColor: '#DCE73A',
        color: 'black',
        padding: '15px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1em',
        border: 'none',
        cursor: 'pointer',
        width: '100%',
        marginTop: '10px',
    };

    const noteStyle = {
        fontSize: '0.8em',
        marginTop: '20px',
        color: 'gray',
        lineHeight: '1.4',
    };

    return (
        <div style={containerStyle}>
            <div style={formContainerStyle}>
                <button style={closeButtonStyle}>&times;</button>
                <h2 style={headerStyle}>시나리오를 입력하세요</h2>
                <input type="text" placeholder="시나리오 제목" style={inputStyle} />
                <textarea placeholder="시나리오 대본" style={textareaStyle}></textarea>
                <a href="http://localhost:3000/Scenario" style={buttonStyle}>시나리오 분석하기</a>
                <p style={noteStyle}>
                    시나리오는 씬으로 분류 해야하며,<br />
                    씬 앞에 숫자 기입 (ex) 1. 씬(1), 2. 씬(2)<br />
                    대사는 "이름: @@@@@@" 형식으로 기입
                </p>
            </div>
        </div>
    );
}

export default ScenarioInputPage;
