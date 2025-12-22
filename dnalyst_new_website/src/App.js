import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Customer from './pages/Customer';
import ProductDetail from './components/ProductDetail'; // Import the ProductDetail component
import ProductPage from './pages/ProductPage'; // Import the ProductPage component

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with MainLayout (includes header and footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/customer" element={<Customer />} />
        </Route>

        {/* Route for ProductDetail page with Footer */}
        <Route path="/product_detail" element={
          <React.Fragment>
            <ProductDetail />  {/* Product Detail Component */}
            <Footer />  {/* Footer rendered at the bottom */}
          </React.Fragment>
        } />

        {/* Route for ProductPage page with Footer */}
        <Route path="/product_page" element={
          <React.Fragment>
            <ProductPage />  {/* ProductPage Component */}
            <Footer />  {/* Footer rendered at the bottom */}
          </React.Fragment>
        } />
      </Routes>
    </Router>
  );
}

export default App;
