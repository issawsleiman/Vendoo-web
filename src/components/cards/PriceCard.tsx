import { motion } from "framer-motion";
import type { Pricing } from "../../models/Pricing";
import { CheckCircle } from "lucide-react";
import VendooRoundedLink from "../widgets/VendooRoundedLink";

export default function PricingCard({
  name,
  price,
  desc,
  features,
  highlighted,
}: Pricing) {
  return (
    // main pricing card div
    <motion.div
      key={name}
      whileHover={{ scale: 1.03 }}
      className={`rounded-2xl border p-8 flex flex-col shadow-sm ${
        highlighted
          ? "border-primary bg-primary/5 shadow-lg scale-105"
          : "border-gray-200 bg-white"
      }`}
    >
      {/* name */}
      <h3
        className={`text-xl font-bold mb-2 ${
          highlighted ? "text-primary" : "text-gray-900"
        }`}
      >
        {name}
      </h3>

      {/* price */}
      <p className="text-3xl font-extrabold text-gray-900 mb-4">{price}</p>
      {/* description */}
      <p className="text-gray-600 mb-6">{desc}</p>
      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-gray-700">
            <CheckCircle className="text-primary mr-2 " size={18} />
            {feature}
          </li>
        ))}
      </ul>
      <h4>{highlighted}</h4>

      {/* Get started button */}
      <VendooRoundedLink
        className={" mx-auto"}
        text={"Get Started"}
        action={() => {}}
      />
    </motion.div>
  );
}
