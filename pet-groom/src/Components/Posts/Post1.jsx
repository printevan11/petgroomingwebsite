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

      {/* --- SECTION 1: HERO HEADER "4 BIG Reasons Why Pet Grooming is Important" --- */}
      <div 
        className="relative h-[280px] md:h-[340px] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('src/assets/dog-cat2.png')" }}
      >
        {/* Semi-transparent overlay to match image_62840c.jpg */}
        <div className="absolute inset-0 bg-black/65 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-2.5xl sm:text-3.5xl md:text-[38px] font-black tracking-tight mb-3 leading-tight">
            4 BIG Reasons Why Pet Grooming is Important
          </h1>
          <p className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-slate-300">
            Home • 4 BIG Reasons Why Pet Grooming is Important
          </p>
        </div>
      </div>

      {/* --- SECTION 2: ARTICLE BODY & SIDEBAR --- */}
      <div className="w-full max-w-6xl mx-auto px-6 py-16 md:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Main Article Content (Left Column) */}
          <div className="lg:col-span-8 flex flex-col space-y-7 text-[13px] md:text-[14px] text-slate-600 leading-relaxed font-medium">
            
            <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight leading-none mb-2">
              Importance of Pet Grooming
            </h2>

            <p>
              Pet grooming is often seen as a luxury or something done only to keep pets looking cute and presentable. However, grooming is far more than just a cosmetic routine—it plays a vital role in your pet's overall health, comfort, and well-being. Whether you own a dog, cat, or other furry companion, regular grooming should be an essential part of responsible pet care.
            </p>

            {/* Subheading 1 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 uppercase tracking-wide">
                Promotes Better Health and Hygiene
              </h3>
              <p>
                Regular grooming helps keep your pet clean and reduces the risk of skin infections, parasites, and other health issues. Brushing removes dirt, dead hair, and dandruff while preventing matting that can cause skin irritation or pain. Bathing, when done properly, helps eliminate bacteria and unpleasant odors, keeping your pet fresh and healthy.
              </p>
            </div>

            {/* Subheading 2 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 uppercase tracking-wide">
                Early Detection of Health Problems
              </h3>
              <p>
                One of the biggest benefits of grooming is the opportunity to notice health concerns early. While brushing or bathing your pet, you may discover lumps, wounds, rashes, ticks, fleas, or signs of infection. Early detection allows pet owners to seek veterinary care promptly, potentially preventing more serious health complications.
              </p>
            </div>

            {/* Subheading 3 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 uppercase tracking-wide">
                Supports Emotional Comfort and Behavior
              </h3>
              <p>
                Grooming isn't just good for your pet's body—it also supports their emotional well-being. Regular grooming sessions can be calming and help reduce stress and anxiety, especially when pets are accustomed to gentle handling. Groomed pets often feel more comfortable, which can positively affect their behavior and mood.
              </p>
            </div>

            {/* Subheading 4 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 uppercase tracking-wide">
                Maintains a Healthy Coat and Skin
              </h3>
              <p>
                Different breeds have different grooming needs, but all pets benefit from proper coat care. Brushing stimulates natural oil production, keeping the skin moisturized and the coat shiny. For long-haired pets, grooming prevents painful tangles and mats that can restrict movement or hide infections.
              </p>
            </div>

            {/* Subheading 5 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 uppercase tracking-wide">
                Enhances Bonding Between Pet and Owner
              </h3>
              <p>
                Grooming time is a great opportunity to strengthen the bond between you and your pet. It builds trust, reinforces positive interaction, and allows you to show care and affection. Pets that are groomed regularly often become more cooperative and comfortable with handling.
              </p>
            </div>

            {/* Subheading 6 */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 uppercase tracking-wide">
                Improves Overall Quality of Life
              </h3>
              <p>
                A well-groomed pet is a happier pet. Clean ears, trimmed nails, brushed teeth, and a healthy coat all contribute to better mobility, comfort, and confidence. Grooming also helps pets stay cool in hot weather and prevents issues caused by overgrown fur or nails.
              </p>
            </div>

            {/* Conclusion */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-extrabold text-slate-800 uppercase tracking-wide">
                Conclusion
              </h3>
              <p>
                Pet grooming is an essential aspect of pet care that goes beyond appearance. It supports physical health, emotional comfort, and strengthens the bond between pets and their owners. By making grooming a regular habit, you ensure that your beloved companion stays healthy, happy, and comfortable throughout their life.
              </p>
            </div>

          </div>

          {/* Sidebar Area (Right Column) */}
          <div className="lg:col-span-4 lg:pl-4 w-full">
            <div className="bg-[#f4f7fc]/75 rounded-3xl p-6 border border-slate-200/40 shadow-sm flex flex-col space-y-5">
              
              <h3 className="text-[15px] md:text-base font-black text-slate-800 tracking-tight leading-none mb-1">
                Recent Posts
              </h3>

              <div className="flex flex-col space-y-4">
                
                {/* Recent Post Item 1 */}
                <div className="flex items-start gap-2.5 pb-4 border-b border-slate-200/50 group cursor-pointer" onClick={() => triggerAction("Navigating to 'House Clean With Dogs'...")}>
                  <span className="text-slate-400 mt-1 select-none text-xs">&gt;</span>
                  <p className="text-xs md:text-[13px] font-bold text-slate-700 group-hover:text-[#3e95b9] transition-colors leading-relaxed">
                    How to Keep Your House Clean With Dogs
                  </p>
                </div>

                {/* Recent Post Item 2 */}
                <div className="flex items-start gap-2.5 group cursor-pointer" onClick={() => triggerAction("Navigating to 'Professional Cat Grooming Guide'...")}>
                  <span className="text-slate-400 mt-1 select-none text-xs">&gt;</span>
                  <p className="text-xs md:text-[13px] font-bold text-slate-700 group-hover:text-[#3e95b9] transition-colors leading-relaxed">
                    Professional Cat Grooming Guide You'll Ever Need
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* --- SECTION 3: BOTTOM CTA BANNER "Professional Pet Care" --- */}
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