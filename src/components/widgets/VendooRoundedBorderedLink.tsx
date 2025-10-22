import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import {
  PriceColorDark,
  PriceColorWhite,
  TextColorDark,
  TextColorWhite,
} from "../../utils/constants/colors";

interface ButtonProps {
  // Button text
  text: string;
  // Button action
  action: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function VendooBorderdRoundedLink({
  action,
  text,
}: ButtonProps) {
  // getting current theme
  const currentTheme = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mb-10 md:mb-0"
    >
      <Link
        to={text.toLowerCase().trim()}
        onClick={action}
        style={{
          color: `${currentTheme.isDark ? TextColorDark : TextColorWhite}`,
          borderColor: `${
            currentTheme.isDark ? PriceColorDark : PriceColorWhite
          }`,
        }}
        className=" border-1 px-6 md:px-8 py-3 rounded-full font-semibold text-center cursor-pointer"
      >
        {text}
      </Link>
    </motion.div>
  );
}
