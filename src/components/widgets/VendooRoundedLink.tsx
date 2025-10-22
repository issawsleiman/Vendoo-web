import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import getValidRouteName from "../../utils/functions/getValidRouteName";
import { useTheme } from "../../context/ThemeContext";
import { PriceColorDark, PriceColorWhite } from "../../utils/constants/colors";

interface ButtonProps {
  className?: string;
  //** Button text */
  text: string;

  //** Button action */
  action?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function VendooRoundedLink({ text, action }: ButtonProps) {
  // getting theme
  const currentTheme = useTheme();

  return (
    <motion.div
      className="w-fit mx-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        style={{
          backgroundColor: `${
            currentTheme.isDark ? PriceColorDark : PriceColorWhite
          }`,
        }}
        to={getValidRouteName({ text: text })}
        onClick={action}
        className=" w-full  text-white px-8 py-3 rounded-full font-semibold text-center cursor-pointer overflow-hidden "
      >
        {text}
      </Link>
    </motion.div>
  );
}
