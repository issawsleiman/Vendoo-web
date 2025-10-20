import { motion } from "framer-motion";


interface headerProps {
  title: string;
  description: string;
}

// This is the title & description section heading for each page
export default function SectionHeadingText({ title, description }: headerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
    </motion.div>
  );
}
