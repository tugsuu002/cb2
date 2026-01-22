import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";

const Hero = () => {
  const slides = [bg1, bg2, bg3, bg4];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative max-h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full h-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={slides[index]}
            alt={`slide-${index + 1}`}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
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