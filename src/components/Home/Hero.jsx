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
    <section className="relative h-screen w-full overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.img
      key={index}
      src={slides[index]}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    />
  </AnimatePresence>
</section>
  );
}

 export default Hero;