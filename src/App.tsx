import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import './App.css';
// import Homepage from "./Pages/Homepage";
import {Routes,Route} from 'react-router-dom'
import Booking from "./RoutesPages/Booking";
function App() {
  
  return (
    <div>
        <Navbar />
        <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/booking" element={<Booking />} />
</Routes>        
        <Footer />


    </div>
  );
}

export default App;
