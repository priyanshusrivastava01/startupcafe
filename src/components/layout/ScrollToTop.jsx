import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating WhatsApp Button with Red Badge */}
      <a
        href="https://wa.me/919670111167?text=Hello%20Startup%20Cafe!%20I'm%20reaching%20out%20from%20your%20website%20to%20make%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center relative group"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 stroke-[2.2]" />
        
        {/* Red Notification Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF3B30] text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
          1
        </span>
      </a>

      {/* Scroll to Top Bare Arrow Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-[108px] right-[46px] z-[100] text-[#0a7c5b] hover:text-[#065c43] hover:-translate-y-1 active:scale-95 transition-all duration-300 flex items-center justify-center p-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-7 h-7 stroke-[2.8]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
