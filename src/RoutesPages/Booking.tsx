import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
interface arguState{
    name:string,
    email:string,
    phone:string,
    checkInDate:Date|null,
    checkOutDate:Date|null,
    roomType:string,
    numberOfAdults:string,
    numberOfChildren:string
}
const Booking = () => {
  const [formData, setFormData] = useState<arguState>({
    name: '',
    email: '',
    phone: '',
    checkInDate: null,
    checkOutDate: null,
    roomType: 'standard', 
    numberOfAdults: '1', 
    numberOfChildren: '0',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  
  const handleDateChange = (date: Date | null, field: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date,
    }));
  };
  
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // Add your logic to handle the form data (e.g., send it to a server)
    console.log('Form submitted:', formData);
  };

  return (
    <div className='flex flex-row mt-20'>    <form onSubmit={handleSubmit} className="max-w-md flex flex-col gap-2 mx-auto  mb-20">
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
<span>
  Incase you need to cancel your booking, please contact us at 
<p> arthurkevin1260@gmail.com</p> 
  </span>
    </div>

  );
};

export default Booking;
