import { motion } from 'framer-motion';
import Tab from '../../components/Tab/Tab';
import Auto from './components/Auto';
import Experience from './components/Experience';
import Mobile from './components/Mobile';
import Techstack from './components/Techstack';
import Web from './components/Web';
import './services.css';

const Services = () => {
  
    return (
        <div className='containerServices'>
            <div style={{zIndex: 5}}>
                <Tab/>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
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
            
            <>
                <div style={{position: 'fixed', backgroundColor: 'rgba(0,0,255,0.7)', top: '20vh', right:'0vw', filter: 'blur(20vh)',  height: '50vh', width: '30vw'}}></div>
                <div style={{position: 'fixed', backgroundColor: 'rgba(200,0,255, 0.5)', top: '30vh', left:'0vw', filter: 'blur(15vh)',  height: '40vh', width: '35vw'}}></div>
            </>
            
        </div>
    );
};

export default Services;