import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend);

const BData = {
    labels: ['기쁨', '분노', '놀람', '슬픔', '중립'],
    datasets: [
        {
            label: '감정 분석',
            data: [4, 1, 51, 40, 4],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff9f40', '#4bc0c0'],
        },
    ],
};

const options = {
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                color: '#000000',
            },
        },
        tooltip: {
            enabled: true,
        },
    },
};

const AData = {
    labels: ['친화적', '중립적', '적대적'],
    datasets: [
        {
            data: [60, 15, 20],
            backgroundColor: ['#f7e948', '#ADD1C1', '#ff808b'],
        },
    ],
};

const CData = {
    labels: ['기쁨', '분노', '놀람', '슬픔', '중립'],
    datasets: [
        {
            label: '감정 분석',
            data: [5, 15, 55, 20, 5],
            backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#ff9f40', '#4bc0c0'],
        },
    ],
};

function EmotionPage() {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f7f7f7',
        fontFamily: 'Arial, sans-serif',
    };

    const pageStyle = {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        width: '94.5%',
        height: '94.5%',
        maxWidth: '1200px',
        position: 'relative',
        overflow: 'auto',
    };

    const hideScrollbarStyle = {
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* Internet Explorer 10+ */
    };

    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '1.5em',
        cursor: 'pointer',
        textDecoration: 'none',
    };

    const titleStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    const contentStyle = {
        display: 'flex',
        width: '100%',
    };

    const panelStyle = {
        flex: 1,
        padding: '20px',
    };

    const leftPanelStyle = {
        ...panelStyle,
        borderRight: '1px solid #ccc',
    };

    const sectionStyle = {
        marginBottom: '20px',
    };

    const imageStyle = {
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        marginRight: '10px',
    };

    const textContentStyle = {
        display: 'inline-block',
        verticalAlign: 'top',
    };

    const speechStyle = {
        fontSize: '1em',
        color: '#555',
    };

    const percentageStyle = {
        fontSize: '1em',
        color: '#ff5733',
    };

    const previousSpeechTextStyle = {
        fontSize: '1em',
        fontWeight: 'bold',
    };

    const emotionLabelStyle = {
        fontSize: '1em',
        color: '#007bff',
    };

    const emotionPercentageStyle = {
        fontSize: '1.2em',
        color: '#ff5733',
        fontWeight: 'bold',
    };

    const contextTextStyle = {
        fontSize: '1em',
        color: '#555',
    };

    const finalEmotionTextStyle = {
        fontSize: '1.5em',
        color: 'red',
    };

    const emotionWordBoxStyle = {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '10px',
        backgroundColor: 'white',
        fontSize: '1em',
        lineHeight: '1.5',
    };

    const emotionBoxStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    };

    return (
        <div style={{ ...containerStyle, ...hideScrollbarStyle }}>
            <style>
                {`
                    ::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
            <div style={pageStyle}>
                <a href="http://localhost:3000/Scenario" style={closeButtonStyle}>&times;</a>
                <h1 style={titleStyle}>Snow White</h1>

                <div style={contentStyle}>
                    <div style={leftPanelStyle}>
                        <div style={sectionStyle}>
                            <img src="/assets/sad.jpg" alt="남편" style={imageStyle} />
                            <div style={textContentStyle}>
                                <p>발화자: 남편</p>
                                <p style={speechStyle}>“무슨 일이야? 놀랐잖아 여보!!”</p>
                            </div>
                        </div>

                        <div style={sectionStyle}>
                            <img src="/assets/sad.jpg" alt="아내" style={imageStyle} />
                            <div style={textContentStyle}>
                                <p>수신자: 아내</p>
                                <p style={speechStyle}>“여보! 깜짝이야!”</p>
                            </div>
                            <h3>수신자일 확률: 70%</h3>
                        </div>

                        <div style={sectionStyle}>
                            <h3>수신자와의 관계</h3>
                            <Doughnut data={AData} options={options} />
                            <p style={percentageStyle}>친화적 관계: 60%</p>
                        </div>

                        <div style={sectionStyle}>
                            <h3>전 발화</h3>
                            <p style={previousSpeechTextStyle}>“어머, 깜짝이야!!”</p>
                            <h3>전 발화의 감정</h3>
                            <div style={emotionBoxStyle}>
                                <img src="./assets/surprise.jpg" alt="놀람" style={{ width: '30px', height: '30px' }} />
                                <span style={emotionLabelStyle}>Surprise</span>
                            </div>
                        </div>
                    </div>

                    <div style={panelStyle}>
                        <div style={sectionStyle}>
                            <h3>발화 문장의 감정 분석</h3>
                            <Bar data={BData} options={options} />
                            <p style={emotionPercentageStyle}>놀람: 51%</p>
                        </div>

                        <div style={sectionStyle}>
                            <div style={emotionWordBoxStyle}>
                                <h4>발화 문장의 감정 어휘</h4>
                                <p>놀람 어휘: 놀랐잖아</p>
                                <p>기쁨 어휘: 없음</p>
                                <p>슬픔 어휘: 없음</p>
                                <p>분노 어휘: 없음</p>
                            </div>
                        </div>

                        <div style={sectionStyle}>
                            <h3>직전 상황 맥락 TEXT</h3>
                            <p style={contextTextStyle}>오랫동안 아무런 결실 없이 아이를 원하기만 한 부부가 있었습니다. ...</p>
                            <Doughnut data={CData} options={options} />
                        </div>

                        <div style={sectionStyle}>
                            <h3>최종 감정 분석 결과</h3>
                            <p style={finalEmotionTextStyle}>슬픔 <span style={emotionPercentageStyle}>80%</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmotionPage;
