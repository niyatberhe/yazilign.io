import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export const ExploreNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const handleClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#1B4332]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="text-2xl font-serif font-bold text-[#1B4332]">Yazilign.io</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <a href="#explore-section" className="text-sm font-medium text-[#222222] hover:text-[#1B4332] transition-colors">Explore</a>
            <a href="#" className="text-sm font-medium text-[#222222] hover:text-[#1B4332] transition-colors">How it Works</a>
            <a href="#reviews-section" className="text-sm font-medium text-[#222222] hover:text-[#1B4332] transition-colors">Reviews</a>
          </div>

          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={handleClick}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1B4332] text-[#FDFBF7] font-bold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none"
              style={{ borderRadius: "50%", backgroundColor: "#1B4332", color: "#FDFBF7" }}
            >
              U
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#FDFBF7] border border-[#1B4332]/10 py-1 z-50"
                >
                  <a
                    href="#settings"
                    className="block px-4 py-2 text-sm text-[#222222] hover:bg-[#1B4332]/5 transition-colors"
                  >
                    User Settings
                  </a>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
