import { motion } from "framer-motion";

// here's the hero section goes
export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-14 min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-100 to-blue-200"
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
        className="text-grey-600 max-w-2xl text-lg mb-8 ml-10 mr-10"
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
        className="bg-primary text-white px-8 py-3 rounded-full font-semibold"
      >
        Start Selling Now
      </motion.a>
    </section>
  );
}
