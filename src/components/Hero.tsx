import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-[#1B4332] mb-6 leading-tight"
          >
            Discover and Book Verified<br className="hidden md:block" /> Local Creative Talent.
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-[#222222]/80 max-w-2xl mx-auto mb-10"
          >
            Yazilign.io instantly reserves slots with top professionals, 
            ensuring your project is handled by the best local experts.
          </motion.p>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative flex items-center p-2 bg-white rounded-full shadow-lg border border-[#1B4332]/10">
              <div className="pl-4 flex items-center flex-1">
                <Search className="w-5 h-5 text-[#222222]/40" />
                <Input 
                  type="text" 
                  placeholder="What service are you looking for?" 
                  className="border-none focus-visible:ring-0 text-[#222222] placeholder:text-[#222222]/40 text-base"
                />
              </div>
              <Button className="bg-[#1B4332] text-[#FDFBF7] hover:bg-[#1B4332]/90 rounded-full px-8 py-6 text-base font-medium transition-all ml-2">
                Search Services
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 relative rounded-3xl overflow-hidden aspect-[16/7] shadow-2xl"
        >
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/da7a38ac-1ecb-4d8d-8ceb-03e12eabf3d9/hero-workspace-14d83396-1783331674595.webp" 
            alt="Modern Workspace" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};
