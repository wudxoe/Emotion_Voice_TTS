import React from 'react';

function LoginPage() {
    const containerStyle = {
        textAlign: 'center',
        color: 'white',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8em', // Smaller font size for the entire container
    };

    const formStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the form
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        fontSize: '0.8em', // Smaller font size for inputs
    };

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 40px', // Increased padding to make the button wider
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '0.8em', // Smaller font size for button
        border: 'none',
        cursor: 'pointer',
        margin: '10px 0',
    };

    const textButtonStyle = {
        background: 'none',
        color: 'gray',
        cursor: 'pointer',
        fontSize: '0.8em',
        border: 'none',
        marginTop: '20px',
        textDecoration: 'underline',
    };

    return (
        <div style={containerStyle}>
            <h1 style={{ fontSize: '2.5em', marginBottom: '40px' }}>Emotion Voice</h1>
            <div style={formStyle}>
                <input type="email" placeholder="이메일 주소를 입력해 주세요." style={inputStyle} />
                <input type="password" placeholder="비밀번호를 입력해 주세요." style={inputStyle} />
                <a href="http://localhost:3000/Main" style={buttonStyle}>로그인</a>
            </div>
            <a href="http://localhost:3000/Register" style={textButtonStyle}>Emotion Voice가 처음이시라면, 회원가입이 필요해요.</a>
        </div>
    );
}

export default LoginPage;
