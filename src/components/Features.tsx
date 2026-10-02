import { Search, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Browse Experts",
    description: "Explore a curated list of verified local creative talents ready for your project.",
    icon: Search,
  },
  {
    title: "Choose Availability",
    description: "Check real-time availability and select a slot that fits your schedule perfectly.",
    icon: Calendar,
  },
  {
    title: "Lock in your Booking",
    description: "One-click reservation to secure your professional. That's the Yazilign way!",
    icon: CheckCircle,
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B4332] mb-4">How it Works</h2>
          <div className="w-20 h-1 bg-[#1B4332]/20 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group text-center p-8 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#1B4332]/5"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1B4332]/5 text-[#1B4332] mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#222222] mb-4">{feature.title}</h3>
              <p className="text-[#222222]/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
