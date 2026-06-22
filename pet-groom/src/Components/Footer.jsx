import React from 'react';
import fureverLogo from '../assets/furever-logo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FAF8F5] py-12 px-4 md:px-12 font-sans antialiased">

      {/* --- START OF FULL-WIDE FOOTER CONTENT --- */}
      <div className="w-full text-slate-800 p-8 md:p-14 lg:px-16 lg:py-14">
        
        {/* Four Column Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-12 pb-10">
          
          {/* COLUMN 1: Brand & Description */}
          <div className="flex flex-col items-start space-y-4">
            
            <div className="flex items-start gap-3 select-none">
              <img src={fureverLogo} alt="Furever" className="w-50 h-auto" />

            </div>

            {/* Paragraph Text */}
            <p className="text-[13px] leading-relaxed text-slate-600 font-medium max-w-[280px]">
              At Furever, our passion for pets and dedication to top-notch service ensure your fur babies get the pampering they deserve—all in the comfort of your home.
            </p>

            {/* Social Icons (Facebook and Instagram) - Highly refined centering */}
            <div className="flex items-center gap-3 pt-1">
              {/* Facebook Circle Button */}
              <a 
                href="#facebook" 
                className="w-8 h-8 rounded-full bg-[#3b92b3] hover:bg-[#2e748f] transition-all duration-150 flex items-center justify-center text-white shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Instagram Circle Button */}
              <a 
                href="#instagram" 
                className="w-8 h-8 rounded-full bg-[#3b92b3] hover:bg-[#2e748f] transition-all duration-150 flex items-center justify-center text-white shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 stroke-current stroke-[2.5] fill-none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>

          </div>

          {/* COLUMN 2: Explore Navigation */}
          <div className="flex flex-col items-start md:pl-6 lg:pl-12">
            <h3 className="text-base font-bold text-slate-950 tracking-wide mb-5">
              Explore
            </h3>
            <ul className="flex flex-col space-y-3">
              {['Home', 'About Us', 'Services', 'Gallery', 'Blog'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-[14.5px] font-semibold text-slate-700 hover:text-[#3b92b3] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Legal Navigation */}
          <div className="flex flex-col items-start md:pl-4 lg:pl-8">
            <h3 className="text-base font-bold text-slate-950 tracking-wide mb-5">
              Legal
            </h3>
            <ul className="flex flex-col space-y-3">
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-[14.5px] font-semibold text-slate-700 hover:text-[#3b92b3] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Us Info with Perfectly Aligned Vector Icons */}
          <div className="flex flex-col items-start">
            <h3 className="text-base font-bold text-slate-950 tracking-wide mb-5">
              Contact Us
            </h3>
            
            <div className="flex flex-col space-y-5">
              
              {/* Location item - Aligned with the first line of the address */}
              <div className="flex items-start gap-3">
                <span className="text-[#3b92b3] mt-0.5 flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                <span className="text-[13px] font-semibold text-slate-700 leading-relaxed max-w-[200px]">
                  123 Grooming Lane, Mapple City, CA 12345
                </span>
              </div>

              {/* Phone item */}
              <div className="flex items-center gap-3">
                <span className="text-[#3b92b3] flex-shrink-0">
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.01-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <a href="tel:123456789" className="text-[13px] font-semibold text-slate-700 hover:text-[#3b92b3] transition-colors leading-none">
                  (123) 456-789
                </a>
              </div>

              {/* Email item */}
              <div className="flex items-center gap-3">
                <span className="text-[#3b92b3] flex-shrink-0">
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <a href="mailto:hello@furever.com" className="text-[13px] font-semibold text-slate-700 hover:text-[#3b92b3] transition-colors leading-none">
                  hello@furever.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Horizontal Line Divider */}
        <div className="w-full h-[1px] bg-slate-200 mb-6"></div>

        {/* Footer Bottom Copyright */}
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-semibold text-slate-500 tracking-wide select-none">
            ©2025 Furever Mobile Pet Grooming Services
          </span>
        </div>

      </div>
      {/* --- END OF WHITE FOOTER CONTAINER --- */}

    </footer>
  );
}