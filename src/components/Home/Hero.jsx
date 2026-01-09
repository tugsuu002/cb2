import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button";

const Hero = () => {
  const [isRotating, setIsRotating] = useState(false);

  return (
    <section className="relative max-h-screen flex items-center justify-center overflow-hidden ">

          <img
            src="https://picsum.photos/2560/1440"
            alt="slide2"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    
    </section>
  );
}

 export default Hero;