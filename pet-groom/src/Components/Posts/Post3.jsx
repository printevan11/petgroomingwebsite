import React, { useState } from 'react';

export default function App() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const triggerAction = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] w-full font-sans antialiased overflow-x-hidden flex flex-col justify-start relative text-slate-800">
      
      {/* Toast Alert Box */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3b92b3] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-xl border border-sky-300/20 animate-fade-in flex items-center gap-2">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* --- SECTION 1: HERO HEADER "The Professional Cat Grooming Guide You'll Ever Need" --- */}
      {}
      <div 
        className="relative h-[280px] md:h-[340px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/paws.png')" }}
      >
        {/* Semi-transparent overlay to match image_62e5a1.jpg */}
        <div className="absolute inset-0 bg-black/65 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-[36px] font-black tracking-tight mb-3 leading-tight">
            The Professional Cat Grooming Guide You'll Ever Need
          </h1>
          <p className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-slate-300">
            Home • The Professional Cat Grooming Guide You'll Ever Need
          </p>
        </div>
      </div>

      {/* --- SECTION 2: ARTICLE BODY & SIDEBAR --- */}
      {}
      <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Article Content (Left Column) */}
          <div className="lg:col-span-8 flex flex-col space-y-7 text-[13px] md:text-[14px] text-slate-600 leading-relaxed font-medium">
            
            <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-none mb-2">
              The Professional Cat Grooming Guide You'll Ever Need
            </h2>

            <p>
              Cats are known for grooming themselves, but that doesn't mean they don't need help. Professional cat grooming plays an essential role in maintaining your cat's health, comfort, and appearance. Whether you're a pet owner or an aspiring groomer, this guide covers everything you need to know about proper cat grooming.
            </p>

            {/* Subheading 1 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                Why Professional Cat Grooming Matters
              </h3>
              <p>
                While cats are excellent self-groomers, they can't handle everything on their own. Professional grooming helps prevent matting, reduces shedding, minimizes hairballs, and keeps the skin healthy. It also allows early detection of skin conditions, parasites, or unusual lumps that may require veterinary attention.
              </p>
            </div>

            {/* Subheading 2 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                Understanding Cat Grooming Needs
              </h3>
              <p>
                Every cat is different. Long-haired breeds like Persians and Maine Coons require more frequent grooming to prevent tangles and mats. Short-haired cats benefit from regular brushing to remove loose fur and distribute natural oils. Age, health, and lifestyle also influence how often a cat should be groomed.
              </p>
            </div>

            {/* Subheading 3 */}
            {}
            <div className="space-y-3">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                Essential Cat Grooming Tools
              </h3>
              <p>
                Professional grooming starts with the right tools:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Cat-safe brushes and combs for different coat types</li>
                <li>De-shedding tools to reduce loose fur</li>
                <li>Cat nail clippers designed for precision</li>
                <li>Pet-safe shampoos formulated for cats</li>
                <li>Soft towels and grooming gloves for comfort</li>
              </ul>
              <p className="pt-1">
                Using proper tools ensures safety and reduces stress for your cat.
              </p>
            </div>

            {/* Subheading 4 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                Bathing a Cat the Right Way
              </h3>
              <p>
                Cats generally don't need frequent baths, but professional grooming may include bathing when necessary. Use lukewarm water and cat-specific shampoo. Keep the environment calm, avoid getting water in the ears, and rinse thoroughly to prevent skin irritation. Always dry your cat completely using towels or a low-heat dryer.
              </p>
            </div>

            {/* Subheading 5 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                Brushing and De-Matting Techniques
              </h3>
              <p>
                Regular brushing is key to maintaining a healthy coat. Brush gently in the direction of hair growth, paying attention to areas prone to matting such as behind the ears, under the legs, and around the belly. Severe mats should be handled carefully or by a professional to avoid skin injury.
              </p>
            </div>

            {/* Subheading 6 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                Nail Trimming and Paw Care
              </h3>
              <p>
                Trimming your cat's nails prevents scratching injuries and damage to furniture. Clip only the sharp tip, avoiding the quick. Professional groomers are trained to handle this safely, especially for anxious or aggressive cats.
              </p>
            </div>

            {/* Subheading 7 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                Ear, Eye, and Dental Care
              </h3>
              <p>
                Professional grooming includes checking and cleaning ears to prevent infections, gently wiping eye discharge, and promoting dental hygiene. While brushing teeth may not always be part of grooming sessions, groomers can spot early signs of dental problems.
              </p>
            </div>

            {/* Subheading 8 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                Reducing Stress During Grooming
              </h3>
              <p>
                Cats can be sensitive to grooming, so minimizing stress is crucial. A calm environment, gentle handling, short grooming sessions, and positive reinforcement help create a better experience. Professional groomers are trained to recognize signs of stress and adjust their approach accordingly.
              </p>
            </div>

            {/* Subheading 9 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                When to Choose a Professional Groomer
              </h3>
              <p>
                If your cat has severe matting, behavioral challenges, health issues, or requires breed-specific grooming, professional services are highly recommended. A trained groomer ensures your cat's safety and comfort throughout the process.
              </p>
            </div>

            {/* Conclusion */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 tracking-wide">
                Conclusion
              </h3>
              <p>
                Professional cat grooming is more than just maintaining a neat appearance—it's about ensuring your cat's health, comfort, and overall well-being. With the right knowledge, tools, and techniques, grooming becomes a safe and beneficial experience for both cats and caregivers.
              </p>
            </div>

          </div>

          {/* Sidebar Area (Right Column) */}
          {}
          <div className="lg:col-span-4 lg:pl-4 w-full">
            <div className="bg-[#f4f7fc]/75 rounded-3xl p-6 border border-slate-200/40 shadow-sm flex flex-col space-y-5">
              
              <h3 className="text-[15px] md:text-base font-black text-slate-800 tracking-tight leading-none mb-1">
                Recent Posts
              </h3>

              <div className="flex flex-col space-y-4">
                
                {/* Recent Post Item 1 */}
                <div className="flex items-start gap-2.5 pb-4 border-b border-slate-200/50 group cursor-pointer" onClick={() => triggerAction("Navigating to 'Importance of Pet Grooming'...")}>
                  <span className="text-slate-400 mt-1 select-none text-xs">&gt;</span>
                  <p className="text-xs md:text-[13px] font-bold text-slate-700 group-hover:text-[#3e95b9] transition-colors leading-relaxed">
                    Importance of pet grooming
                  </p>
                </div>

                {/* Recent Post Item 2 */}
                <div className="flex items-start gap-2.5 group cursor-pointer" onClick={() => triggerAction("Navigating to 'House Clean With Dogs'...")}>
                  <span className="text-slate-400 mt-1 select-none text-xs">&gt;</span>
                  <p className="text-xs md:text-[13px] font-bold text-slate-700 group-hover:text-[#3e95b9] transition-colors leading-relaxed">
                    How to Keep Your House Clean With Dogs
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 3: BOTTOM CTA BANNER "Professional Pet Care" --- */}
      {}
      <div 
        className="relative py-16 px-6 w-full flex items-center justify-center bg-cover bg-center bg-no-repeat border-t border-slate-200"
        style={{ backgroundImage: "url('src/assets/dog-cat1.png')" }}
      >
        {/* Dark overlay for rich typography contrast */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        <div className="relative z-10 w-full max-w-3xl mx-auto text-center text-white flex flex-col items-center">
          
          <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-3">
            Professional Pet Care
          </h2>

          <div className="flex items-center justify-center w-full max-w-xs mb-4 opacity-90">
            <div className="h-[1px] w-12 bg-white/60"></div>
            <img src="src/assets/logo-white.png" alt="Logo" className="w-20 h-auto mx-3" />
            <div className="h-[1px] w-12 bg-white/60"></div>
          </div>

          <p className="text-xs sm:text-sm text-white/95 leading-relaxed max-w-xl mb-6 font-semibold">
            Pet owners trust us to care for their beloved companions. Our team of specialists is dedicated to providing the highest quality pet grooming services.
          </p>

          <button
            onClick={() => triggerAction("Opening Contact Channels...")}
            className="bg-[#ffb800] hover:bg-[#e6a500] text-white font-extrabold px-6 py-2.5 rounded-lg transition-all duration-150 active:scale-95 shadow-md text-xs tracking-wide flex items-center justify-center gap-2"
          >
            {/* Perfectly sized telephone SVG icon */}
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
            </svg>
            <span>Contact Us</span>
          </button>

        </div>
      </div>

    </div>
  );
}