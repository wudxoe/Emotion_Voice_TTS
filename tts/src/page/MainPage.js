import React from 'react';

function MainPage() {
    const handleLogout = () => {
        localStorage.removeItem("email");
        window.location.href = 'http://localhost:3000/login';
    };

    const containerStyle = {
        textAlign: 'right',
        color: 'white',
        backgroundSize: 'cover',
        height: '80%',
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: '20px',
        position: 'relative',
    };

    const headerStyle = {
        fontSize: '3em',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const subHeaderStyle = {
        fontSize: '1.2em',
        marginBottom: '30px',
    };

    const buttonStyle = {
        backgroundColor: '#DCE73A',
        color: 'black',
        padding: '15px 50px',
        textDecoration: 'none',
        borderRadius: '14px',
        fontSize: '1.2em',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
    };

    const cardContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '40px',
        maxHeight: '400px', // Adjust this height as needed
        overflowY: 'auto',
        width: '100%',
        scrollbarWidth: 'none', /* For Firefox */
        msOverflowStyle: 'none', /* For Internet Explorer and Edge */
    };

    const cardRowStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '20px',
    };

    const cardStyle = {
        backgroundColor: 'rgba(121, 121, 121, 0.5)',
        padding: '20px',
        borderRadius: '10px',
        width: '250px',
        textAlign: 'left',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    };

    const cardTitleStyle = {
        fontSize: '1.2em',
        fontWeight: 'bold',
    };

    const cardTextStyle = {
        fontSize: '0.9em',
        marginTop: '10px',
        lineHeight: '1.4',
    };

    const logoutButtonStyle = {
        position: 'absolute',
        top: '0px',
        right: '20px',
        background: 'none',
        color: 'white',
        border: 'none',
        fontSize: '1.2em',
        cursor: 'pointer',
        textDecoration: 'none',
    };

    const textContainerStyle = {
        maxWidth: '600px',
        textAlign: 'right',
    };

    const hideScrollbarStyle = {
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    };

    const titles = [
        'My sentiment analysis', 'My sentiment analysis', 'My sentiment analysis', 'My sentiment analysis',
    ];

    return (
        <div style={containerStyle}>
            <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
            <div style={textContainerStyle}>
                <h1 style={headerStyle}>Dive into the world of emotions!</h1>
                <p style={subHeaderStyle}>
                    Enter a scenario to get a detailed sentiment analysis TTS service. Gain a deeper understanding of the scenario.
                </p>
                <a href="http://localhost:3000/ScenarioInput" style={buttonStyle}>Start world</a>
            </div>
            <div style={{ ...cardContainerStyle, ...hideScrollbarStyle }}>
                <div style={cardRowStyle}>
                    {titles.slice(0, 4).map((title, index) => (
                        <div key={index} style={cardStyle}>
                            <div style={cardTitleStyle}>{title}</div>
                            <div style={cardTextStyle}>
                                백설공주
                                <br />
                                옛날 옛적 한겨울에, 하늘에서 눈송이가 소리없이 내리고 있었습니다. 그때 어느 왕비가 분홍빛 겨울 장미 곁에 앉아 바느질을 하고 있었습니다. ...
                            </div>
                        </div>
                    ))}
                </div>
                <div style={cardRowStyle}>
                    {titles.slice(4, 8).map((title, index) => (
                        <div key={index} style={cardStyle}>
                            <div style={cardTitleStyle}>{title}</div>
                            <div style={cardTextStyle}>
                                백설공주
                                <br />
                                옛날 옛적 한겨울에, 하늘에서 눈송이가 소리없이 내리고 있었습니다. 그때 어느 왕비가 분홍빛 겨울 장미 곁에 앉아 바느질을 하고 있었습니다. ...
                            </div>
                        </div>
                    ))}
                </div>
                <div style={cardRowStyle}>
                    {titles.slice(8).map((title, index) => (
                        <div key={index} style={cardStyle}>
                            <div style={cardTitleStyle}>{title}</div>
                            <div style={cardTextStyle}>
                                백설공주
                                <br />
                                옛날 옛적 한겨울에, 하늘에서 눈송이가 소리없이 내리고 있었습니다. 그때 어느 왕비가 분홍빛 겨울 장미 곁에 앉아 바느질을 하고 있었습니다. ...
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
