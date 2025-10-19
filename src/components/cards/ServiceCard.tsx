import { motion } from "framer-motion";
import type { Feature } from "../../models/Feature";

type Props = {
  feature: Feature;
};

export default function ServiceCard({ feature }: Props) {
  return (
    <div className="group w-full p-8 bg-white shadow-sm hover:shadow-lg rounded-2xl border border-gray-100 transition-all duration-300">
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 mb-6 group-hover:bg-blue-100 transition-colors duration-300">
        <feature.icon
          size={32}
          color="#155dfc"
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
    </div>
  );
}
