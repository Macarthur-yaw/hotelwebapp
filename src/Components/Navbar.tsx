import {FaBars,FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
const navigate=useNavigate() 
    const[display,setDisplay]=useState<boolean>(false)
function changeDisplay(){
    setDisplay(prevState=>!prevState)
}

    return ( 
        <div className="  ">
<nav className='p-4'>
{display && (
<motion.div
    initial={{y:-100}}
    animate={{y:70}}
    transition={{duration:0.5}}
    exit={{y:-100}}
    className='left-0  shadow-md z-10 border-t-[1px] p-2 px-4 fixed h-fit w-full bg-white '>
<ul className="   text-[16px] flex  flex-col justify-between  font-medium  items-center    py-4 "> 


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
    </motion.div>
)}

</nav>
<nav className=" flex flex-row fixed w-[100%] z-20 top-0 md:justify-around justify-between p-4 items-center   bg-white  shadow-md border-2 border-white">
<span className="font-semibold text-center text-[18px] flex flex-col">
<h1 className="font-bold text-[20px]">   Hotel</h1> 

<h3 className="text-sm">  Logo</h3> 
</span>

<span onClick={changeDisplay} className='md:hidden'>
{display ? <FaTimes/>:<FaBars/>}    
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
    <button
    onClick={()=>navigate('/booking')}
    className=" hidden md:block border-2 p-2 font-semibold bg-black text-[0.8rem] text-white border-black">BOOK US NOW</button>
        </nav>
    </div>
     );
}
 
export default Navbar;