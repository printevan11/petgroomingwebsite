import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  const [selectedPet, setSelectedPet] = useState(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Gallery cards dataset mirroring image_6266da.jpg exactly
  const galleryItems = [
    {
      id: 1,
      petName: "Solar",
      breed: "Shih Tzu",
      service: "Full Groom",
      beforeImg: "/assets/before.png",
      afterImg: "/assets/after.png",
      quote: "Was satisfied with the fully groom on solar, professional services.",
      author: "Eleanor"
    },
    {
      id: 2,
      petName: "Solar",
      breed: "Shih Tzu",
      service: "Full Groom",
      beforeImg: "/assets/before.png",
      afterImg: "/assets/after.png",
      quote: "Was satisfied with the fully groom on solar, professional services.",
      author: "Eleanor"
    },
    {
      id: 3,
      petName: "Solar",
      breed: "Shih Tzu",
      service: "Full Groom",
      beforeImg: "/assets/before.png",
      afterImg: "/assets/after.png",
      quote: "Very satisfied with Furever's groomers, gentle and professional service.",
      author: "Cynthia"
    },
    {
      id: 4,
      petName: "Solar",
      breed: "Shih Tzu",
      service: "Full Groom",
      beforeImg: "/assets/before.png",
      afterImg: "/assets/after.png",
      quote: "Was satisfied with the fully groom on solar, gentle and professional service.",
      author: "Eleanor"
    }
  ];

  // Blog articles dataset
  const blogPosts = [
    {
      id: 1,
      image: "/assets/cat1.png",
      title: "4 BIG Reasons Why Pet Grooming is Important",
      excerpt: "Regular grooming is important for your pet's health and happiness. Learn how you can keep them clean and healthy with these simple DIY grooming tips...",
      link: "/post1"
    },
    {
      id: 2,
      image: "/assets/dog1.png",
      title: "How to Keep Your House Clean With Dogs",
      excerpt: "Living with a dog means dealing with shed hair, muddy paws, and occasional accidents. Here are some smart ways to maintain a pristine home...",
      link: "/post2"
    },
    {
      id: 3,
      image: "/assets/cat2.png",
      title: "Professional Cat Grooming Guide You'll Ever Need",
      excerpt: "Cats are great self-groomers, but they still need professional attention. Discover our comprehensive cat grooming tips and packages...",
      link: "/post3"
    }
  ];

  const handleBook = (petName) => {
    setSelectedPet(petName);
    setBookingConfirmed(true);
    setTimeout(() => setBookingConfirmed(false), 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] w-full font-sans antialiased overflow-x-hidden flex flex-col justify-start">
      
      {/* --- SECTION 1: HERO HEADER "Gallery" --- */}
      <div 
        className="relative h-[280px] md:h-[340px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/Dog2.png')" }}
      >
        {/* Semi-transparent dark overlay for high text contrast */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3.5xl md:text-5xl font-black tracking-tight mb-2">
            Gallery
          </h1>
          <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-slate-300">
            Home • Gallery
          </p>
        </div>
      </div>

      {/* --- SECTION 2 & 3: OUR GALLERY & CARDS WITH WATERMARKS --- */}
      <div className="relative w-full bg-[#FAF6F3] text-slate-800 py-16 px-6 overflow-hidden border-b border-slate-100">
        
        {/* Soft Background Watermarks matching image_6266da.jpg visual layout */}
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

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Intro Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-4 select-none">
              Our Gallery
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-500 font-medium max-w-xl mx-auto">
              At Furever, our professional and passionate groomers are trained to treat your fur babies and dogs, bringing quality grooming services right to the comfort of your home.
            </p>
          </div>

          {/* Success Toast for Action Simulation */}
          {bookingConfirmed && (
            <div className="w-full max-w-lg mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold px-4 py-3 rounded-lg text-center animate-fade-in shadow-sm">
              Successfully initiated Booking Appointment sequence for {selectedPet}!
            </div>
          )}

          {/* 2x2 Portrait Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/40 flex flex-col justify-between transition-all hover:shadow-md hover:scale-[1.01] duration-200"
              >
                <div>
                  {/* Two Images side-by-side (Before & After) */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Before Block */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                      <img 
                        src={item.beforeImg} 
                        alt={`${item.petName} Before Grooming`} 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-slate-900/60 backdrop-blur-sm text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Before
                      </span>
                    </div>

                    {/* After Block */}
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
                      <img 
                        src={item.afterImg} 
                        alt={`${item.petName} After Grooming`} 
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-[#ffb800] text-white text-[9px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                        After
                      </span>
                    </div>
                  </div>

                  {/* Description Info */}
                  <h3 className="text-xl font-black text-slate-800 tracking-tight leading-none mb-1">
                    {item.petName}
                  </h3>
                  <p className="text-xs text-slate-400 font-extrabold uppercase tracking-wide mb-4">
                    {item.breed} • {item.service}
                  </p>

                  {/* Customer Review Quote Panel */}
                  <div className="bg-[#f6f9fc] rounded-2xl p-4 mb-5 border border-slate-100/50">
                    <p className="text-xs text-slate-600 font-semibold italic leading-relaxed">
                      "{item.quote}"
                    </p>
                    <p className="text-[10px] text-[#3b92b3] font-black text-right uppercase tracking-wider mt-2.5">
                      — {item.author}
                    </p>
                  </div>
                </div>

                {}
                {/* Calendar Appointment Action Button */}
                <a
                  href="/?#book-appointment"
                  className="w-full bg-[#ffb800] hover:bg-[#e6a500] text-white py-3 px-4 rounded-xl text-xs font-extrabold tracking-wide flex items-center justify-center gap-1.5 transition-all duration-150 active:scale-95 shadow-md shadow-amber-500/10"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                  </svg>
                  <span>Book Appointment</span>
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- SECTION 4: COMPLETE PET GROOMING MIDDLE BANNER --- */}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/dog-cat.png')" }}
      >
        {/* Dark overlay for excellent readable white text */}
        <div className="absolute inset-0 bg-black/65 z-0"></div>

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

          <a href="/#book-appointment" className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 shadow-md text-xs tracking-wide flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
            </svg>
            <span>Book Now</span>
          </a>

        </div>
      </div>

      {/* --- SECTION 5: BLOG ARTICLES GRID --- */}
      <div className="relative w-full bg-[#FAF6F3] py-16 px-6 overflow-hidden border-b border-slate-100">
        
        {/* Soft centered circular background watermark representing the Blog header tag */}
        <div className="absolute top-[8%] left-[50%] transform -translate-x-1/2 pointer-events-none select-none z-0 opacity-[0.04]">
          <svg className="w-40 h-40 text-amber-900" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">
            Blog
          </h2>
        </div>

        {/* 3 Columns Grid for Articles */}
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.link}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/40 flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <div className="w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-sm font-black text-slate-800 leading-snug mb-3 hover:text-[#3e95b9] transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-[11.5px] leading-relaxed text-slate-500 font-semibold">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <span className="text-[11.5px] font-extrabold text-[#3e95b9] hover:text-[#2d7694] transition-colors cursor-pointer">
                  Read More &gt;
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Soft bottom yarn watermark */}
        <div className="absolute bottom-4 left-[35%] pointer-events-none select-none z-0 opacity-[0.03]">
          <svg className="w-24 h-24 text-amber-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="32" /><path d="M30 30 Q 50 60, 70 30" />
          </svg>
        </div>
      </div>

      {/* --- SECTION 6: BOTTOM CONTACT BANNER "Professional Pet Care" --- */}
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

          <a
            href="tel:123456789"
            className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 active:scale-95 shadow-md text-xs tracking-wide flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
            <span>Contact Us</span>
          </a>

        </div>
      </div>

    </div>
  );
}