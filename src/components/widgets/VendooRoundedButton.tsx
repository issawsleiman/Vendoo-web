import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ButtonProps {
  //** Button text */
  text: string;

  //** Button action */
  action: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function VendooRoundedButton({ text, action }: ButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-center"
    >
      <Link to="" onClick={action}>
        {text}
      </Link>
    </motion.div>
  );
}
