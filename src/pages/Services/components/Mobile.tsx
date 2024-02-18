import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import app from '../assets/app.svg'

const Mobile = () => {

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
            marginBottom: 400,
            scale: scrollYProgress,
            opacity: scrollYProgress}}>
                <div className="descriptionAndImg">
                    <h2>Mobilní aplikace.</h2>
                    <div className="description">
                        <p className="servicesP">Moderní mobilní aplikace pro moderní podnikání. Přinášíme nejen kód, ale i kreativitu, abychom vytvořili mobilní aplikaci, která otevírá nové možnosti pro Vaši značku.</p>
                    </div>

                    <img src={app} className='imgServices' alt='vývoj mobilních aplikací na míru'/>
                </div>
        </motion.div>
    );
};

export default Mobile;