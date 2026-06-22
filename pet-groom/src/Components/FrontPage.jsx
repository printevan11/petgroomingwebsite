import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  // Appointment form inputs
  const [formData, setFormData] = useState({
    customerName: '',
    contactNumber: '',
    email: '',
    location: '',
    petType: '',
    groomingService: '',
    dateTime: '',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xnjkqdoz', {
        method: 'POST',
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          customerName: '',
          contactNumber: '',
          email: '',
          location: '',
          petType: '',
          groomingService: '',
          dateTime: '',
          specialRequests: ''
        });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const scrollToForm = () => {
    document.getElementById('book-appointment')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] w-full font-sans antialiased overflow-x-hidden flex flex-col justify-start">
      
      {/* --- SECTION 1: HERO & APPOINTMENT OVERLAY --- */}
      <div 
        className="relative min-h-[520px] md:min-h-[580px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/Pet 1.png')" }}
      >
        {/* Semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-black/45 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-12 pb-24 md:pb-32 flex flex-col items-center text-center text-white">
          
          <span className="text-xs sm:text-sm md:text-base font-bold tracking-wider mb-2 text-white/95 uppercase">
            Mobile Pet Grooming Specialists
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-[40px] font-extrabold tracking-tight leading-tight max-w-3xl mb-4 text-white">
            Professional Care For Your pet
          </h1>

          <div className="flex items-center justify-center w-full max-w-xs mb-5 opacity-90">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <img src="src/assets/logo-white.png" alt="Logo" className="w-24 h-auto mx-3" />
            <div className="h-[1px] w-12 bg-white/60"></div>
          </div>

          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl mb-6 font-medium">
            At Furever, our passion for pets and dedication to top-notch service ensure your fur babies get the pampering they deserve—all in the comfort of your home.
          </p>

          <button 
            type="button"
            className="bg-[#4295b9] hover:bg-[#347fa0] text-white font-bold px-7 py-2.5 rounded-lg transition-all duration-150 active:scale-95 shadow-md text-xs sm:text-sm tracking-wide"
          >
            Our Services
          </button>

        </div>
      </div>

      {/* --- BOOK APPOINTMENT CARD OVERLAY --- */}
      <div id="book-appointment" className="relative w-full max-w-5xl mx-auto px-4 z-20 -mt-16 md:-mt-20 pb-12">
        <form 
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 flex flex-col gap-5"
        >
          {/* Section Header with Side Borders */}
          <div className="flex items-center w-full justify-between gap-4 mb-1">
            <div className="h-[1px] flex-grow bg-slate-300"></div>
            <h2 className="text-lg md:text-xl font-extrabold text-slate-800 tracking-wide select-none">
              Book Appointment
            </h2>
            <div className="h-[1px] flex-grow bg-slate-300"></div>
          </div>

          {/* Success toast inside form */}
          {submitted && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-4 py-3 rounded-lg text-center animate-fade-in">
              Thank you! Your appointment request has been submitted successfully.
            </div>
          )}

          {/* Two-Column Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            
            {/* Customer Name */}
            <div className="relative flex items-center bg-[#e9eff4] border border-[#d6e2ec] rounded-lg px-3.5 py-2.5">
              <span className="text-slate-600 mr-2.5 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </span>
              <input 
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Customer Name*"
                required
                className="w-full bg-transparent border-none text-slate-800 text-xs font-semibold placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Contact Number */}
            <div className="relative flex items-center bg-[#e9eff4] border border-[#d6e2ec] rounded-lg px-3.5 py-2.5">
              <span className="text-slate-600 mr-2.5 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.01-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </span>
              <input 
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Contact Number*"
                required
                className="w-full bg-transparent border-none text-slate-800 text-xs font-semibold placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Your Email */}
            <div className="relative flex items-center bg-[#e9eff4] border border-[#d6e2ec] rounded-lg px-3.5 py-2.5">
              <span className="text-slate-600 mr-2.5 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </span>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full bg-transparent border-none text-slate-800 text-xs font-semibold placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Your Location */}
            <div className="relative flex items-center bg-[#e9eff4] border border-[#d6e2ec] rounded-lg px-3.5 py-2.5">
              <span className="text-slate-600 mr-2.5 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </span>
              <input 
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your Location"
                className="w-full bg-transparent border-none text-slate-800 text-xs font-semibold placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Pet Type Select Dropdown */}
            <div className="relative flex items-center bg-[#e9eff4] border border-[#d6e2ec] rounded-lg px-3.5 py-2.5">
              <span className="text-slate-600 mr-2.5 flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm0 0c0 1.105 1.343 2 3 2s3-.895 3-2-1.343-2-3-2-3 .895-3 2zm-9 6c0-1.657 4.03-3 9-3s9 1.343 9 3v2H3v-2z" />
                </svg>
              </span>
              <select
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                className="w-full bg-transparent border-none text-slate-800 text-xs font-semibold placeholder-slate-500 focus:outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled hidden>Pet Type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="other">Other</option>
              </select>
              <div className="pointer-events-none absolute right-3.5 flex items-center text-slate-600">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Grooming Service Select Dropdown */}
            <div className="relative flex items-center bg-[#e9eff4] border border-[#d6e2ec] rounded-lg px-3.5 py-2.5">
              <span className="text-slate-600 mr-2.5 flex-shrink-0">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14c-1.66 0-3 1.34-3 3 0 2 2 3.5 3 4.5 1-1 3-2.5 3-4.5 0-1.66-1.34-3-3-3zm-4.5-3c-.83 0-1.5-.67-1.5-1.5S6.67 8 7.5 8s1.5.67 1.5 1.5S8.33 11 7.5 11zm9 0c-.83 0-1.5-.67-1.5-1.5S15.67 8 16.5 8s1.5.67 1.5 1.5S17.33 11 16.5 11zM12 8c-.83 0-1.5-.67-1.5-1.5S11.17 5 12 5s1.5.67 1.5 1.5S12.83 8 12 8z" />
                </svg>
              </span>
              <select
                name="groomingService"
                value={formData.groomingService}
                onChange={handleChange}
                className="w-full bg-transparent border-none text-slate-800 text-xs font-semibold placeholder-slate-500 focus:outline-none appearance-none cursor-pointer"
              >
                <option value="" disabled hidden>Grooming Service</option>
                <option value="bath-brush">Bath & Brush</option>
                <option value="full-groom">Full Grooming</option>
                <option value="nail-trim">Nail Trimming</option>
              </select>
              <div className="pointer-events-none absolute right-3.5 flex items-center text-slate-600">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Date & Time Picker Input */}
            <div className="relative flex flex-col bg-[#e9eff4] border border-[#d6e2ec] rounded-lg px-3.5 py-2.5 h-[84px]">
              <div className="flex items-center gap-1.5 text-slate-800 mb-0.5">
                <svg className="w-4 h-4 text-slate-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
                <span className="text-[11px] font-bold">Date & Time</span>
              </div>
              <input
                type="datetime-local"
                name="dateTime"
                value={formData.dateTime}
                onChange={handleChange}
                className="w-full bg-transparent border-none text-slate-700 text-[11px] font-semibold focus:outline-none flex-grow"
              />
            </div>

            {/* Special Requests Notes Textarea */}
            <div className="relative flex flex-col bg-[#e9eff4] border border-[#d6e2ec] rounded-lg px-3.5 py-2.5 h-[84px]">
              <div className="flex items-center gap-1.5 text-slate-800 mb-0.5">
                <svg className="w-4 h-4 text-slate-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
                <span className="text-[11px] font-bold">Special Requests Notes</span>
              </div>
              <textarea 
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Any Allergic reactions or special handling"
                className="w-full bg-transparent border-none text-slate-700 text-[11px] font-semibold placeholder-slate-400 focus:outline-none resize-none flex-grow"
              />
            </div>

          </div>

          {/* Action Submit Row */}
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-8 py-3 rounded-lg transition-all duration-150 active:scale-95 shadow-md text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 w-full md:w-[65%]"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
              <span>Book Appointment</span>
            </button>
          </div>

        </form>
      </div>

      {/* --- SECTION 2: ABOUT US (Furever Mobile Pet Grooming) --- */}
      <div className="relative w-full bg-[#FAF6F3] text-slate-800 py-16 px-6 overflow-hidden">
        
        {/* --- Background Watermarks (SVG lines mirroring image_3a1abe.png / image_39b926.png) --- */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.08]">
          {/* Top Left - Dog Bone */}
          <svg className="absolute top-4 left-6 w-24 h-16 text-amber-900 rotate-12" fill="currentColor" viewBox="0 0 100 50">
            <path d="M20 15 C 10 15, 10 35, 20 35 C 25 35, 30 30, 35 30 L 65 30 C 70 30, 75 35, 80 35 C 90 35, 90 15, 80 15 C 75 15, 70 20, 65 20 L 35 20 C 30 20, 25 15, 20 15 Z" />
            <circle cx="18" cy="18" r="8" /><circle cx="18" cy="32" r="8" /><circle cx="82" cy="18" r="8" /><circle cx="82" cy="32" r="8" />
          </svg>
          {/* Upper Center - Cat Outline */}
          <svg className="absolute top-8 left-[35%] w-28 h-28 text-amber-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <path d="M30 65 C 20 60, 20 40, 30 35 C 33 25, 45 22, 50 28 C 55 22, 67 25, 70 35 C 80 40, 80 60, 70 65 C 65 75, 35 75, 30 65 Z" />
            <path d="M32 36 L 24 20 L 42 27" /><path d="M68 36 L 76 20 L 58 27" />
          </svg>
          {/* Center Left - Yarn Ball */}
          <svg className="absolute bottom-4 left-[10%] w-32 h-32 text-amber-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="32" />
            <path d="M30 30 Q 50 60, 70 30" /><path d="M22 50 Q 50 20, 78 50" /><path d="M30 70 Q 50 40, 70 70" />
          </svg>
          {/* Center Background - Soft Paw Print */}
          <svg className="absolute top-[20%] left-[48%] w-36 h-36 text-amber-900 rotate-[15deg]" fill="currentColor" viewBox="0 0 100 100">
            <ellipse cx="50" cy="62" rx="16" ry="13" />
            <circle cx="26" cy="40" r="8" /><circle cx="40" cy="27" r="9" /><circle cx="60" cy="27" r="9" /><circle cx="74" cy="40" r="8" />
          </svg>
          {/* Lower Right (Behind Pets) - Second Yarn Ball */}
          <svg className="absolute bottom-2 right-[5%] w-36 h-36 text-amber-900 -rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="32" />
            <path d="M30 30 Q 50 60, 70 30" /><path d="M22 50 Q 50 20, 78 50" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Left Text Grid Column */}
          <div className="w-full md:w-[56%] flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-4">
              Furever Mobile Pet Grooming
            </h2>

            <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600 font-medium mb-4">
              We bring the spa to your pet. Furever{' '}
              <span className="text-[#ff7878] font-bold">
                delivers professional and caring grooming
              </span>{' '}
              for your cats and dogs, straight to your home in Bacolod. From a simple nail trim to a 
              full groom, we provide expert service with a gentle, loving touch—ensuring a calm and 
              happy experience for your furry friend.
            </p>

            <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-slate-600 font-medium mb-6">
              We believe your pet is family, and that's exactly how we treat them. Relax, and let us 
              handle the pampering.
            </p>

            <div>
              <a
                href="/aboutus"
                className="bg-[#3e95b9] hover:bg-[#327da0] text-white font-extrabold px-8 py-2.5 rounded-lg shadow-sm transition-all text-xs tracking-wide inline-block"
              >
                About Us
              </a>
            </div>
          </div>

          {/* Right Photo Column containing Furever puppy and cat cutout */}
          <div className="w-full md:w-[44%] flex justify-center">
            <div className="relative max-w-[340px] md:max-w-full">
              <img 
                src="src/assets/pet 2.png" 
                alt="Furever Pets Portrait" 
                className="w-full object-contain"
              />
            </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 3: OUR GROOMING SERVICES --- */}
      <div className="w-full bg-[#FAF8F5] py-16 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight mb-2">
            Our Grooming Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Choose the perfect grooming package for your furry friend. We cater to both dogs and cats.
          </p>
        </div>

        {/* 3 Columns Grid for Pricing Packages */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Bath & Brush */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Bath & Brush</h3>
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">Affordable</span>
              </div>
              <p className="text-[12px] text-slate-500 font-medium mb-5">Perfect for maintenance between full cuts.</p>
              
              <ul className="space-y-2.5 mb-8">
                {["Warm Water Massage Bath", "Blow Dry & Thorough Brush Out", "Ear Cleaning & Eye Wipe", "Nail and Paw Pad Trim"].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[12px] text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-[#3e95b9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={scrollToForm} className="w-full bg-[#FAF8F5] border border-slate-200 text-slate-700 hover:bg-[#e9eff4] py-2 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
              Book Now
            </button>
          </div>

          {/* Card 2: Full Groom (MOST POPULAR) */}
          <div className="relative bg-white rounded-2xl p-6 border-2 border-[#6FAED9] shadow-md flex flex-col justify-between transition-all hover:shadow-lg">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffb800] text-white text-[9px] font-black tracking-widest px-4 py-1 rounded-full uppercase">
              Most Popular
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Full Groom</h3>
                <span className="bg-[#ffb800]/10 text-[#ffb800] text-[10px] font-bold px-2 py-0.5 rounded-full">Best Seller</span>
              </div>
              <p className="text-[12px] text-slate-500 font-medium mb-5">Our signature full service styling grooming.</p>

              <ul className="space-y-2.5 mb-8">
                {[
                  "Everything in Bath & Brush",
                  "Full Body Styled Haircut & Styling",
                  "Sanitary Trim",
                  "De-shedding Treatment",
                  "Anal Gland Expression (Upon Request)"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[12px] text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-[#3e95b9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={scrollToForm} className="w-full bg-[#3e95b9] hover:bg-[#327da0] text-white py-2 px-4 rounded-xl text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
              Book Now
            </button>
          </div>

          {/* Card 3: Royal Treatment */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/50 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wider">Royal Treatment</h3>
                <span className="bg-[#3e95b9]/10 text-[#3e95b9] text-[10px] font-bold px-2 py-0.5 rounded-full">Premium</span>
              </div>
              <p className="text-[12px] text-slate-500 font-medium mb-5">Luxurious grooming with complete care treatments.</p>

              <ul className="space-y-2.5 mb-8">
                {[
                  "Everything in Full Groom",
                  "Teeth Brushing & Breath Spray",
                  "Flea & Tick Treatment Bath",
                  "Nail Buffing & Filing",
                  "Argan Oil Coat Conditioning"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[12px] text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-[#3e95b9] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button onClick={scrollToForm} className="w-full bg-[#FAF8F5] border border-slate-200 text-slate-700 hover:bg-[#e9eff4] py-2 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
              Book Now
            </button>
          </div>

        </div>
      </div>

      {/* --- SECTION 4: GALLERY / WORK SHOWCASE --- */}
      <div className="w-full bg-white py-14 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Gallery Item 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm mb-3 border border-slate-100 bg-slate-100">
              <img 
                src="src/assets/cut1.png" 
                alt="Before Grooming" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[12px] font-bold text-slate-700">Before Grooming</span>
          </div>

          {/* Gallery Item 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm mb-3 border border-slate-100 bg-slate-100">
              <img 
                src="src/assets/cut2.png" 
                alt="After Grooming" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[12px] font-bold text-slate-700">After Grooming</span>
          </div>

          {/* Gallery Item 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm mb-3 border border-slate-100 bg-slate-100">
              <img 
                src="src/assets/cut3.png" 
                alt="Royal Grooming" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[12px] font-bold text-slate-700">Before Grooming</span>
          </div>

          {/* Gallery Item 4 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm mb-3 border border-slate-100 bg-slate-100">
              <img 
                src="src/assets/cut4.png" 
                alt="Star Grooming" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-[12px] font-bold text-slate-700">After Grooming</span>
          </div>

        </div>
      </div>

      {/* --- SECTION 5: COMPLETE PET GROOMING MIDDLE BANNER --- */}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/dog-cat.png')" }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white flex flex-col items-center">
          
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-3">
            Complete Pet Grooming
          </h2>

          <div className="flex items-center justify-center w-full max-w-xs mb-4 opacity-90">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <img src="src/assets/logo-white.png" alt="Logo" className="w-20 h-auto mx-3" />
            <div className="h-[1px] w-12 bg-white/60"></div>
          </div>

          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl mb-6 font-medium">
            At Furever, we provide high-quality, professional, and convenient mobile pet grooming services for your fur babies. We treat them like family, straight to your home.
          </p>

          <button
            type="button"
            onClick={scrollToForm}
            className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 active:scale-95 shadow-md text-xs tracking-wide flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
            </svg>
            Book Now
          </button>

        </div>
      </div>

      {/* --- SECTION 6: BLOG ARTICLES GRID --- */}
      <div className="relative w-full bg-[#FAF6F3] py-16 px-6 overflow-hidden">
        
        {/* Soft centered circular background watermark representing the Blog header tag */}
        <div className="absolute top-[8%] left-[50%] transform -translate-x-1/2 pointer-events-none select-none z-0 opacity-[0.04]">
          <svg className="w-40 h-40 text-amber-900" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Blog
          </h2>
        </div>

        {/* 3 Columns Grid for Articles */}
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Article 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/40 flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <img 
                  src="src/assets/cat1.png" 
                  alt="A DIY Reasons Why Pet Grooming is Important" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-black text-slate-800 leading-snug mb-3 hover:text-[#3e95b9] transition-colors cursor-pointer">
                  4 DIY Reasons Why Pet Grooming is Important
                </h3>
                <p className="text-[11.5px] leading-relaxed text-slate-500 font-medium">
                  Regular grooming is important for your pet's health and happiness. Learn how you can keep them clean and healthy with these simple DIY grooming tips...
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="text-[11.5px] font-extrabold text-[#3e95b9] hover:text-[#2d7694] transition-colors cursor-pointer">
                Read More &gt;
              </span>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/40 flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <img 
                  src="src/assets/dog1.png" 
                  alt="How to Keep Your House Clean With Dogs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-black text-slate-800 leading-snug mb-3 hover:text-[#3e95b9] transition-colors cursor-pointer">
                  How to Keep Your House Clean With Dogs
                </h3>
                <p className="text-[11.5px] leading-relaxed text-slate-500 font-medium">
                  Living with a dog means dealing with shed hair, muddy paws, and occasional accidents. Here are some smart ways to maintain a pristine home...
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="text-[11.5px] font-extrabold text-[#3e95b9] hover:text-[#2d7694] transition-colors cursor-pointer">
                Read More &gt;
              </span>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/40 flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                <img 
                  src="src/assets/cat2.png" 
                  alt="Professional Cat Grooming Guide" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-sm font-black text-slate-800 leading-snug mb-3 hover:text-[#3e95b9] transition-colors cursor-pointer">
                  Professional Cat Grooming Guide You'll Ever Need
                </h3>
                <p className="text-[11.5px] leading-relaxed text-slate-500 font-medium">
                  Cats are great self-groomers, but they still need professional attention. Discover our comprehensive cat grooming tips and packages...
                </p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <span className="text-[11.5px] font-extrabold text-[#3e95b9] hover:text-[#2d7694] transition-colors cursor-pointer">
                Read More &gt;
              </span>
            </div>
          </div>

        </div>

        {/* Soft bottom watermarks */}
        <div className="absolute bottom-4 left-[35%] pointer-events-none select-none z-0 opacity-[0.03]">
          <svg className="w-24 h-24 text-amber-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="32" /><path d="M30 30 Q 50 60, 70 30" />
          </svg>
        </div>
      </div>

      {/* --- SECTION 7: BOTTOM CTA FOOTER BANNER --- */}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat border-t border-slate-200"
        style={{ backgroundImage: "url('src/assets/dog-cat1.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white flex flex-col items-center">
          
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-3">
            Professional Pet Care
          </h2>

          <div className="flex items-center justify-center w-full max-w-xs mb-4 opacity-90">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <img src="src/assets/logo-white.png" alt="Logo" className="w-20 h-auto mx-3" />
            <div className="h-[1px] w-12 bg-white/60"></div>
          </div>

          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl mb-6 font-medium">
            Join hundreds of happy pet owners who trust Furever for all their pet care needs. Schedule your appointment today!
          </p>

          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 active:scale-95 shadow-md text-xs tracking-wide flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
            <span>Contact Us</span>
          </button>

        </div>
      </div>

    </div>
  );
}