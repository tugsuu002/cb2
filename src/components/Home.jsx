import { motion } from "framer-motion";
import Hero from "./Home/Hero";
import Stastic from "./Home/Stastic";
import bg1 from "../assets/bannerDesktop/facebook.jpg";
import bg2 from "../assets/bannerDesktop/insta1.jpg";
import bg3 from "../assets/bannerDesktop/insta2.jpg";
import bg4 from "../assets/bannerDesktop/yout.jpg";

import Customers from "./Home/Customers";
import FeaturedSkills from "./Home/FeaturedSkills";
import AIHelp from "./Home/AIHelp.jsx";

export default function Home() {

  const sections = [
    { key: "hero", Element: () => <Hero slides={[bg1, bg2, bg3, bg4]} /> },
    { key: "customers", Element: Customers },
    { key: "featured-skills", Element: FeaturedSkills },
    { key: "ai-help", Element: AIHelp },
  ];

  return (
    <>
      {sections.map(({ key, Element }, index) => (
        <motion.section
          key={key}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
        >
          <Element />
        </motion.section>
      ))}
    </>
  );
}
