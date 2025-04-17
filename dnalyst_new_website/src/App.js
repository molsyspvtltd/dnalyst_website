import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Customer from './pages/Customer';
// import Shipping from './pages/Shipping';
// import Track from './pages/Track';
// import Faq from './pages/Faq';
// import Returns from './pages/Return';



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/customer" element={<Customer />} />
          {/* <Route path="/faq" element={<Faq />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/track" element={<Track />} /> */}


        </Route>
      </Routes>
    </Router>
  );
}

export default App;
