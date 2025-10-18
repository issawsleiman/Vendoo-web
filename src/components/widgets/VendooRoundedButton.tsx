import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ButtonProps {
  //** Button text */
  text: string;
}

export default function VendooRoundedButton({ text }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-center"
    >
      <Link to="">{text}</Link>
    </motion.div>
  );
}
