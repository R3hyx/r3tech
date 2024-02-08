import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Tab from '../../components/Tab/Tab';
import Auto from './components/Auto';
import Bg from './components/Bg';
import Experience from './components/Experience';
import Mobile from './components/Mobile';
import Techstack from './components/Techstack';
import Web from './components/Web';
import bg from './assets/background.svg';
import './services.css';

const Services = () => {

    const fixedBG = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  
    return (
        <div ref={ref} className='containerServices'>
            <div style={{zIndex: 5}}>
                <Tab/>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{y: textY, padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <h1>Naše Služby.</h1>
                    <p style={{marginTop: -16, padding: 16, marginBottom: '6em'}}>Specializjeme se na automatizaci procesů a frontend vývoj.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <Techstack/>
                    <Experience/>
                </motion.div>

                <Web/>

                <Mobile/>

                <Auto/>
            </div>
            
            {fixedBG?
            <>
                <div style={{position: 'fixed', backgroundColor: 'rgba(0,0,255,0.7)', top: '20vh', right:'0vw', filter: 'blur(20vh)',  height: '50vh', width: '30vw'}}></div>
                <div style={{position: 'fixed', backgroundColor: 'rgba(200,0,255, 0.3)', top: '30vh', left:'0vw', filter: 'blur(10vh)',  height: '40vh', width: '35vw'}}></div>
            </>:
            <motion.div style={{ y: backgroundY, position: 'absolute', width: '100%', zIndex: 0}}>
                <Bg/>
            </motion.div>}
        </div>
    );
};

export default Services;