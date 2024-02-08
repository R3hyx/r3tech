import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import './experience.css';

const Experience = () => {

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
            padding: 16,
            scale: scrollYProgress,
            opacity: scrollYProgress}}>
            <div style={{display: 'flex', gap: '5vw', flexWrap: 'wrap', justifyContent: 'center', rowGap: 0}}>
                <p className='exp'>dCOS</p>
                <p className='exp'>SenseiGO</p>
                <p className='exp'>DhabaBeas</p>
            </div>
        </motion.div>
    );
};

export default Experience;