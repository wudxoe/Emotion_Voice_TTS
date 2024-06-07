import React from 'react';

function ScenarioPage() {
    const containerStyle = {
        textAlign: 'center',
        color: 'black',
        backgroundImage: `url('./assets/book.jpg')`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '80%',
        width: '80%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '80px',
    };

    const bookContainerStyle = {
        borderRadius: '10px',
        width: '70%',
        height: '40%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    };

    const leftPageStyle = {
        width: '100%',
        height: '100%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const rightPageStyle = {
        width: '100%',
        height: '100%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    };

    const containerBoxStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        width: '80%',
        height: '100%',
        borderRadius: '10px',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const charactersContainerStyle = {
        display: 'flex',
        width: '80%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '20px',
    };

    const characterStyle = {
        display: 'flex',
        width: '80%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 10px',
    };

    const characterImageStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginBottom: '10px',
    };

    const emotionStyle = {
        display: 'flex',
        width: '80%',
        height: '100%',
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
                    <div style={containerBoxStyle}>
                        <div style={charactersContainerStyle}>
                            <div style={characterStyle}>
                                <img src="./assets/sad.jpg" alt="남편" style={characterImageStyle} />
                                <p>남편<br />40대, 남자</p>
                            </div>
                            <div style={characterStyle}>
                                <img src="./assets/angry.jpg" alt="아내" style={characterImageStyle} />
                                <p>아내<br />30대, 여자</p>
                            </div>
                        </div>
                    </div>
                    <h3>등장인물 관계도</h3>
                    <div style={containerBoxStyle}>
                        <p>친화</p>
                    </div>
                    <h3>발화의 감정</h3>
                    <div style={containerBoxStyle}>
                        <div style={emotionStyle}>
                            <img src="./assets/surprise.jpg" alt="Surprise" style={emotionImageStyle} />
                            <p>Surprise</p>
                            <a href="http://localhost:3000/Emotion" style={buttonStyle}>상세 분석 결과</a>
                        </div>
                    </div>
                </div>
                <div style={rightPageStyle}>
                    <div style={containerBoxStyle}>
                        <p>오랫동안 아무런 결실 없이 아이를 원하기만 한 부부가 있었습니다...</p>
                        <button style={buttonStyle}>재생하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScenarioPage;
