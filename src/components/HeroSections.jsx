import { motion } from "framer-motion";

export default function HeroSections() {
  /* Hero Section */
  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-100 via-blue-50 to-white"
    >
      <motion.h2
        className="text-4xl sm:text-6xl font-extrabold text-blue-900 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Manage Your Business Effortlessly
      </motion.h2>

      <motion.p
        className="text-gray-600 max-w-2xl text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Vendoo helps you showcase your products, grow your customer base, and
        take control of your digital store — all in one secure platform.
      </motion.p>

      <motion.a
        href="#features"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-700 transition"
      >
        Start Selling Now
      </motion.a>

      <motion.img
        src="./vendoo_fav_icon.png"
        alt="Vendoo Logo"
        className="mt-10 w-24 h-24 opacity-90"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </section>
  );
}
