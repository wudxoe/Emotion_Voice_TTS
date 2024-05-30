import React from 'react';

function RegisterPage() {
    const containerStyle = {
        textAlign: 'center',
        color: 'white',
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    };

    const headerStyle = {
        fontSize: '3em',
        fontWeight: 'bold',
        marginBottom: '40px',
    };

    const formStyle = {
        //backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '30px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '300px',
    };

    const inputStyle = {
        width: '100%',
        padding: '15px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        fontSize: '1em', // Smaller font size for inputs
        backgroundColor: 'white', // Background color for inputs
        color: 'black', // Text color for inputs
    };

    const buttonStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '15px 40px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1em',
        border: 'none',
        cursor: 'pointer',
        margin: '10px 0',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Emotion Voice</h1>
            <div style={formStyle}>
                <input type="text" placeholder="이름" style={inputStyle} />
                <input type="email" placeholder="이메일" style={inputStyle} />
                <input type="password" placeholder="비밀번호" style={inputStyle} />
                <a href="http://localhost:3000/login" style={buttonStyle}>회원가입</a>
            </div>
        </div>
    );
}

export default RegisterPage;
