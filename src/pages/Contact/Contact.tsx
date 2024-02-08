import { motion } from 'framer-motion';
import Button from '../../components/Button';
import Tab from '../../components/Tab/Tab';
import './contact.css';


const Contact = () => {
  

    return (
        <div className='containerContact'>
            <Tab/>

            <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    style={{padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <h1>Kontaktujte Nás.</h1>
                    <p style={{marginTop: -16, padding: 16, marginBottom: '6em'}}>Pojďme se spojit.</p>
            </motion.div>

            <div style={{display: 'flex', marginBottom: '2em', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', gap: '2em', zIndex: 5}}>
                <Button textButton='r3techcz@gmail.com' link='mailto:r3techcz@gmail.com'/>
                <Button textButton='LinkedIn' link='https://www.linkedin.com/company/r3technologiesinfo'/>
                <Button textButton='+420 777 066 841' link='tel:+420777066841'/>
            </div>

            <div style={{position: 'fixed', backgroundColor: 'rgba(0,0,255,0.7)', top: '20vh', right:'0vw', filter: 'blur(20vh)',  height: '50vh', width: '30vw'}}></div>
            <div style={{position: 'fixed', backgroundColor: 'rgba(200,0,255, 0.3)', top: '30vh', left:'0vw', filter: 'blur(10vh)',  height: '40vh', width: '35vw'}}></div>
            
        </div>
    );
};

export default Contact;