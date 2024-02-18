import { useEffect, useState } from 'react';
// import aura from '../../assets/auraT2.gif';
import aura from '../../assets/speedyCirc3.gif';
import squares from '../../assets/2sqrs.gif'
import './hero.css';
import logo from '../../assets/r3logo.svg';
import Tab from '../../components/Tab/Tab';
import r3tech from '../../assets/r3tech.svg';
import { motion } from 'framer-motion';

const Hero = () => {
  

    return (
        <div className='container'>

            <Tab/>

        
            <motion.img src={squares} className='squares'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}/>
             
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3.5 }}>
                <img src={r3tech} className='logo' alt='logo r3tech, inovativní technologický startup'/>
            </motion.div>
        </div>
    );
};

export default Hero;