import node from '../assets/node.svg'
import js from '../assets/javascript.svg'
import ts from '../assets/typescript.svg'
import figma from '../assets/figma.svg'
import firebase from '../assets/firebase.svg'
import react from '../assets/react.svg'
import rnative from '../assets/rnative.svg'
import './techstack.css';

const Techstack = () => {

    
    return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 16}}>
            <h3 style={{fontWeight: 'lighter'}}>Náš Techstack.</h3>
            <div style={{display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', padding: 16}}>
                <img src={node} className='nodeImg' alt='node js'/>
                <img src={js} className='techImg' alt='javascript'/>
                <img src={ts} className='techImg' alt='typescript'/>
                <img src={figma} className='techImg' alt='figma'/>
                <img src={firebase} className='techImg' alt='firebase'/>
                <img src={react} className='techImg' alt='react'/>
                <img src={rnative} className='techImg' alt='react native'/>
            </div>
        </div>
    );
};

export default Techstack;