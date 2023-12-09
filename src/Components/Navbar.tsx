import {FaBars,FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
const Navbar = () => {
const navigate=useNavigate() 
    const[display,setDisplay]=useState<boolean>(false)
const[scrollPosition,setScrollPosition]=useState<number>(0);
    function changeDisplay(){
    setDisplay(prevState=>!prevState)
}
useEffect(()=>{

    const handleChange=()=>[
        setScrollPosition(window.scrollY)
    ]
    window.addEventListener('scroll',handleChange)
    return()=>{
        window.removeEventListener('scroll',handleChange)
    }
},[])

    return ( 
        <div className="  ">
            <AnimatePresence initial={false} >
            {display && (
<motion.nav 
    
    initial={{x:120}}
    animate={{x:0}}
    transition={{duration:0.1}}
    exit={{x:100}}
    className={`${scrollPosition > 100 ? 'bg-white z-20 transition-all  duration-75':' z-20 bg-white text-black'} left-0 top-0  shadow-md z-20  p-2 px-4 fixed md:absolute h-screen py-6 w-full  `}>
    

<div>
    <span onClick={()=>setDisplay(false)} className='text-2xl'>
        <FaTimes className='ml-auto'/>
    </span>
<ul className={`${scrollPosition > 100 ? 'text-black':''}   text-[18px] flex flex-col gap-14 mx-auto  font-medium  items-center    py-10 `}> 

<Link to='/'>
<li>
Home           
</li>
</Link>
<Link to='/rooms'>
<li>
Rooms
</li>
</Link>


<Link to='/gallery'>
<li>
Services & Gallery 
</li>
</Link>
<Link to='/about'>
<li>
About us
</li>
</Link>
<Link to='/contact'>
<li>
Contact 
</li>
</Link>
</ul> 
    </div>


</motion.nav>
)}
</AnimatePresence>
<nav className={`${scrollPosition > 100 ? 'bg-white text-black ':'bg-transparent text-white'} absolute flex flex-row sm:fixed w-[100%] p-4 md:z-20 ${display ? 'z-0':'z-20'} top-0 md:justify-around justify-between  items-center      border-b border-gray-300 border-opacity-50  border-b-0.5`}>
<span className="font-semibold text-center text-[18px] flex flex-col">
<h1 id='heading' className="font-medium text-[30px]">   Hotel</h1> 

<h3 className="text-sm ">  Logo</h3> 
</span>

<span onClick={changeDisplay} className={`${scrollPosition >100 ? '':''} cursor-pointer md:hidden  text-2xl`}>
<FaBars/>    
    </span>

      
   <ul className={`${scrollPosition > 100 ? 'text-black':'text-white'} hidden text-[18px] md:flex md:flex-row items-center gap-10 justify-between md:px-10 px-4 `}> 


           <Link to='/'> <li>
     Home           
            </li></Link>
      <Link to='/rooms'>  <li>
            Rooms
        </li></Link>


<Link to='/gallery'>
<li>
Services & Gallery 
</li>
</Link>
<Link to='/about'>
<li>
    About us
</li>
</Link>
<Link to='/contact'>
<li>
    Contact 
</li>
</Link>
        </ul> 
    <button
    id='header'
    onClick={()=>navigate('/booking')}
    className=" hidden md:block border-[1px] p-[8px] font-semibold bg-white  text-[0.8rem] text-black border-black">BOOK US NOW</button>
        </nav>
    </div>
     );
}
 
export default Navbar;