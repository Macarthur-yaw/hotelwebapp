import {FaBars,FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useState } from 'react';
import {useContext} from 'react'
import { OverlayContext } from '../App';
const Navbar = () => {
    let overlay=useContext<boolean|null>(OverlayContext)
    const[overlayState,setOverlayState]=useState<boolean|null >(overlay)
 
    const[display,setDisplay]=useState<boolean>(false)
function changeDisplay(){
    setDisplay(prevState=>!prevState)
    overlay=!overlay
}
    return ( 
        <div className="  ">
<nav>
{display && (
<motion.div
    initial={{x:-100}}
    animate={{x:0}}
    transition={{duration:0.5}}
    exit={{x:-100}}
    className='top-0 flex items-center flex-col justify-center shadow-md z-20 border-t-[1px] p-2 fixed h-[100%] w-[60%] bg-white '>
<ul className="  flex text-[13px] p-4 font-medium flex-col  items-center gap-10 justify-between  px-4 "> 


<li>
Home           
</li>
<li>
Rooms
</li>

<li>
Services
</li>

<li>
Gallery 
</li>

<li>
About us
</li>

<li>
Contact 
</li>
</ul> 
    <button className="  block border-2  h-[40px] px-2 font-semibold bg-black md:text-[0.8rem] text-[0.7rem] text-white border-black">BOOK US NOW</button>
    </motion.div>
)}

</nav>
<nav className=" flex flex-row fixed w-[100%] z-10 md:justify-around justify-between p-4 items-center   bg-white  shadow-md border-2 border-white">
<span className="font-semibold text-center text-[18px] flex flex-col">
<h1 className="font-bold text-[20px]">   Hotel</h1> 

<h3 className="text-sm">  Logo</h3> 
</span>

<span onClick={changeDisplay}>
    <FaBars/>
    </span>

      
   <ul className="hidden  md:flex md:flex-row items-center gap-10 justify-between md:px-10 px-4 "> 


            <li>
     Home           
            </li>
        <li>
            Rooms
        </li>

<li>
    Services
</li>

<li>
    Gallery 
</li>

<li>
    About us
</li>

<li>
    Contact 
</li>
        </ul> 
    <button className=" hidden md:block border-2 p-2 font-semibold bg-black text-[0.8rem] text-white border-black">BOOK US NOW</button>
        </nav>
    </div>
     );
}
 
export default Navbar;