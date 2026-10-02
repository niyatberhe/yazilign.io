import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleProviderRegister = () => {
    navigate('/auth?mode=signup&role=provider');
    setTimeout(() => {
      const authContainer = document.getElementById('auth-container');
      if (authContainer) {
        authContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <footer className="py-20 bg-white border-t border-[#1B4332]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B4332] mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-[#222222]/70 max-w-xl mb-10 text-lg">
            Join hundreds of local professionals who are already scaling their creative services with Yazilign.io.
          </p>
          <Button
            onClick={handleProviderRegister}
            className="bg-[#1B4332] text-[#FDFBF7] hover:bg-[#1B4332]/90 rounded-full px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            Register as a Provider
          </Button>
          
          <div className="mt-20 pt-10 border-t border-[#1B4332]/5 w-full flex flex-col md:flex-row justify-between items-center text-[#222222]/40 text-sm">
            <span className="font-serif font-bold text-[#1B4332]/60 text-lg mb-4 md:mb-0">Yazilign.io</span>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#1B4332] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#1B4332] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#1B4332] transition-colors">Contact Us</a>
            </div>
            <p className="mt-4 md:mt-0">© 2024 Yazilign.io. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
