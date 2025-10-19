import { motion } from "framer-motion";
import FeaturesList from "../../components/common/FeaturesList";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-10 flex flex-col items-center">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 text-center"
      >
        About Vendoo
      </motion.h1>

      {/* Description Section */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-6 text-center text-gray-700 max-w-3xl text-lg md:text-xl"
      >
        Vendoo is a powerful, easy-to-use platform for buying and selling items
        online. Whether you're a casual seller or a professional vendor, Vendoo
        helps you manage listings, track sales, and reach customers with
        efficiency and confidence.
      </motion.p>

      {/* Features Section */}
      <FeaturesList />
    </div>
  );
}
