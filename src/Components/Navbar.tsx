const Navbar = () => {
    return ( 
        <div className="  ">
<nav className="w-[80%]   top-8 bg-white border-white absolute left-[9.5%] z-10 rounded-xl shadow-md border-2 p-2"
>     <ul className="flex flex-row items-center  justify-between md:px-10 px-4 "> 
            <li>
                Home
            </li>
        <li>
            About
        </li>

<li>
    Newsletter
</li>
<li className="font-semibold text-center text-[18px] flex flex-col">
 <h1 className="font-bold text-[20px]">   Hotel</h1> 

 <h3 className="text-sm">  Logo</h3> 
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
        </ul> 
        </nav>
    </div>
     );
}
 
export default Navbar;