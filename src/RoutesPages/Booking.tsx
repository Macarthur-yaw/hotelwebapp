import React, { useState } from 'react';
import bgOne from '../assets/Gallery5.jpg'
import { 
  Person, 
  Email, 
  Phone, 
  CalendarToday, 
  Hotel, 
  Group, 
  AccessTime,
  Restaurant,
  Notes 
} from '@mui/icons-material';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  specialRequests: string;
  dietaryRequirements: string;
  arrivalTime: string;
}

interface FormErrors {
  [key: string]: string;
}

interface RoomType {
  value: string;
  label: string;
}

interface GuestOption {
  value: string;
  label: string;
}

export default function Booking(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: '',
    specialRequests: '',
    dietaryRequirements: '',
    arrivalTime: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-out date is required';
    if (!formData.roomType) newErrors.roomType = 'Room type is required';

    // Validate email format
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate dates
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (checkInDate < today) {
        newErrors.checkIn = 'Check-in date cannot be in the past';
      }
      
      if (checkOutDate <= checkInDate) {
        newErrors.checkOut = 'Check-out date must be after check-in date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Booking submitted:', formData);
      alert('Booking request submitted successfully! We will contact you shortly to confirm your reservation.');
      // Here you would typically send the data to your backend
    }
  };

  const roomTypes: RoomType[] = [
    { value: '', label: 'Select Room Type' },
    { value: 'standard', label: 'Standard Room - $150/night' },
    { value: 'deluxe', label: 'Deluxe Room - $200/night' },
    { value: 'suite', label: 'Executive Suite - $350/night' },
    { value: 'presidential', label: 'Presidential Suite - $500/night' }
  ];

  const guestOptions: GuestOption[] = [
    { value: '1', label: '1 Guest' },
    { value: '2', label: '2 Guests' },
    { value: '3', label: '3 Guests' },
    { value: '4', label: '4 Guests' },
    { value: '5+', label: '5+ Guests' }
  ];

  return (
    <div>

        <div className="relative">
            <img src={bgOne} className='w-full h-[100px] md:h-[250px] object-cover' loading='lazy'/>   
           <span className="absolute bottom-2 md:bottom-10 left-1/2 transform  -translate-x-1/2">
      <h1 id="header" className="font-medium text-[1.5rem] md:text-[3rem] text-white border-b-2 ">Book your Stay</h1>
           </span>
           <div className="w-full absolute bg-black h-[100px] md:h-[250px] bg-opacity-40 top-0">
      
           </div>
           </div>
   
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
    
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Reserve Your Stay</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the form below to book your perfect getaway at our luxury hotel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
          {/* Personal Information Section */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <Person className="text-gray-700 mr-3" fontSize="large" />
              <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Email className="mr-2 text-gray-600" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Phone className="mr-2 text-gray-600" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>
            </div>
          </div>

          {/* Reservation Details Section */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <CalendarToday className="text-gray-700 mr-3" fontSize="large" />
              <h2 className="text-2xl font-semibold text-gray-800">Reservation Details</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Date *
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                    errors.checkIn ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.checkIn && (
                  <p className="mt-1 text-sm text-red-600">{errors.checkIn}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out Date *
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                    errors.checkOut ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.checkOut && (
                  <p className="mt-1 text-sm text-red-600">{errors.checkOut}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label htmlFor="guests" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Group className="mr-2 text-gray-600" />
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                >
                  {guestOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="roomType" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Hotel className="mr-2 text-gray-600" />
                  Room Type *
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors ${
                    errors.roomType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  {roomTypes.map((room) => (
                    <option key={room.value} value={room.value}>
                      {room.label}
                    </option>
                  ))}
                </select>
                {errors.roomType && (
                  <p className="mt-1 text-sm text-red-600">{errors.roomType}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="arrivalTime" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <AccessTime className="mr-2 text-gray-600" />
                Expected Arrival Time
              </label>
              <input
                type="time"
                id="arrivalTime"
                name="arrivalTime"
                value={formData.arrivalTime}
                onChange={handleInputChange}
                className="w-full md:w-1/2 px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
              />
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="mb-10">
            <div className="flex items-center mb-6">
              <Notes className="text-gray-700 mr-3" fontSize="large" />
              <h2 className="text-2xl font-semibold text-gray-800">Additional Information</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="dietaryRequirements" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Restaurant className="mr-2 text-gray-600" />
                  Dietary Requirements
                </label>
                <input
                  type="text"
                  id="dietaryRequirements"
                  name="dietaryRequirements"
                  value={formData.dietaryRequirements}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                  placeholder="Vegetarian, Gluten-free, Allergies, etc."
                />
              </div>
              
              <div>
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Anniversary celebration, early check-in, specific room preferences, accessibility needs, etc."
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
                  className="px-6 cursor-pointer py-2 md:px-8 md:py-3 font-semibold bg-[#5F9C33] text-white text-sm md:text-base border-2 border-[#CE9E37] hover:bg-[#CE9E37] hover:border-[#5F9C33] transition-colors duration-300 flex items-center gap-2"
                >
              Complete Reservation
            </button>
            <p className="mt-4 text-sm text-gray-600">
              * Required fields. We'll send you a confirmation email within 24 hours.
            </p>
          </div>
        </form>
      </div>
    </div>
     </div>
  );
}