import { Fragment } from "react";
import { motion } from "framer-motion";

function FeatureHighlights({ items = [] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        grid grid-cols-2
        justify-items-center
        text-center
        md:flex
        md:items-center
        md:justify-center
        md:text-left
        gap-6 md:gap-10
        mt-8 my-20 w-full
      "
    >
      <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200 md:hidden" />

      {items.map((item, index) => (
        <Fragment key={item.label || index}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            className="flex items-center gap-4"
          >
            <img
              src={item.src}
              alt={item.alt || item.label || "feature icon"}
              className="w-[32px] h-[29px]"
            />
            <p className="text-sm">{item.label}</p>
          </motion.div>

          {index < items.length - 1 && (
            <div className="hidden md:block h-10 w-px bg-gray-200" />
          )}
        </Fragment>
      ))}
    </motion.div>
  );
}

export default FeatureHighlights;
