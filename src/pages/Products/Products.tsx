import React, { useEffect, useRef, useState } from 'react';
import Tab from '../../components/Tab/Tab';
import './products.css';
import { motion, useScroll, useTransform  } from "framer-motion"
import Restock from './components/Restock';
import Datarex from './components/Datarex';

const Products = () => {

    const fixedBG = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    
    return (
        <div ref={ref} className='containerProducts'>
            <div style={{zIndex: 5}}>
                <Tab />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    style={{y: textY, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <h1>Naše Produkty.</h1>
                    <p style={{marginTop: -16, padding: 16, marginBottom: '6em'}}>Pomáháme podnikům automatizovat rutinní činnosti.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}>
                    <Restock/>
                </motion.div>

                <Datarex/>
            </div>

            {fixedBG?
            <>
               <div style={{position: 'fixed', backgroundColor: 'rgba(0,0,255,0.7)', top: '20vh', right:'0vw', filter: 'blur(20vh)',  height: '50vh', width: '30vw'}}></div>
                <div style={{position: 'fixed', backgroundColor: 'rgba(200,0,255, 0.5)', top: '30vh', left:'0vw', filter: 'blur(20vh)',  height: '50vh', width: '35vw'}}></div>
            </>:
            <motion.div style={{y: backgroundY, position: 'absolute', width: '100%', zIndex: 0}}>
                <div style={{position: 'absolute', backgroundColor: 'rgba(0,0,255,0.7)', top: -200, left:'20vw', filter: 'blur(10vw)',  height: '40vh', width: '30vw'}}></div>
                <div style={{position: 'absolute', backgroundColor: 'rgba(200,0,255, 0.3)', top: '90vh', left:'10vw', filter: 'blur(10vw)',  height: '40vh', width: '40vw'}}></div>
                <div style={{position: 'absolute', backgroundColor: 'rgba(200,0,255, 0.3)', top: 200, left:'5vw', filter: 'blur(10vw)',  height: '40vh', width: '35vw'}}></div>
                <div style={{position: 'absolute', backgroundColor: 'rgba(200,0,255,0.5)', top: -170, right:'20vw', filter: 'blur(10vw)',  height: '50vh', width: '30vw'}}></div>
                <div style={{position: 'absolute', backgroundColor: 'rgba(0,0,255,0.7)', top: '110vh', right:'30vw', filter: 'blur(10vw)',  height: '30vh', width: '30vw'}}></div>
            </motion.div>}
        </div>
    );
};

export default Products;


