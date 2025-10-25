import { motion, useInView, animate } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  AccentColorDark,
  AccentColorWhite,
  MutedTextDark,
  MutedTextWhite,
  PrimaryColorDark,
  PrimaryColorWhite,
  SecondaryColorDark,
  SecondaryColorWhite,
} from "../../utils/constants/colors";
import VendooRoundedLink from "../../components/widgets/VendooRoundedLink";
import { useEffect, useRef } from "react";

// --- ICONS (New) ---
// Replaced react-icons with lucide-react
import { Star, Store, ShoppingCart, LineChart } from "lucide-react";

// --- AnimatedCounter Component (Keep As Is) ---
function AnimatedCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current as HTMLSpanElement;
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref}>0</span>;
}

// --- Data for our new sections (Keep As Is) ---
const features = [
  {
    title: "Robust Inventory Management",
    description:
      "Keep track of your stock across all channels. Never oversell again with real-time sync and low-stock alerts.",
    color: AccentColorDark,
  },
  {
    title: "Seamless Order Processing",
    description:
      "From cart to customer's doorstep, manage all your orders in one intuitive dashboard. Print labels and track shipments with ease.",
    color: AccentColorWhite,
  },
  {
    title: "Powerful Analytics",
    description:
      "Gain insights into your sales, top customers, and product performance. Make data-driven decisions to grow your business.",
    color: "#3B82F6",
  },
];

const stats = [
  { number: 100000, label: "Sellers Trusting Us" },
  { number: 1500000, label: "Products Listed" },
  { number: 500000, label: "Orders Processed Monthly" },
];

// --- (NEW) Data for new sections ---
const testimonials = [
  {
    quote:
      "Vendoo transformed my side hustle into a real business. The inventory management is a lifesaver!",
    name: "Sarah J.",
    title: "Vintage Shop Owner",
    stars: 5,
  },
  {
    quote:
      "I was hesitant to move online, but Vendoo made it incredibly simple. My sales have doubled in 3 months.",
    name: "Mark T.",
    title: "Handmade Crafts Seller",
    stars: 5,
  },
  {
    quote:
      "The analytics are my favorite part. I finally understand what my customers want and can stock accordingly.",
    name: "Elena R.",
    title: "Boutique Owner",
    stars: 5,
  },
];

const howItWorksSteps = [
  {
    icon: Store, // Changed from FaStore
    title: "Set Up Your Store",
    description:
      "Create your beautiful, custom storefront in just a few clicks.",
  },
  {
    icon: ShoppingCart, // Changed from FaShoppingCart
    title: "Add Your Products",
    description:
      "Upload product images and descriptions with our easy-to-use editor.",
  },
  {
    icon: LineChart, // Changed from FaChartLine
    title: "Start Selling",
    description: "Go live and watch the sales (and data) roll in.",
  },
];
// ---------------------------------

