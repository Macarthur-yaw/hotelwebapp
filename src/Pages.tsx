import { Suspense, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Custom loader with delay
const DelayedFallback = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5); // 5 sec delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      {show ? (
        <div className="animate-pulse text-xl font-bold text-blue-600">
          Loading complete... rendering page
        </div>
      ) : (
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      )}
    </div>
  );
};

const Pages = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback={<DelayedFallback />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Pages;
