import { motion } from "framer-motion";
import FeaturesList from "../../components/common/FeaturesList";

export default function FeaturesPage() {
  return (
    <section className="min-h-screen flex flex-col items-center py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Powerful Features Built for Sellers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the tools that help you manage your store, boost visibility,
          and grow sales — all in one platform.
        </p>
      </motion.div>

      <FeaturesList />
    </section>
  );
}
