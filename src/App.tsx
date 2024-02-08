import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Hero from './pages/Hero/Hero';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
}

export default App;
