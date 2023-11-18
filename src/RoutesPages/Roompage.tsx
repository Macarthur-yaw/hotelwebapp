import { useParams } from "react-router-dom";
import {useState} from 'react'
// import { RoomCards } from "../Components/RoomCards";
import bgOne from '../assets/bgOne.jpg'
import { Rooms as RoomConst } from "../Constant/Rooms";
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// interface arguState{
//     name:string,
//     email:string,
//     phone:string,
//     checkInDate:Date|null,
//     checkOutDate:Date|null,
//     roomType:string,
//     numberOfAdults:string,
//     numberOfChildren:string
// }

const Roompage = () => {
    const {id}= useParams();
    const numId:number | undefined= id? parseInt(id,10):undefined

const[display,setDisplay]=useState<string>('')
const[displayValue,setDisplayValue]=useState<boolean>(false)
    // console.log(id);
const handleDisplay=(imgUrl:string)=>{
setDisplay(imgUrl)
setDisplayValue(!false)
}

    // const [formData, setFormData] = useState<arguState>({
    //   name: '',
    //   email: '',
    //   phone: '',
    //   checkInDate: null,
    //   checkOutDate: null,
    //   roomType: 'standard', 
    //   numberOfAdults: '1', 
    //   numberOfChildren: '0',
    // });
  
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    //   const { name, value } = e.target;
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }));
    // };
    
    
    // const handleDateChange = (date: Date | null, field: string) => {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [field]: date,
    //   }));
    // };
    
    // const handleSubmit = (e:React.FormEvent) => {
    //   e.preventDefault();
    //   // Add your logic to handle the form data (e.g., send it to a server)
    //   console.log('Form submitted:', formData);
    // };
  
  

    return (  
 <div>
    
 <div className="relative">
      <img src={bgOne} className='w-full h-[100px] md:h-[250px] object-cover'/>   
     <span className="absolute bottom-2 md:bottom-10 left-1/2 transform  -translate-x-1/2">
<h1 id="header" className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2 ">Premier Hotel</h1>
     </span>
     <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0">

     </div>
     </div>
 {/* <img src={display}/> */}
 <div className='flex flex-row'>
        <div className="mt-10 px-10">
            
<div className="flex flex-col gap-4">
            {RoomConst.map((content) => (
            <div
              key={content.id}
              className={`${numId === content.id ?'block':'hidden'}   `}
            >
              <img
                loading="lazy"
                src={displayValue ? display : content.imgUrl}
                className="md:w-[600px] sm:h-[350px] h-[300px] object-cover"
                alt=""
              />
              {/* <span className="flex flex-row justify-between py-4 items-center p-2">
                <h2> {content.title}</h2>
                <button  
                className="bg-black text-white p-2 text-[0.8rem]">
Book now                
</button>
              </span>
            */ }      <div className="flex flex-row gap-[1px] mt-4 mb-4"> 
                {
                    content.items?.map((contents)=>(
                        <div key={contents.id}
                         className={`${numId === content.id ? 'block':'hidden'}`}>
<img onClick={()=>handleDisplay(contents.imgUrl)}
 src={contents.imgUrl} className="w-[150px] md:h-[100px] h-[100px] cursor-pointer object-cover"/>
      
                       </div>
                    )

                    )
                }
                </div>

                <div className="w-[50%] flex flex-col gap-2">
            <h1 className="font-medium text-[20px]">{content.title}</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, rerum? Culpa numquam autem, optio saepe unde enim harum quam non aliquid eveniet nesciunt dolor dolorum animi dolore architecto quibusdam veritatis.</h2>
            </div>
            </div>
          ))}
            
        </div>
        </div>
        
         {/* <form onSubmit={handleSubmit} className=" flex flex-col w-[60%] px-10 gap-2  mb-20">
    <h1 className='text-center font-semibold text-xl'>  Make a Reservation</h1>
      <div className="mb-4">
      
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 border outline-none  w-full"
          required
      placeholder='Name'
      />
      </div>

      <div className="mb-4">
       
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 border  w-full outline-none"
          placeholder='Email'
          required
        />
      </div>

      <div className="mb-4">
        
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder='Phone'
          className="mt-1 p-2 border  w-full outline-none"
          required
        />
      </div>

<div className='flex flex-row gap-4'>
      <div className="mb-4">
        <DatePicker
       placeholderText='Check-in Date'
       selected={formData.checkInDate}
          onChange={(date) => handleDateChange(date, 'checkInDate')}
          className="mt-1 p-2 border  w-full"
          dateFormat="MM/dd/yyyy"
          minDate={new Date()}
          required
        />
      </div>

      <div className="mb-4">
        <DatePicker
       placeholderText='Check-out Date'
       selected={formData.checkOutDate}
          onChange={(date) => handleDateChange(date, 'checkOutDate')}
          className="mt-1 p-2 border  w-full"
          dateFormat="MM/dd/yyyy"
          minDate={formData.checkInDate || new Date()}
          required
        />
      </div>
      </div>
      <div className="mb-4">
        
        <select
          id="roomType"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          placeholder='Room Type'
          className="mt-1 p-2 border  w-full"
        >
          <option value="standard">Standard Room</option>
          <option value="deluxe">Deluxe Room</option>
          <option value="suite">Suite</option>
        </select>
      </div>

<div className='flex flex-row gap-4'>
      <div className="mb-4">
        
        <select
          id="numberOfAdults"
          name="numberOfAdults"
          value={formData.numberOfAdults}
          onChange={handleChange}
        placeholder='Number of Adults'
          className="mt-1 p-2 border  w-full"
        >
          {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={String(num)}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
    
        <select
          id="numberOfChildren"
          name="numberOfChildren"
          value={formData.numberOfChildren}
          onChange={handleChange}
          className="mt-1 p-2 border  w-full"
    placeholder='Number of Children'
    >
          {Array.from({ length: 5 }, (_, i) => i).map((num) => (
            <option key={num} value={String(num)}>
              {num}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="bg-black text-white p-2 w-[100%]">
          Book Now
        </button>
      </div>
    </form>
    */}
        </div>
        </div>);
}
 
export default Roompage;