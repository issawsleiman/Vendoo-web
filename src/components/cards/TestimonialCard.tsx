import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import type { Testimonial } from "../../models/Testimonial";
import {
  SecondaryColorDark,
  SecondaryColorWhite,
  MutedTextDark,
  MutedTextWhite,
} from "../../utils/constants/colors";
import { Star } from "lucide-react";

export function TestimonialCard({
  id,
  quote,
  name,
  title,
  stars,
}: Testimonial) {
  // getting current theme
  const currentTheme = useTheme();
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      key={name}
      variants={itemVariants}
      style={{
        backgroundColor: `${
          currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
        }`,
        borderColor: `${currentTheme.isDark ? MutedTextDark : "#e5e7eb"}`,
      }}
      className="flex flex-col p-6 rounded-lg shadow-lg border"
    >
      <div className="flex mb-14">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="text-yellow-400" fill="currentColor" />
        ))}
      </div>
      <h1>{name}</h1>
      <p
        style={{
          color: `${currentTheme.isDark ? MutedTextDark : MutedTextWhite}`,
        }}
        className="text-lg italic mb-6"
      >
        "{quote}"
      </p>
    </motion.div>
  );
}
