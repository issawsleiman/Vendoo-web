import { motion } from "framer-motion";
import type { Service } from "../../models/Service";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <motion.div
      className="group w-full p-8 bg-white shadow-sm hover:shadow-lg rounded-2xl border border-gray-100 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-50 mb-6 group-hover:bg-blue-100 transition-colors duration-300">
        <service.icon
          size={32}
          color="#155dfc"
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">{service.desc}</p>
    </motion.div>
  );
}
