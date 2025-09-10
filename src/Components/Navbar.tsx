import {FaBars,FaTimes} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const navigate = useNavigate() 
    const [display, setDisplay] = useState<boolean>(false)
    const [scrollPosition, setScrollPosition] = useState<number>(0);

    function changeDisplay() {
        setDisplay(prevState => !prevState)
    }

    useEffect(() => {
        const handleChange = () => {
            setScrollPosition(window.scrollY)
        }
        window.addEventListener('scroll', handleChange)
        return () => {
            window.removeEventListener('scroll', handleChange)
        }
    }, [])

    // Close mobile menu when clicking on links
    const handleLinkClick = () => {
        setDisplay(false)
    }

    return ( 
        <div className="">
            <AnimatePresence>
                {display && (
                    <motion.nav 
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ 
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        className={`${scrollPosition > 100 ? 'bg-white z-30 transition-all duration-75' : '  bg-white shadow-lg  shadow-lg h-[5vh] text-black'} left-0  shadow-md z-30 p-2 px-4 fixed  py-6 w-full md:hidden`}
                    >
                        <div>
                            <span onClick={() => setDisplay(false)} className='text-2xl'>
                                <FaTimes className='ml-auto cursor-pointer hover:text-gray-600 transition-colors duration-200'/>
                            </span>
                            <ul className={`${scrollPosition > 100 ? 'text-black' : ''} text-[18px] flex flex-col gap-1 mx-auto font-medium items-center py-1`}> 
                                <Link to='/' onClick={handleLinkClick}>
                                    <li className="hover:text-gray-600 transition-colors duration-200">
                                        Home           
                                    </li>
                                </Link>
                                <Link to='/rooms' onClick={handleLinkClick}>
                                    <li className="hover:text-gray-600 transition-colors duration-200">
                                        Rooms
                                    </li>
                                </Link>
                                <Link to='/gallery' onClick={handleLinkClick}>
                                    <li className="hover:text-gray-600 transition-colors duration-200">
                                        Services & Gallery 
                                    </li>
                                </Link>
                                <Link to='/about' onClick={handleLinkClick}>
                                    <li className="hover:text-gray-600 transition-colors duration-200">
                                        About us
                                    </li>
                                </Link>
                                <Link to='/contact' onClick={handleLinkClick}>
                                    <li className="hover:text-gray-600 transition-colors duration-200">
                                        Contact 
                                    </li>
                                </Link>
                                {/* Mobile booking button */}
                                {/* <button
                                    onClick={() => {
                                        navigate('/booking');
                                        setDisplay(false);
                                    }}
                                    className="border-[1px] p-[8px] px-6 font-semibold bg-black text-[0.8rem] text-white border-black hover:bg-gray-800 transition-colors duration-200"
                                >
                                    BOOK US NOW
                                </button> */}
                            </ul> 
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            <nav className={`${scrollPosition > 100 ? 'bg-white text-black ' : 'bg-transparent text-white'} absolute flex flex-row sm:fixed w-[100%] p-4 md:z-20 ${display ? 'z-0' : 'z-20'} top-0 md:justify-around justify-between items-center border-b border-gray-300 border-opacity-50 border-b-0.5`}>
                <span className="font-semibold text-center text-[18px] flex flex-col">
                    <h1 id='heading' className="font-medium text-[30px]">Hotel</h1> 
                    <h3 className="text-sm">Logo</h3> 
                </span>

                {/* Dynamic menu icon for mobile */}
                <motion.span 
                    onClick={changeDisplay} 
                    className={`${scrollPosition > 100 ? '' : ''} cursor-pointer md:hidden text-2xl`}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.1 }}
                >
                    <motion.div
                        key={display ? 'close' : 'menu'}
                        initial={{ rotate: 0, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {display ? <FaTimes /> : <FaBars />}
                    </motion.div>
                </motion.span>

                {/* Desktop menu */}
                <ul className={`${scrollPosition > 100 ? 'text-black' : 'text-white'} hidden text-[18px] md:flex md:flex-row items-center gap-10 justify-between md:px-10 px-4`}> 
                    <Link to='/'>
                        <li className="hover:text-gray-400 transition-colors duration-200">
                            Home           
                        </li>
                    </Link>
                    <Link to='/rooms'>
                        <li className="hover:text-gray-400 transition-colors duration-200">
                            Rooms
                        </li>
                    </Link>
                    <Link to='/gallery'>
                        <li className="hover:text-gray-400 transition-colors duration-200">
                            Services & Gallery 
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className="hover:text-gray-400 transition-colors duration-200">
                            About us
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li className="hover:text-gray-400 transition-colors duration-200">
                            Contact 
                        </li>
                    </Link>
                </ul> 

                <button
                    id='header'
                    onClick={() => navigate('/booking')}
                    className="hidden md:block border-[1px] p-[8px] font-semibold bg-white text-[0.8rem] text-black border-black hover:bg-gray-100 transition-colors duration-200"
                >
                    BOOK US NOW
                </button>
            </nav>
        </div>
    );
}
 
export default Navbar;