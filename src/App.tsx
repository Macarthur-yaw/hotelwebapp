import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import './App.css';
// import Homepage from "./Pages/Homepage";
import {Routes,Route} from 'react-router-dom'
import Booking from "./RoutesPages/Booking";
import Services from "./RoutesPages/Services";
import Gallery from "./RoutesPages/Gallery";
function App() {
  
  return (
    <div>
        <Navbar />
        <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/booking" element={<Booking />} />
<Route path="/services" element={<Services />} />
<Route path="/gallery" element={<Gallery/>} />
</Routes>        
        <Footer />


    </div>
  );
}

export default App;
