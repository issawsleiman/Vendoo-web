import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mb-10 md:mb-0"
    >
      <Link
        to={text.toLowerCase().trim()}
        onClick={action}
        className=" text-primary border-1 px-6 md:px-8 py-3 rounded-full font-semibold text-center cursor-pointer"
      >
        {text}
      </Link>
    </motion.div>
  );
}
