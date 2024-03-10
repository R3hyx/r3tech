import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import '../products.css'
const Datarex = () => {

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
            marginBottom: '8em',
            scale: scrollYProgress,
            opacity: scrollYProgress,
            textAlign: 'center',
            padding: 16,
        }}>
            <img src={require("../assets/datarex.png")} className='datarex' alt='logo datarex, inovativní software pro datovou analýzu'/>
            <p style={{marginTop: 0, marginBottom: '3em'}}>Analyzujte procesy, předpovídejte trendy, zvyšujte zisky.</p>
            {/* <Button textButton='Zjistit Víc.'/> */}
        </motion.div>
    );
};

export default Datarex;