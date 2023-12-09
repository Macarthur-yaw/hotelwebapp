import Body from "./Components/Body";
import './App.css';
// import Homepage from "./Pages/Homepage";
import { Route,Routes } from "react-router-dom";
import Services from "./RoutesPages/Services";
import Gallery from "./RoutesPages/Gallery";
import About from "./RoutesPages/About";
import Rooms from "./RoutesPages/Rooms";
import Roompage from "./RoutesPages/Roompage";
// import { Rooms } from "./Constant/Rooms";
import Contact from "./RoutesPages/Contact";

import Pages from "./Pages";
import Booking from "./RoutesPages/Booking";
const RouteLinks = () => {
    return (  
        <>
       
        <Routes>
            <Route path="/" element={<Pages/>}>
      <Route index element={<Body />} />
      
<Route path="/services" element={<Services />} />
<Route path="/gallery" element={<Gallery/>} />
<Route path='/about' element={<About/>}/>
<Route path="/rooms" element={<Rooms/>}/>
<Route path="/Rooms/:id" element={<Roompage/>}/>
<Route path="/contact" element={<Contact/>}/>

</Route>

<Route path="/booking" element={<Booking/>}/>

</Routes>          
        </>
    );
}
 
export default RouteLinks;