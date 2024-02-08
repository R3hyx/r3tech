import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import auto from '../assets/auto.gif';
import './servicesComponents.css';

const Auto = () => {

    const ref = useRef<HTMLDivElement>(null)
    
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['0 1', '1 1'],
    });
    
    return (
        <motion.div ref={ref} style={{
            display: 'flex', 
            marginTop: '30vh', 
            flexDirection: 'column', 
            alignItems: 'center', 
            marginBottom: 100,
            scale: scrollYProgress,
            opacity: scrollYProgress
            }}>
                <div className="descriptionAndImg">
                    <h2>Automatizace.</h2>
                    <div className="description">
                        <p>Zbavíme Vás každodenních rutinních záležitostí, abyste měli více času na důležitější věci.</p>
                    </div>

                    <img src={auto} style={{marginTop: -100}} className='imgServices' alt='vývoj automatizačních aplikací na míru'/>
                </div>
        </motion.div>
    );
};

export default Auto;