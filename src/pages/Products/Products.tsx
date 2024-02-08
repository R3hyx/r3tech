import Tab from '../../components/Tab/Tab';
import './products.css';
import { motion } from "framer-motion"
import Restock from './components/Restock';
import Datarex from './components/Datarex';

const Products = () => {

    return (
        <div className='containerProducts'>
            <div style={{zIndex: 5}}>
                <Tab />

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    style={{ padding: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <h1>Naše Produkty.</h1>
                    <p style={{marginTop: -16, padding: 16, marginBottom: '6em'}}>Pomáháme podnikům automatizovat rutinní činnosti.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}>
                    <Restock/>
                </motion.div>

                <Datarex/>
            </div>

            <>
               <div style={{position: 'fixed', backgroundColor: 'rgba(0,0,255,0.7)', top: '20vh', right:'0vw', filter: 'blur(20vh)',  height: '50vh', width: '30vw'}}></div>
                <div style={{position: 'fixed', backgroundColor: 'rgba(200,0,255, 0.5)', top: '30vh', left:'0vw', filter: 'blur(20vh)',  height: '50vh', width: '35vw'}}></div>
            </>
        </div>
    );
};

export default Products;


