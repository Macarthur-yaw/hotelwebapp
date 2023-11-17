const Navbar = () => {
    return ( 
        <div className="  ">
<nav className=" flex flex-row justify-around p-4 items-center   bg-white  shadow-md border-2 border-white">
<span className="font-semibold text-center text-[18px] flex flex-col">
<h1 className="font-bold text-[20px]">   Hotel</h1> 

<h3 className="text-sm">  Logo</h3> 
</span>

   <ul className="flex flex-row items-center gap-10 justify-between md:px-10 px-4 "> 


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
    <button className="border-2 p-2 font-semibold bg-black text-[0.8rem] text-white border-black">BOOK US NOW</button>
        </nav>
    </div>
     );
}
 
export default Navbar;