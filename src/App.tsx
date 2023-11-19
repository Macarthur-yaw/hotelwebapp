import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import './App.css';
// import Homepage from "./Pages/Homepage";
import {Routes,Route} from 'react-router-dom'
import Booking from "./RoutesPages/Booking";
import Services from "./RoutesPages/Services";
import Gallery from "./RoutesPages/Gallery";
import About from "./RoutesPages/About";
import Rooms from "./RoutesPages/Rooms";
import Roompage from "./RoutesPages/Roompage";
// import { Rooms } from "./Constant/Rooms";
import Contact from "./RoutesPages/Contact";
function App() {
  
  return (
    <div>
        <Navbar />
        <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/booking" element={<Booking />} />
<Route path="/services" element={<Services />} />
<Route path="/gallery" element={<Gallery/>} />
{/* <Route path="/rooms" element={<Rooms/>}/> */}
<Route path='/about' element={<About/>}/>
<Route path="/rooms" element={<Rooms/>}/>
<Route path="/Rooms/:id" element={<Roompage/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>        
        <Footer />


    </div>
  );
}

export default App;
