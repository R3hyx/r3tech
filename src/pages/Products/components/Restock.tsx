import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import Button from '../../../components/Button';

const Restock = () => {

    const ref = useRef<HTMLDivElement>(null)



    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['0 1', '1 1'],
    });
    
    return (
        <motion.div ref={ref} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '20em',
            scale: scrollYProgress,
            opacity: scrollYProgress,
            textAlign: 'center',
            padding: 16,
        }}>
            <img src={require("../assets/restock.png")} className='restock' alt='logo datarex, inovativní software pro skladový management'/>
            <p style={{marginTop: -12, marginBottom: '3em'}}>Organizuje vaše sklady a pobočky efektivněji a levněji.</p>
            {/* <Button textButton='Zjistit Víc.'/> */}
        </motion.div>
    );
};

export default Restock;