import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] w-full font-sans antialiased overflow-x-hidden flex flex-col justify-start">
      
      {}
      {/* --- SECTION 1: HERO HEADER "About Us" --- */}
      <div 
        className="relative h-[280px] md:h-[340px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/cut-hair1.png')" }}
      >
        {/* Semi-transparent dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
            About Us
          </h1>
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-300">
             Home • About
          </p>
        </div>
      </div>

      {}
      {/* --- SECTION 2: WHO WE ARE --- */}
      <div className="relative w-full bg-[#FAF6F3] text-slate-800 py-16 px-6 overflow-hidden border-b border-slate-100">
        
        {/* Soft Background Watermarks (matching image_580bc4.jpg) */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.06]">
          {/* Top Left - Dog Bone */}
          <svg className="absolute top-8 left-12 w-28 h-20 text-amber-950 rotate-[15deg]" fill="currentColor" viewBox="0 0 100 50">
            <path d="M20 15 C 10 15, 10 35, 20 35 C 25 35, 30 30, 35 30 L 65 30 C 70 30, 75 35, 80 35 C 90 35, 90 15, 80 15 C 75 15, 70 20, 65 20 L 35 20 C 30 20, 25 15, 20 15 Z" />
            <circle cx="18" cy="18" r="8" /><circle cx="18" cy="32" r="8" /><circle cx="82" cy="18" r="8" /><circle cx="82" cy="32" r="8" />
          </svg>
          {/* Top Center/Right - Cat Outline */}
          <svg className="absolute top-4 right-[25%] w-32 h-32 text-amber-950 rotate-[-12deg]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <path d="M30 65 C 20 60, 20 40, 30 35 C 33 25, 45 22, 50 28 C 55 22, 67 25, 70 35 C 80 40, 80 60, 70 65 C 65 75, 35 75, 30 65 Z" />
            <path d="M32 36 L 24 20 L 42 27" /><path d="M68 36 L 76 20 L 58 27" />
          </svg>
          {/* Left Center - Yarn Ball */}
          <svg className="absolute bottom-6 left-[15%] w-36 h-36 text-amber-950" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="32" />
            <path d="M30 30 Q 50 60, 70 30" /><path d="M22 50 Q 50 20, 78 50" /><path d="M30 70 Q 50 40, 70 70" />
          </svg>
          {/* Right Center - Paw Print */}
          <svg className="absolute top-[25%] right-[8%] w-40 h-40 text-amber-950 rotate-[22deg]" fill="currentColor" viewBox="0 0 100 100">
            <ellipse cx="50" cy="62" rx="16" ry="13" />
            <circle cx="26" cy="40" r="8" /><circle cx="40" cy="27" r="9" /><circle cx="60" cy="27" r="9" /><circle cx="74" cy="40" r="8" />
          </svg>
        </div>

        {}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14">
          
          {/* Left Text Column */}
          <div className="w-full md:w-[54%] flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight mb-5">
              Who We Are
            </h2>

            <p className="text-[13.5px] md:text-[14px] leading-relaxed text-slate-600 font-medium mb-4">
              Furever is dedicated to providing{' '}
              <span className="text-[#ff7878] font-bold">
                professional and caring grooming
              </span>{' '}
              for your cats and dogs, straight to your home in Bacolod. We understand that your pets are part of your family, and that's why we always treat them with love and respect.
            </p>

            <p className="text-[13.5px] md:text-[14px] leading-relaxed text-slate-600 font-medium mb-6">
              Our experienced groomers are trained to handle everything from baths and styling to de-shedding and ear cleaning, keeping your pets safe, happy, and looking their best.
            </p>

            <div>
              <a href="/?#book-appointment" className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-5 py-2 rounded-lg shadow-sm transition-all text-xs tracking-wide inline-flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                </svg>
                Book Now
              </a>
            </div>
          </div>

          {}
          {/* Right Image Column (Wet Dog Portrait with Towel) */}
          <div className="w-full md:w-[46%] flex justify-center">
            <div className="relative max-w-[380px] md:max-w-full rounded-2xl overflow-hidden shadow-lg border-4 border-white/80 bg-slate-100 aspect-[4/3] w-full">
              <img 
                src="/assets/Dog3.png" 
                alt="Wet Dog Grooming Care" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {}
      {/* --- SECTION 3: STATEMENT DIVIDER WITH LOGO --- */}
      <div className="w-full bg-[#eeeeee] py-14 px-6 text-center border-b border-slate-200">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          
          <img src="/assets/furever-logo1.png" alt="Logo" className="w-28 h-auto select-none opacity-80" />

          <p className="text-base md:text-lg font-bold text-slate-700 leading-relaxed max-w-2xl">
            Enjoy exceptional care, personalized attention, and a loving touch that turns every visit into a happy, stress-free experience for your pet.
          </p>
        </div>
      </div>

      {}
      {/* --- SECTION 4: THREE PET PORTRAITS --- */}
      <div className="w-full bg-white py-14 px-6 border-b border-slate-100">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Portrait 1: Wirehaired Terrier */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100 aspect-[4/3]">
            <img 
              src="/assets/doggy.png" 
              alt="Terrier Grooming Showcase" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Portrait 2: Chow Chow with Sunglasses */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100 aspect-[4/3]">
            <img 
              src="/assets/doggy1.png" 
              alt="Funny Chow Grooming Showcase" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Portrait 3: White Poodle Cutting */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-100 aspect-[4/3]">
            <img 
              src="/assets/doggy2.png" 
              alt="Poodle Trim Grooming Showcase" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

        </div>
      </div>

      {}
      {/* --- SECTION 5: COMPLETE PET GROOMING BANNER --- */}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/dog-cat.png')" }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white flex flex-col items-center">
          
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-3">
            Complete Pet Grooming
          </h2>

          <div className="flex items-center justify-center w-full max-w-xs mb-4 opacity-90">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <img src="/assets/logo-white.png" alt="Logo" className="w-20 h-auto mx-3" />
            <div className="h-[1px] w-12 bg-white/60"></div>
          </div>

          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl mb-6 font-medium">
            At Furever, we provide high-quality, professional, and convenient mobile pet grooming services for your fur babies. We treat them like family, straight to your home.
          </p>

          <a href="/#book-appointment" className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 shadow-md text-xs tracking-wide flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
            </svg>
            Book Now
          </a>

        </div>
      </div>

      {}
      {/* --- SECTION 6: BLOG ARTICLES GRID --- */}
      <div className="relative w-full bg-[#FAF6F3] py-16 px-6 overflow-hidden border-b border-slate-100">
        
        {/* Soft Background Watermarks */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.05]">
          <svg className="absolute top-[8%] left-[50%] transform -translate-x-1/2 w-44 h-44 text-amber-950" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
          <svg className="absolute bottom-6 right-12 w-28 h-20 text-amber-950 -rotate-[15deg]" fill="currentColor" viewBox="0 0 100 50">
            <path d="M20 15 C 10 15, 10 35, 20 35 C 25 35, 30 30, 35 30 L 65 30 C 70 30, 75 35, 80 35 C 90 35, 90 15, 80 15 C 75 15, 70 20, 65 20 L 35 20 C 30 20, 25 15, 20 15 Z" />
            <circle cx="18" cy="18" r="8" /><circle cx="18" cy="32" r="8" /><circle cx="82" cy="18" r="8" /><circle cx="82" cy="32" r="8" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">
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
                  src="/assets/cat1.png" 
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
                  src="/assets/dog1.png" 
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
                  src="/assets/cat2.png" 
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
      </div>

      {}
      {/* --- SECTION 7: BOTTOM CTA FOOTER BANNER --- */}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat border-t border-slate-200"
        style={{ backgroundImage: "url('/assets/dog-cat1.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white flex flex-col items-center">
          
          <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight mb-3">
            Professional Pet Care
          </h2>

          <div className="flex items-center justify-center w-full max-w-xs mb-4 opacity-90">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <img src="/assets/logo-white.png" alt="Logo" className="w-20 h-auto mx-3" />
            <div className="h-[1px] w-12 bg-white/60"></div>
          </div>

          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl mb-6 font-medium">
            Join hundreds of happy pet owners who trust Furever for all their pet care needs. Schedule your appointment today!
          </p>

          <button 
            type="button"
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