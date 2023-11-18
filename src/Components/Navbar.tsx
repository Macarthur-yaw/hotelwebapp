import {FaBars,FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
<nav className=''>
{display && (
<motion.div
    initial={{y:10}}
    animate={{y:90}}
    transition={{duration:0.5}}
    exit={{y:-100}}
    className={`${scrollPosition > 100 ? 'bg-white z-10 transition-all duration-75':' z-10 bg-transparent text-white'}left-0  shadow-md z-10  p-2 px-4 sm:fixed absolute h-fit w-full  `}>
<ul className={`${scrollPosition > 100 ? 'text-black':'text-white'}   text-[18px] flex  flex-col justify-between  font-medium  items-center    py-4 `}> 

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
<Link to='/services'>
<li>
Services
</li>
</Link>

<Link to='/gallery'>
<li>
Gallery 
</li>
</Link>
<Link to='/about'>
<li>
About us
</li>
</Link>
<li>
Contact 
</li>
</ul> 
    </motion.div>
)}

</nav>
<nav className={`${scrollPosition > 100 ? 'bg-white text-black ':'bg-transparent text-white'} absolute flex flex-row sm:fixed w-[100%] p-4 z-20 top-0 md:justify-around justify-between  items-center      border-b border-gray-300 border-opacity-50  border-b-0.5`}>
<span className="font-semibold text-center text-[18px] flex flex-col">
<h1 id='heading' className="font-medium text-[30px]">   Hotel</h1> 

<h3 className="text-sm ">  Logo</h3> 
</span>

<span onClick={changeDisplay} className={`${scrollPosition >100 ? 'text-black':'text-white'} cursor-pointer md:hidden  text-2xl`}>
{display ? <FaTimes/>:<FaBars/>}    
    </span>

      
   <ul className={`${scrollPosition > 100 ? 'text-black':'text-white'} hidden text-[18px] md:flex md:flex-row items-center gap-10 justify-between md:px-10 px-4 `}> 


           <Link to='/'> <li>
     Home           
            </li></Link>
      <Link to='/rooms'>  <li>
            Rooms
        </li></Link>

<Link to='/services'><li>
    Services
</li>
</Link>
<Link to='/gallery'>
<li>
    Gallery 
</li>
</Link>
<Link to='/about'>
<li>
    About us
</li>
</Link>

<li>
    Contact 
</li>
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