import { motion } from "framer-motion";
import PricingCard from "../../components/cards/PriceCard";
import { pricingList } from "../../utils/constants/lists";

export default function PricingPage() {
  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose a plan that fits your selling needs. Start free, upgrade
          anytime.
        </p>
      </motion.div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingList.map((pricingItem, i) => (
          <PricingCard
            key={i}
            name={pricingItem.name}
            price={pricingItem.price}
            desc={pricingItem.desc}
            features={pricingItem.features}
            highlighted={pricingItem.highlighted}
          />
        ))}
      </div>
    </section>
  );
}
