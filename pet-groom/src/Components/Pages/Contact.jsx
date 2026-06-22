import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    petName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', petName: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white w-full font-sans antialiased overflow-x-hidden flex flex-col justify-start relative text-slate-800">
      
      {}
      {/* --- SECTION 1: HERO HEADER with background image_64aff9.jpg --- */}
      <div 
        className="relative min-h-[280px] md:min-h-[340px] w-full flex flex-col items-center justify-center py-8 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/Contact-1.png')" }}
      >
        {/* Semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-black/45 z-0"></div>

        {/* Center Text Headers */}
        <div className="relative z-10 text-center text-white my-4">
          <h1 className="text-3.5xl md:text-[44px] font-black tracking-tight mb-2">
            Contact
          </h1>
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-200">
            Home • Contact
          </p>
        </div>
      </div>

      {/* --- SECTION 2: MAIN FORM & SIDEBAR --- */}
      <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {}
          {/* Main Form Area (Left Column) */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            
            <div className="space-y-1">
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">
                Send us a Message
              </h2>
              <p className="text-xs md:text-[13px] text-slate-500 font-semibold">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-4 py-3 rounded-lg text-center animate-fade-in shadow-sm">
                Thank you! Your message has been sent successfully. We will respond shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Your Name & Pet's Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f4f7fc] border border-slate-200 rounded-full px-5 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#3b92b3] focus:ring-1 focus:ring-[#3b92b3]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 ml-1">Pet's Name (Optional)</label>
                  <input 
                    type="text" 
                    name="petName"
                    value={formData.petName}
                    onChange={handleChange}
                    className="w-full bg-[#f4f7fc] border border-slate-200 rounded-full px-5 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#3b92b3] focus:ring-1 focus:ring-[#3b92b3]"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f4f7fc] border border-slate-200 rounded-full px-5 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#3b92b3] focus:ring-1 focus:ring-[#3b92b3]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#f4f7fc] border border-slate-200 rounded-full px-5 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#3b92b3] focus:ring-1 focus:ring-[#3b92b3]"
                  />
                </div>
              </div>

              {/* Row 3: Subject */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 ml-1">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f4f7fc] border border-slate-200 rounded-full px-5 py-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#3b92b3] focus:ring-1 focus:ring-[#3b92b3]"
                />
              </div>

              {/* Row 4: Message */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#f4f7fc] border border-slate-200 rounded-[28px] p-5 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#3b92b3] focus:ring-1 focus:ring-[#3b92b3] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-3 rounded-lg transition-all duration-150 active:scale-95 shadow-md text-xs tracking-wide"
              >
                Send Message
              </button>

            </form>
          </div>

          {}
          {/* Sidebar & Info Column (Right Column) */}
          <div className="lg:col-span-4 flex flex-col space-y-6 w-full">
            
            {/* Contact Information Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/50 shadow-md flex flex-col space-y-5">
              
              <h3 className="text-sm md:text-base font-black text-slate-800 tracking-tight leading-none">
                Contact Information
              </h3>

              <div className="flex flex-col space-y-5">
                
                {/* Visit Us Address */}
                <div className="flex items-start gap-3">
                  <span className="text-[#3b92b3] flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-slate-800">Visit Us</span>
                    <span className="text-[11px] font-bold text-slate-500 leading-relaxed">
                      123 Grooming Lane, Mapple City, CA 12345
                    </span>
                  </div>
                </div>

                {/* Contact Phone (Intentionally Duplicated Address to Match Typo in image_64aff9.jpg) */}
                <div className="flex items-start gap-3">
                  <span className="text-[#3b92b3] flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.01-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-slate-800">Contact</span>
                    {/* Exact Typo Replication under Contact as shown in image_64aff9.jpg */}
                    <span className="text-[11px] font-bold text-slate-500 leading-relaxed">
                      123 Grooming Lane, Mapple City, CA 12345
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <span className="text-[#3b92b3] flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-black text-slate-800">Email</span>
                    <span className="text-[11px] font-bold text-slate-500 leading-relaxed">
                      hello@furever.com
                    </span>
                  </div>
                </div>

                {/* Follow Us */}
                <div className="pt-2 border-t border-slate-100 flex flex-col space-y-1.5">
                  <span className="text-[11px] font-black text-slate-500 uppercase tracking-wider">Follow us</span>
                  <a 
                    href="#facebook" 
                    className="w-6 h-6 rounded-full bg-[#3b92b3] hover:bg-[#2d7694] transition-colors flex items-center justify-center text-white"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                </div>

              </div>

            </div>

            {}
            {/* Satellite Map Simulated Frame */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200/50 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" 
                alt="Bacolod Satellite Map View" 
                className="w-full h-full object-cover brightness-[0.85] contrast-[1.1]"
              />
              {/* Soft overlay representing visual map borders */}
              <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color"></div>

              {/* Bacolod Map Pin & Label Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-1.5">
                <div className="bg-black/75 backdrop-blur-[1px] px-3 py-1 rounded-md text-[10px] font-extrabold text-white uppercase tracking-wider shadow-md border border-white/10 select-none">
                  Bacolod
                </div>
                {/* Clean Map Pointer Pin Icon */}
                <svg className="w-7 h-7 text-red-500 drop-shadow-md animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
            </div>

          </div>

        </div>
      </div>

      {}
      {/* --- SECTION 3: BOTTOM COMPLETE PET GROOMING BANNER --- */}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat border-t border-slate-200"
        style={{ backgroundImage: "url('src/assets/dog-cat1.png')" }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/65 z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white flex flex-col items-center">
          
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-3 select-none">
            Complete Pet Grooming
          </h2>

          <div className="flex items-center justify-center w-full max-w-xs mb-4 opacity-90">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <img src="src/assets/logo-white.png" alt="Logo" className="w-20 h-auto mx-3" />
            <div className="h-[1px] w-12 bg-white/60"></div>
          </div>

          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl mb-6 font-medium">
            At Furever, we provide high-quality, consistent, and value-for-money pet-friendly care and grooming services that keep your pets happy, comfortable, and excited to return.
          </p>

          <a
            href="/#book-appointment"
            className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 shadow-md text-xs tracking-wide flex items-center gap-1.5"
          >
            {/* Perfectly sized calendar SVG icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
            </svg>
            <span>Book Now</span>
          </a>

        </div>
      </div>

    </div>
  );
}