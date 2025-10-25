import { motion } from "framer-motion";
import { testimonials } from "../../utils/constants/lists";
import { TestimonialCard } from "../cards/TestimonialCard";
import { containerVariants } from "./variants/containerVariants";

export default function TestimonialSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard
          id={testimonial.id}
          quote={testimonial.quote}
          name={testimonial.name}
          title={testimonial.title}
          stars={testimonial.stars}
        />
      ))}
    </motion.div>
  );
}
