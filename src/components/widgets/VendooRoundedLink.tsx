import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import getValidRouteName from "../../utils/functions/getValidRouteName";

interface ButtonProps {
  className?: string;
  //** Button text */
  text: string;

  //** Button action */
  action?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function VendooRoundedLink({ text, action }: ButtonProps) {
  return (
    <motion.div
      className="w-fit mx-auto"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={getValidRouteName({ text: text })}
        onClick={action}
        className=" w-full bg-primary text-white px-8 py-3 rounded-full font-semibold text-center cursor-pointer overflow-hidden "
      >
        {text}
      </Link>
    </motion.div>
  );
}
