import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import web from '../assets/pageW.png'

const Web = () => {

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
            alignItems: 'flex-start', 
            marginBottom: 400,
            scale: scrollYProgress,
            opacity: scrollYProgress
            }}>
                <div className="descriptionAndImg">
                    <h2>Webové aplikace.</h2>
                    <div className="description">
                        <p>Rychlý a inovativní web development. S námi získáte špičkový web, který vystihuje podstatu Vašeho podnikání a zanechává trvalý dojem.</p>
                    </div>

                    <img src={web} className="imgServicesWeb" alt='vývoj webu a webových aplikací na míru'/>

                </div>
        </motion.div>
    );
};

export default Web;