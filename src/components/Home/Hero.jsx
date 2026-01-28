import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";
import bg4 from "../../assets/bg4.png";
import bg5 from "../../assets/bg5.png";

const Hero = () => {
  const slides = [bg1, bg2, bg3, bg4, bg5];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length);
    }, 4000);
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