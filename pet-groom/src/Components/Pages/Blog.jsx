import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerAction = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] w-full font-sans antialiased overflow-x-hidden flex flex-col justify-start relative">
      
      {/* Toast Alert Box */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3b92b3] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-xl border border-sky-300/20 animate-fade-in flex items-center gap-2">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* --- SECTION 1: HERO HEADER "Blog" --- */}
      {}
      <div 
        className="relative h-[280px] md:h-[340px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/blog_pic.png')" }}
      >
        {/* Semi-transparent warm overlay */}
        <div className="absolute inset-0 bg-black/45 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
            Blog
          </h1>
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-200">
            Home • Blog
          </p>
        </div>
      </div>

      {/* --- SECTION 2: BLOG POSTS GRID WITH WATERMARKS --- */}
      {}
      <div className="relative w-full bg-[#FAF6F3] text-slate-800 py-16 px-6 overflow-hidden border-b border-slate-100">
        
        {/* Soft Background Watermarks matching image_6275e2.jpg layout */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-[0.06]">
          {/* Top Left - Dog Bone */}
          <svg className="absolute top-8 left-12 w-28 h-20 text-amber-950 rotate-[15deg]" fill="currentColor" viewBox="0 0 100 50">
            <path d="M20 15 C 10 15, 10 35, 20 35 C 25 35, 30 30, 35 30 L 65 30 C 70 30, 75 35, 80 35 C 90 35, 90 15, 80 15 C 75 15, 70 20, 65 20 L 35 20 C 30 20, 25 15, 20 15 Z" />
            <circle cx="18" cy="18" r="8" /><circle cx="18" cy="32" r="8" /><circle cx="82" cy="18" r="8" /><circle cx="82" cy="32" r="8" />
          </svg>
          {/* Top Center - Cat Outline */}
          <svg className="absolute top-4 right-[25%] w-32 h-32 text-amber-950 rotate-[-12deg]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <path d="M30 65 C 20 60, 20 40, 30 35 C 33 25, 45 22, 50 28 C 55 22, 67 25, 70 35 C 80 40, 80 60, 70 65 C 65 75, 35 75, 30 65 Z" />
            <path d="M32 36 L 24 20 L 42 27" /><path d="M68 36 L 76 20 L 58 27" />
          </svg>
          {/* Bottom Left - Yarn Ball */}
          <svg className="absolute bottom-6 left-[10%] w-36 h-36 text-amber-950" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="32" />
            <path d="M30 30 Q 50 60, 70 30" /><path d="M22 50 Q 50 20, 78 50" /><path d="M30 70 Q 50 40, 70 70" />
          </svg>
          {/* Right Center - Paw Print */}
          <svg className="absolute top-[25%] right-[5%] w-40 h-40 text-amber-950 rotate-[22deg]" fill="currentColor" viewBox="0 0 100 100">
            <ellipse cx="50" cy="62" rx="16" ry="13" />
            <circle cx="26" cy="40" r="8" /><circle cx="40" cy="27" r="9" /><circle cx="60" cy="27" r="9" /><circle cx="74" cy="40" r="8" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Intro Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-4 select-none">
              Blog
            </h2>
            <p className="text-sm leading-relaxed text-slate-500 font-medium max-w-2xl mx-auto">
              Expert grooming, professional care, and the comfort of home—everything your pet needs to look and feel their best.
            </p>
          </div>

          {/* 3 Columns Grid for Articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            
            {/* Blog Post 1 */}
            <Link to="/post1" className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/40 flex flex-col justify-between transition-all hover:shadow-md hover:scale-[1.01] duration-200">
              <div>
                <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src="/assets/cat1.png"
                    alt="4 BIG Reasons Why Pet Grooming is Important"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-800 leading-snug mb-3 hover:text-[#3e95b9] transition-colors cursor-pointer">
                    4 BIG Reasons Why Pet Grooming is Important
                  </h3>
                  <div className="h-[2px] w-12 bg-[#3e95b9] mb-4"></div>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">
                    Proper grooming helps keep your pet healthy by reducing shedding and preventing issues such as fleas, ticks, and skin-related problems. More than just improving appearance, regular grooming allows early detection of potential health concerns, enabling prompt care and treatment before they develop into serious conditions.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <span className="text-xs font-extrabold text-[#3e95b9] hover:text-[#2d7694] transition-colors cursor-pointer flex items-center gap-1">
                  Read More &gt;
                </span>
              </div>
            </Link>

            {/* Blog Post 2 */}
            <Link to="/post2" className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/40 flex flex-col justify-between transition-all hover:shadow-md hover:scale-[1.01] duration-200">
              <div>
                <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src="/assets/dog1.png"
                    alt="How to Keep Your House Clean With Dogs"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-800 leading-snug mb-3 hover:text-[#3e95b9] transition-colors cursor-pointer">
                    How to Keep Your House Clean With Dogs
                  </h3>
                  <div className="h-[2px] w-12 bg-[#3e95b9] mb-4"></div>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">
                    Most dogs benefit from a bath about once a month, depending on their coat type and activities. Breeds with oily or long coats, such as Basset Hounds and Siberian Huskies, may require more frequent bathing—sometimes as often as once a week.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <span className="text-xs font-extrabold text-[#3e95b9] hover:text-[#2d7694] transition-colors cursor-pointer flex items-center gap-1">
                  Read More &gt;
                </span>
              </div>
            </Link>

            {/* Blog Post 3 */}
            <Link to="/post3" className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/40 flex flex-col justify-between transition-all hover:shadow-md hover:scale-[1.01] duration-200">
              <div>
                <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src="/assets/cat2.png"
                    alt="Professional Cat Grooming Guide You'll Ever Need"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-800 leading-snug mb-3 hover:text-[#3e95b9] transition-colors cursor-pointer">
                    Professional Cat Grooming Guide You'll Ever Need
                  </h3>
                  <div className="h-[2px] w-12 bg-[#3e95b9] mb-4"></div>
                  <p className="text-xs leading-relaxed text-slate-500 font-medium">
                    Most short-haired cats should be brushed every other day to keep their fur smooth and soft. Although the process only takes a few minutes, it plays an important role in maintaining your cat's overall health and appearance. Regular grooming helps remove loose hair, preventing tangles and hairballs from forming.
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0">
                <span className="text-xs font-extrabold text-[#3e95b9] hover:text-[#2d7694] transition-colors cursor-pointer flex items-center gap-1">
                  Read More &gt;
                </span>
              </div>
            </Link>

          </div>

        </div>
      </div>

      {/* --- SECTION 3: COMPLETE PET GROOMING MIDDLE BANNER --- */}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/dog-cat1.png')" }}
      >
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white flex flex-col items-center">
          
          <h2 className="text-2xl font-black tracking-tight leading-tight mb-3">
            Complete Pet Grooming
          </h2>

          <div className="flex items-center justify-center w-full max-w-xs mb-4 opacity-90">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <img src="/assets/logo-white.png" alt="Logo" className="w-20 h-auto mx-3" />
            <div className="h-[1px] w-12 bg-white/60"></div>
          </div>

          <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-xl mb-6 font-semibold">
            At Furever, we provide high-quality, consistent, and value-for-money pet-friendly care and grooming services that keep your pets happy, comfortable, and excited to return.
          </p>

          <a
            href="/#book-appointment"
            className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 shadow-md text-xs tracking-wide flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
            </svg>
            <span>Book Now</span>
          </a>

        </div>
      </div>

      {/* --- SECTION 4: OUR GROOMING SERVICES --- */}
      {}
      <div className="w-full bg-[#FAF8F5] py-16 px-6 border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight mb-2">
            Our Grooming Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Choose the perfect grooming package for your FUREVER friend. We cater to both dogs and cats.
          </p>
        </div>

        {/* 3 Columns Grid for Pricing Packages */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Bath & Brush */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/50 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-extrabold text-slate-800 tracking-wide">Bath & Brush</h3>
                <span className="bg-slate-100 text-slate-600 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">Essential</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-6">Perfect for maintenance between haircuts.</p>
              
              <ul className="space-y-3 mb-8">
                {["Warm hydro-massage bath", "Blow-dry & thorough brush out", "Ear cleaning & Nail Trim", "Scented cologne finish"].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-[#3e95b9] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="/#book-appointment" className="w-full bg-[#FAF8F5] border border-slate-200 text-slate-700 hover:bg-[#e9eff4] py-2.5 px-4 rounded-xl text-xs font-bold transition-colors inline-block text-center flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
              Book Now
            </a>
          </div>

          {/* Card 2: Full Groom (MOST POPULAR) */}
          <div className="relative bg-white rounded-3xl p-6 border-2 border-[#ffb800] shadow-md flex flex-col justify-between transition-all hover:shadow-lg">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffb800] text-white text-[9px] font-black tracking-widest px-4 py-1 rounded-full uppercase">
              Most Popular
            </div>

            <div className="mt-2">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-extrabold text-slate-800 tracking-wide flex items-center gap-1.5">
                  Full Groom
                  <svg className="w-4 h-4 text-[#ffb800]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-6">Complete style overhaul for your pet.</p>

              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Bath & Brush",
                  "Custom haircut & breed styling",
                  "Sanitary trim",
                  "Paw pad shaving",
                  "Anal gland expression (on request)"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-[#3e95b9] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="/#book-appointment"
              className="w-full bg-[#3e95b9] hover:bg-[#327da0] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
              Book Now
            </a>
          </div>

          {/* Card 3: Royal Treatment */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/50 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-extrabold text-slate-800 tracking-wide">Royal Treatment</h3>
                <span className="bg-slate-100 text-slate-600 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">Premium</span>
              </div>
              <p className="text-xs text-slate-500 font-medium mb-6">Complete style overhaul for your pet.</p>

              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Full Groom",
                  "Teeth brushing & breath spray",
                  "Blueberry facial scrub",
                  "Deep conditioning treatment",
                  "Moisturizing paw balm"
                ].map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                    <svg className="w-4 h-4 text-[#3e95b9] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href="/#book-appointment"
              className="w-full bg-[#FAF8F5] border border-slate-200/60 text-slate-700 hover:bg-[#e9eff4] py-2.5 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
              </svg>
              Book Now
            </a>
          </div>

        </div>
      </div>

      {/* --- SECTION 5: GALLERY PORTRAITS GRID --- */}
      {}
      <div className="w-full bg-white py-14 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Portrait 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm mb-3 border border-slate-100 bg-slate-100">
              <img 
                src="/assets/cut1.png" 
                alt="Before Grooming Portrait 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Before Grooming</span>
          </div>

          {/* Portrait 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm mb-3 border border-slate-100 bg-slate-100">
              <img 
                src="/assets/cut2.png" 
                alt="After Grooming Portrait 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">After Grooming</span>
          </div>

          {/* Portrait 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm mb-3 border border-slate-100 bg-slate-100">
              <img 
                src="/assets/cut3.png" 
                alt="Before Grooming Portrait 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Before Grooming</span>
          </div>

          {/* Portrait 4 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm mb-3 border border-slate-100 bg-slate-100">
              <img 
                src="/assets/cut4.png" 
                alt="After Grooming Portrait 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">After Grooming</span>
          </div>

        </div>
      </div>

      {/* --- SECTION 6: BOTTOM CONTACT BANNER "Professional Pet Care" --- */}
      {}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat border-t border-slate-200"
        style={{ backgroundImage: "url('/assets/dog-cat1.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white flex flex-col items-center">
          
          <h2 className="text-2xl font-black tracking-tight leading-tight mb-3">
            Professional Pet Care
          </h2>

          <div className="flex items-center justify-center w-full max-w-xs mb-4 opacity-90">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <img src="/assets/logo-white.png" alt="Logo" className="w-20 h-auto mx-3" />
            <div className="h-[1px] w-12 bg-white/60"></div>
          </div>

          <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-xl mb-6 font-semibold">
            Pet owners trust us to care for their beloved companions. Our team of specialists is dedicated to providing the highest quality pet grooming services.
          </p>

          <a href="/#book-appointment"
            onClick={() => triggerAction("Dialing Furever Support Team...")}
            className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 active:scale-95 shadow-md text-xs tracking-wide flex items-center justify-center gap-2"
          >
            {/* Perfectly sized telephone SVG icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
            <span>Contact Us</span>
          </a>

        </div>
      </div>

    </div>
  );
}