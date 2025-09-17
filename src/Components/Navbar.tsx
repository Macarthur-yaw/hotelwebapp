import {FaTimes} from 'react-icons/fa'
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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (display) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [display]);

    const menuVariants = {
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    };

    const overlayVariants = {
        closed: {
            opacity: 0,
            transition: {
                delay: 0.2
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: (i:any) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 25
            }
        })
    };

    const menuItems = [
        { to: '/', label: 'Home' },
        { to: '/rooms', label: 'Rooms' },
        { to: '/gallery', label: 'Services & Gallery' },
        { to: '/about', label: 'About us' },
        { to: '/contact', label: 'Contact' }
    ];

    return ( 
        <div className="">
            <AnimatePresence>
                {display && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            variants={overlayVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={() => setDisplay(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Mobile Menu */}
                        <motion.nav 
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-white to-gray-50 shadow-2xl z-50 md:hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                                    <p className="text-sm text-gray-500">Hotel Logo</p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setDisplay(false)}
                                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                                >
                                    <FaTimes className="text-gray-600 text-xl" />
                                </motion.button>
                            </div>

                            {/* Menu Items */}
                            <div className="px-6 py-8">
                                <ul className="space-y-2">
                                    {menuItems.map((item, index) => (
                                        <motion.li
                                            key={item.to}
                                            custom={index}
                                            variants={linkVariants}
                                            initial="closed"
                                            animate="open"
                                        >
                                            <Link 
                                                to={item.to} 
                                                onClick={handleLinkClick}
                                                className="group flex items-center px-4 py-3 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-black transition-all duration-300 font-medium"
                                            >
                                                <span className="group-hover:translate-x-2 transition-transform duration-300">
                                                    {item.label}
                                                </span>
                                                <motion.span
                                                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    initial={{ x: -10 }}
                                                    whileHover={{ x: 0 }}
                                                >
                                                    →
                                                </motion.span>
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Mobile booking button */}
                                <motion.div
                                    custom={menuItems.length}
                                    variants={linkVariants}
                                    initial="closed"
                                    animate="open"
                                    className="mt-8 pt-6 border-t border-gray-200"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => {
                                            navigate('/booking');
                                            setDisplay(false);
                                        }}
                                        className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        BOOK US NOW
                                    </motion.button>
                                </motion.div>

                                {/* Decorative element */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.5, type: "spring" }}
                                    className="mt-8 flex justify-center"
                                >
                                    <div className="w-12 h-1 bg-gradient-to-r from-gray-300 to-gray-500 rounded-full"></div>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>

            {/* Main navbar */}
            <nav className={`${scrollPosition > 100 ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'} fixed flex flex-row w-full p-4 md:z-20 ${display ? 'z-30' : 'z-20'} top-0 md:justify-around justify-between items-center transition-all duration-300`}>
                <motion.span 
                    className="font-semibold text-center text-[18px] flex flex-col"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <h1 id='heading' className="font-medium text-[30px]">Hotel</h1> 
                    <h3 className="text-sm opacity-80">Logo</h3> 
                </motion.span>

                {/* Enhanced hamburger menu for mobile */}
                <motion.button
                    onClick={changeDisplay} 
                    className="md:hidden relative p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={display ? "open" : "closed"}
                        className="flex flex-col justify-around w-6 h-6"
                    >
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 8 }
                            }}
                            className="w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
                        />
                        <motion.span
                            variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 }
                            }}
                            className="w-6 h-0.5 bg-current"
                        />
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -8 }
                            }}
                            className="w-6 h-0.5 bg-current transform origin-center transition-all duration-300"
                        />
                    </motion.div>
                </motion.button>

                {/* Desktop menu */}
                <ul className={`${scrollPosition > 100 ? 'text-black' : 'text-white'} hidden text-[18px] md:flex md:flex-row items-center gap-10 justify-between md:px-10 px-4`}> 
                    {menuItems.map((item) => (
                        <Link key={item.to} to={item.to}>
                            <motion.li 
                                className="hover:text-gray-400 transition-colors duration-200 cursor-pointer"
                                whileHover={{ y: -2 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                {item.label}
                            </motion.li>
                        </Link>
                    ))}
                </ul> 

                <motion.button
                    id='header'
                    onClick={() => navigate('/booking')}
                    className="hidden md:block border-[1px] p-[8px] font-semibold bg-white text-[0.8rem] text-black border-black hover:bg-gray-100 transition-all duration-200"
                    whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                >
                    BOOK US NOW
                </motion.button>
            </nav>
        </div>
    );
}
 
export default Navbar;