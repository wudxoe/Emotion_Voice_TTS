import React from 'react';

function ScenarioPage() {
    const containerStyle = {
        textAlign: 'center',
        color: 'black',
        backgroundSize: 'cover',
        backgroundImage: `url('./assets/book.jpg')`, // Replace with the path to your background image
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    };

    const bookContainerStyle = {
        backgroundColor: 'white',
        color: 'black',
        padding: '30px',
        borderRadius: '10px',
        width: '800px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    };

    const leftPageStyle = {
        width: '45%',
        padding: '20px',
        borderRight: '1px solid #ccc',
    };

    const rightPageStyle = {
        width: '45%',
        padding: '20px',
    };

    const characterContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px',
    };

    const characterImageStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginBottom: '10px',
    };

    const emotionStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
    };

    const emotionImageStyle = {
        width: '50px',
        height: '50px',
        marginBottom: '10px',
    };

    const buttonStyle = {
        backgroundColor: '#DCE73A',
        color: 'black',
        padding: '10px 20px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1em',
        border: 'none',
        cursor: 'pointer',
        marginTop: '20px',
    };

    return (
        <div style={containerStyle}>
            <div style={bookContainerStyle}>
                <div style={leftPageStyle}>
                    <h2>백설공주</h2>
                    <h3>등장인물</h3>
                    <div style={characterContainerStyle}>
                        <img src="/path/to/your/character1.png" alt="남편" style={characterImageStyle} />
                        <p>남편<br />40대, 남자</p>
                    </div>
                    <div style={characterContainerStyle}>
                        <img src="/path/to/your/character2.png" alt="아내" style={characterImageStyle} />
                        <p>아내<br />30대, 여자</p>
                    </div>
                    <h3>등장인물 관계도</h3>
                    <div style={characterContainerStyle}>
                        <p>친화</p>
                    </div>
                    <h3>발화의 감정</h3>
                    <div style={emotionStyle}>
                        <img src="/path/to/your/emotion.png" alt="Surprise" style={emotionImageStyle} />
                        <p>Surprise</p>
                        <a href="http://localhost:3000/Emotion" style={buttonStyle}>상세 분석 결과</a>
                    </div>
                </div>
                <div style={rightPageStyle}>
                    <p>오랫동안 아무런 결실 없이 아이를 원하기만 한 부부가 있었습니다...</p>
                    <button style={buttonStyle}>재생하기</button>
                </div>
            </div>
        </div>
    );
}

export default ScenarioPage;
