import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import CallButton from '../components/CallButton';

export default function MainLayout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
          <CallButton />
        </>
      )}
    </div>
  );
}
