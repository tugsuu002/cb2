import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = ({ slides = [] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative flex items-center justify-center overflow-hidden h-screen">
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index]}
            alt={`slide-${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
}

 export default Hero;