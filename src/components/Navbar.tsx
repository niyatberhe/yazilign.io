import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Navbar = () => {
  useEffect(() => {
    const initAuthUI = () => {
      const authSection = document.getElementById('nav-auth-section');
      const token = localStorage.getItem('sb-access-token');

      if (token && authSection) {
        // Completely wipe the logged-out Login and Join buttons
        authSection.innerHTML = '';

        // Create the interactive profile component matching our warm minimalist style
        authSection.innerHTML = `
          <div class="relative" id="profile-dropdown-wrapper">
            <button id="profile-menu-trigger" class="w-10 h-10 rounded-full bg-[#1B4332] text-[#FDFBF7] font-bold text-sm flex items-center justify-center shadow-sm hover:shadow-md transition-all cursor-pointer focus:outline-none">
              U
            </button>
            <div id="profile-dropdown-menu" class="hidden absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#FDFBF7] border border-[#1B4332]/10 py-1 z-50">
              <a href="#settings" class="block px-4 py-2 text-sm text-[#222222] hover:bg-[#1B4332]/5 transition-colors">User Settings</a>
              <button id="nav-logout-btn" class="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors cursor-pointer">Logout</button>
            </div>
          </div>
        `;

        // Wire up toggle visibility behavior for the dropdown menu
        const trigger = document.getElementById('profile-menu-trigger');
        const menu = document.getElementById('profile-dropdown-menu');

        if (trigger && menu) {
          trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('hidden');
          });

          // Close menu when clicking anywhere else on the window
          window.addEventListener('click', () => {
            menu.classList.add('hidden');
          });
        }

        // Wire up dynamic logout pipeline execution
        const logoutBtn = document.getElementById('nav-logout-btn');
        if (logoutBtn) {
          logoutBtn.addEventListener('click', () => {
            localStorage.clear();
            window.location.reload();
          });
        }
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initAuthUI);
    } else {
      initAuthUI();
    }

    window.addEventListener('load', initAuthUI);
    return () => {
      document.removeEventListener('DOMContentLoaded', initAuthUI);
      window.removeEventListener('load', initAuthUI);
    };
  }, []);

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

          <div id="nav-auth-section" className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-sm font-medium text-[#222222] hover:bg-[#1B4332]/5">
                Login
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-[#1B4332] text-[#FDFBF7] hover:bg-[#1B4332]/90 rounded-full px-6 shadow-sm hover:shadow-md transition-all">
                Join as Provider
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