function HomeLandingPage() {
  const currentTheme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* --- 1. Hero Section --- */}
      <section
        style={{
          backgroundColor: `${
            currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
          }`,
        }}
        id="home"
        className="w-full  min-h-screen flex flex-col justify-center items-center text-center"
      >
        <motion.h2
          style={{
            color: `${
              currentTheme.isDark ? AccentColorDark : AccentColorWhite
            }`,
          }}
          className="text-4xl sm:text-6xl font-extrabold  mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Manage Your Business Effortlessly
        </motion.h2>

        <motion.p
          style={{
            color: `${currentTheme.isDark ? MutedTextDark : MutedTextWhite}`,
          }}
          className="text-grey-600 max-w-2xl text-lg mb-8 ml-10 mr-10  md:text-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Vendoo helps you showcase your products, grow your customer base, and
          take control of your digital store — all in one secure platform.
        </motion.p>

        <VendooRoundedLink text={"Start Selling Now"} action={() => {}} />
      </section>

      {/* --- 2. Features Section --- */}
      <section
        style={{
          backgroundColor: `${
            currentTheme.isDark ? PrimaryColorDark : PrimaryColorWhite
          }`,
        }}
        className="min-h-screen flex flex-col items-center py-24 px-6 rounded-2xl"
      >
        <motion.h3
          style={{ color: `${currentTheme.isDark ? "White" : "Black"}` }}
          className="w-full text-center text-3xl md:text-4xl font-bold text-gray-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8 }}
        >
          Everything You Need to Succeed
        </motion.h3>

        <div className="flex flex-col gap-20 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 1 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -200px 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex-1 text-center md:text-left">
                <h4
                  style={{
                    color: `${
                      currentTheme.isDark ? AccentColorDark : AccentColorWhite
                    }`,
                  }}
                  className="text-2xl font-bold mb-4"
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    color: `${
                      currentTheme.isDark ? MutedTextDark : MutedTextWhite
                    }`,
                  }}
                  className="text-lg"
                >
                  {feature.description}
                </p>
              </div>

              <div className="flex-1 w-full min-h-[300px]">
                <motion.div
                  style={{ backgroundColor: feature.color }}
                  className="w-full h-full rounded-lg shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "0px 0px -200px 0px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. Stats Section --- */}
      <section
        style={{
          backgroundColor: `${
            currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
          }`,
        }}
        className="w-full py-24 px-6"
      >
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="flex flex-col"
            >
              <span
                style={{
                  color: `${
                    currentTheme.isDark ? AccentColorDark : AccentColorWhite
                  }`,
                }}
                className="text-5xl font-extrabold"
              >
                <AnimatedCounter to={stat.number} />+
              </span>
              <p
                style={{
                  color: `${
                    currentTheme.isDark ? MutedTextDark : MutedTextWhite
                  }`,
                }}
                className="text-lg mt-2"
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 4. (NEW) Testimonials Section --- */}
      <section
        style={{
          backgroundColor: `${
            currentTheme.isDark ? PrimaryColorDark : PrimaryColorWhite
          }`,
        }}
        className="w-full py-24 px-6"
      >
        <motion.h3
          style={{ color: `${currentTheme.isDark ? "White" : "Black"}` }}
          className="w-full text-center text-3xl md:text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8 }}
        >
          What Our Sellers Say
        </motion.h3>

        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              style={{
                backgroundColor: `${
                  currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
                }`,
                borderColor: `${
                  currentTheme.isDark ? MutedTextDark : "#e5e7eb"
                }`,
              }}
              className="flex flex-col p-6 rounded-lg shadow-lg border"
            >
              <div className="flex mb-4">
                {/* Changed to lucide Star and added fill prop */}
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p
                style={{
                  color: `${
                    currentTheme.isDark ? MutedTextDark : MutedTextWhite
                  }`,
                }}
                className="text-lg italic mb-6"
              >
                "{testimonial.quote}"
              </p>
              <span
                style={{
                  color: `${currentTheme.isDark ? "White" : "Black"}`,
                }}
                className="font-bold text-lg"
              >
                {testimonial.name}
              </span>
              <span
                style={{
                  color: `${
                    currentTheme.isDark ? AccentColorDark : AccentColorWhite
                  }`,
                }}
                className="text-sm"
              >
                {testimonial.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 5. (NEW) How It Works Section --- */}
      <section
        style={{
          backgroundColor: `${
            currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
          }`,
        }}
        className="w-full py-24 px-6"
      >
        <motion.h3
          style={{
            color: `${
              currentTheme.isDark ? AccentColorDark : AccentColorWhite
            }`,
          }}
          className="w-full text-center text-3xl md:text-4xl font-bold mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8 }}
        >
          Get Started in 3 Simple Steps
        </motion.h3>

        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
        >
          {howItWorksSteps.map((step) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="flex-1 flex flex-col items-center text-center p-6"
            >
              {/* This will now render the correct lucide icon */}
              <step.icon
                style={{
                  color: `${
                    currentTheme.isDark ? AccentColorDark : AccentColorWhite
                  }`,
                }}
                className="text-6xl mb-6"
              />
              <h4
                style={{
                  color: `${currentTheme.isDark ? "White" : "Black"}`,
                }}
                className="text-2xl font-bold mb-3"
              >
                {step.title}
              </h4>
              <p
                style={{
                  color: `${
                    currentTheme.isDark ? MutedTextDark : MutedTextWhite
                  }`,
                }}
                className="text-lg"
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 6. (NEW) Final CTA Section --- */}
      <section
        style={{
          backgroundColor: `${
            currentTheme.isDark ? PrimaryColorDark : PrimaryColorWhite
          }`,
        }}
        className="w-full py-32 px-6 flex flex-col justify-center items-center text-center rounded-2xl"
      >
        <motion.h2
          style={{
            color: `${
              currentTheme.isDark ? AccentColorDark : AccentColorWhite
            }`,
          }}
          className="text-4xl sm:text-5xl font-extrabold  mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8 }}
        >
          Ready to Grow Your Business?
        </motion.h2>

        <motion.p
          style={{
            color: `${currentTheme.isDark ? MutedTextDark : MutedTextWhite}`,
          }}
          className="max-w-xl text-lg mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Join thousands of successful sellers. Get started today with a
          no-risk, 14-day free trial. No credit card required.
        </motion.p>
      </section>
    </>
  );
}

export default HomeLandingPage;
