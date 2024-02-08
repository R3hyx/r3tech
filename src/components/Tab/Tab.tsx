import { NavLink } from 'react-router-dom';
import './tab.css'; 
import r3 from '../../assets/r3logo.svg';

const Tab = () => {

    return (
        <div>
            <NavLink to='/'>
                <img src={r3} className='tabLogo' alt='logo r3tech, inovativní technologický startup'/>
            </NavLink>
            <div className='containerTab'>
                <div className='tabDivBtn'>
                    <NavLink className='tabLink' to="/products">Produkty.</NavLink>
                </div>

                <div className='tabDivBtn'>
                    <NavLink className='tabLink' to="/services">Služby.</NavLink>
                </div>

                <div className='tabDivBtn'>
                    <NavLink className='tabLink' to="/contact">Kontakt.</NavLink>
                </div>

            </div>
        </div>
    );
};

export default Tab;