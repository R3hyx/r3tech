import React from 'react';

const Bg = () => {
    return (
        <div>
            <div style={{position: 'absolute', backgroundColor: 'rgba(0,0,255,0.7)', top: -200, left:'10vw', filter: 'blur(10vw)',  height: '40vh', width: '30vw'}}></div>
            <div style={{position: 'absolute', backgroundColor: 'rgba(200,0,255, 0.3)', top: 200, left:'0vw', filter: 'blur(10vw)',  height: '40vh', width: '35vw'}}></div>
            
            <div style={{position: 'absolute', backgroundColor: 'rgba(200,0,255, 0.3)', top: '90vh', left:'0vw', filter: 'blur(10vw)',  height: '40vh', width: '40vw'}}></div>
            <div style={{position: 'absolute', backgroundColor: 'rgba(0,0,255,0.7)', top: '110vh', right:'20vw', filter: 'blur(10vw)',  height: '30vh', width: '30vw'}}></div>
            <div style={{position: 'absolute', backgroundColor: 'rgba(200,0,255,0.5)', top: -170, right:'10vw', filter: 'blur(10vw)',  height: '50vh', width: '30vw'}}></div>
            <div style={{position: 'absolute', backgroundColor: 'rgba(0,0,255,0.7)', top: '110vh', right:'20vw', filter: 'blur(10vw)',  height: '30vh', width: '30vw'}}></div>

            <div style={{position: 'absolute', backgroundColor: 'rgba(200,0,255,0.5)', top: '220vh', left:'10vw', filter: 'blur(10vw)',  height: '50vh', width: '30vw'}}></div>
            <div style={{position: 'absolute', backgroundColor: 'rgba(200,0,255,0.5)', top: '220vh', right:'10vw', filter: 'blur(10vw)',  height: '50vh', width: '30vw'}}></div>
            <div style={{position: 'absolute', backgroundColor: 'rgba(0,0,255,0.7)', top: '210vh', right:'20vw', filter: 'blur(10vw)',  height: '30vh', width: '30vw'}}></div>
        
            <div style={{position: 'absolute', backgroundColor: 'rgba(200,0,255,0.5)', top: '350vh', right:'10vw', filter: 'blur(10vw)',  height: '50vh', width: '30vw'}}></div>
            <div style={{position: 'absolute', backgroundColor: 'rgba(0,0,255,0.7)', top: '360vh', left:'20vw', filter: 'blur(10vw)',  height: '30vh', width: '30vw'}}></div>
        </div>
    );
};

export default Bg;