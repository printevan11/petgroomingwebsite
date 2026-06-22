import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] w-full font-sans antialiased overflow-x-hidden flex flex-col justify-start">
      
      {/* --- SECTION 1: HERO HEADER "Services" --- */}
      <div 
        className="relative h-[280px] md:h-[340px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/calm-dog.png')" }}
      >
        {/* Semi-transparent dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3.5xl md:text-5xl font-black tracking-tight mb-2">
            Services
          </h1>
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-300">
            Home • Services
          </p>
        </div>
      </div>

      {/* --- SECTION 2: FUREVER MOBILE PET GROOMING --- */}
      <div className="relative w-full bg-[#FAF6F3] text-slate-800 py-16 px-6 overflow-hidden border-b border-slate-100">
        
        {/* Soft Background Watermarks (matching image_5870d9.jpg) */}
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

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14">
          
          {/* Left Text Column */}
          <div className="w-full md:w-[54%] flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight mb-5">
              Furever Mobile Pet Grooming
            </h2>

            <p className="text-[13.5px] md:text-[14px] leading-relaxed text-slate-600 font-medium mb-4">
              At Furever, we believe pet care is both a skill and a passion. We uphold high standards in every grooming service we provide, which is why our groomers are continuously trained in safe handling and modern pet grooming techniques. From bathing and grooming to nail care, we bring complete, professional services right to your doorstep—so your pets can enjoy a calm, stress-free experience in the comfort of your home.
            </p>

            <p className="text-[13.5px] md:text-[14px] leading-relaxed text-slate-600 font-medium mb-6">
              Furever proudly offers reliable home-service pet grooming across Bacolod and nearby areas. Try us on your pet's next grooming day and experience the difference of dedicated care, quality service, and genuine love for your furry companions.
            </p>

            <div>
              <button 
                type="button"
                className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg shadow-md transition-all text-xs tracking-wide flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
                </svg>
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Image Column (Cat on glass grooming box) */}
          <div className="w-full md:w-[46%] flex justify-center">
            <div className="relative max-w-[440px] md:max-w-full rounded-2xl overflow-hidden shadow-lg border-[8px] border-white bg-slate-100 aspect-[4/3] w-full">
              <img 
                src="src/assets/cut-hair.png" 
                alt="Cat Grooming Station Care" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 3: COMPLETE PET GROOMING BANNER --- */}
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
            At Furever, we provide high-quality, consistent, and value-for-money pet-friendly care and grooming services that keep your pets happy, comfortable, and excited to return.
          </p>

          <button 
            type="button"
            className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 active:scale-95 shadow-md text-xs tracking-wide flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
            </svg>
            Book Now
          </button>

        </div>
      </div>

      {/* --- SECTION 4: OUR GROOMING SERVICES --- */}
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
              <a href="#book" className="text-xs text-[#3e95b9] font-bold hover:underline inline-flex items-center gap-1 mb-3">
                Book Now ➔
              </a>
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

            <button className="w-full bg-[#FAF8F5] border border-slate-200/60 text-slate-700 hover:bg-[#e9eff4] py-2.5 px-4 rounded-xl text-xs font-bold transition-colors">
              Book Now
            </button>
          </div>

          {/* Card 2: Full Groom (BEST SELLER) */}
          <div className="relative bg-white rounded-3xl p-6 border-2 border-[#6FAED9] shadow-md flex flex-col justify-between transition-all hover:shadow-lg">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffb800] text-white text-[9px] font-black tracking-widest px-4 py-1 rounded-full uppercase">
              Most Popular
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-extrabold text-slate-800 tracking-wide">Full Groom</h3>
                <span className="bg-[#ffb800]/10 text-[#ffb800] text-[10px] font-bold px-2 py-0.5 rounded-full">Best Seller</span>
              </div>
              <a href="#book" className="text-xs text-[#3e95b9] font-bold hover:underline inline-flex items-center gap-1 mb-3">
                Book Now ➔
              </a>
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

            <button className="w-full bg-[#3e95b9] hover:bg-[#327da0] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors shadow-sm">
              Book Now
            </button>
          </div>

          {/* Card 3: Royal Treatment */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/50 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-base font-extrabold text-slate-800 tracking-wide">Royal Treatment</h3>
                <span className="bg-slate-100 text-slate-600 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">Premium</span>
              </div>
              <a href="#book" className="text-xs text-[#3e95b9] font-bold hover:underline inline-flex items-center gap-1 mb-3">
                Book Now ➔
              </a>
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

            <button className="w-full bg-[#FAF8F5] border border-slate-200/60 text-slate-700 hover:bg-[#e9eff4] py-2.5 px-4 rounded-xl text-xs font-bold transition-colors">
              Book Now
            </button>
          </div>

        </div>
      </div>

      {/* --- SECTION 5: GALLERY SHOWCASE --- */}
      <div className="w-full bg-white py-14 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Portrait 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm mb-3 border border-slate-100 bg-slate-100">
              <img 
                src="src/assets/cut1.png" 
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
                src="src/assets/cut2.png" 
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
                src="src/assets/cut3.png" 
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
                src="src/assets/cut4.png" 
                alt="After Grooming Portrait 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">After Grooming</span>
          </div>

        </div>
      </div>

      {/* --- SECTION 6: BOTTOM CONTACT BANNER --- */}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat border-t border-slate-200"
        style={{ backgroundImage: "url('src/assets/dog-cat1.png')" }}
      >
        {/* Dark overlay for text readability */}
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
            Pet owners trust us to care for their beloved companions. Our team of specialists is dedicated to providing the highest quality pet grooming services.
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