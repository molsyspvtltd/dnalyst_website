import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
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
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import DailyInput from './pages/Dashboard/DailyInput';
import ProgressCharts from './pages/Dashboard/ProgressCharts';
import Profile from './pages/Dashboard/Profile';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
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

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Protected dashboard routes */}
          <Route element={<AuthLayout />}>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DailyInput />
              </ProtectedRoute>
            } />
            <Route path="/progress" element={
              <ProtectedRoute>
                <ProgressCharts />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
