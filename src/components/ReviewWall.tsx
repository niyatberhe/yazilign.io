import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Meron Hailu",
    role: "Small Business Owner",
    rating: 5,
    text: "Yazilign.io made finding a photographer for our brand launch effortless. The booking was seamless and the result exceeded expectations.",
  },
  {
    name: "Yonas Alemayehu",
    role: "Startup Founder",
    rating: 5,
    text: "I needed a developer on short notice and the platform delivered. Professional, fast, and the quality of talent here is outstanding.",
  },
  {
    name: "Tigist Mengistu",
    role: "Marketing Director",
    rating: 4,
    text: "Clean interface, verified professionals, and real-time availability. This is exactly what the local creative market needed.",
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < count
            ? "fill-[#D4A853] text-[#D4A853]"
            : "fill-[#222222]/10 text-[#222222]/10"
        }`}
      />
    ))}
  </div>
);

export const ReviewWall = () => {
  return (
    <section id="reviews-section" className="py-24 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B4332] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#222222]/70 max-w-xl mx-auto text-lg">
            Real feedback from people who found their perfect match.
          </p>
          <div className="w-20 h-1 bg-[#1B4332]/20 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-[#1B4332]/5 hover:shadow-lg transition-all duration-300"
            >
              <StarRating count={review.rating} />
              <p className="mt-5 text-[#222222]/70 leading-relaxed text-base">
                "{review.text}"
              </p>
              <div className="mt-6 pt-6 border-t border-[#1B4332]/5">
                <p className="font-semibold text-[#222222]">{review.name}</p>
                <p className="text-sm text-[#222222]/50">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
