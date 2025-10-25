import { animate, motion, useInView } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import {
  AccentColorDark,
  AccentColorWhite,
  MutedTextDark,
  MutedTextWhite,
  SecondaryColorDark,
  SecondaryColorWhite,
} from "../../utils/constants/colors";
import VendooRoundedLink from "../../components/widgets/VendooRoundedLink";
import { useEffect, useRef } from "react";
import TestimonialSection from "../../components/common/TestimonialSection";
import { containerVariants } from "../../components/common/variants/containerVariants";

function AnimatedCounter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current as HTMLSpanElement;
      const controls = animate(0, to, {
        duration: 4,
        ease: "easeInOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref}>0</span>;
}

function HomeLandingPage() {
  // getting the current theme
  const currentTheme = useTheme();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    { number: 100000, label: "Sellers Trusting Us" },
    { number: 1500000, label: "Products Listed" },
    { number: 500000, label: "Orders Processed Monthly" },
  ];

  // Main Landing Section
  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col-reverse items-center justify-between  px-6 md:flex-row md:px-12 lg:px-24">
        {/* Text Content Block */}
        <div
          style={{
            backgroundColor: `${
              currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
            }`,
          }}
          id="home"
          className="flex w-full flex-col items-center justify-center text-center md:w-3/5 md:items-start md:text-left"
        >
          <motion.h1
            style={{
              color: `${
                currentTheme.isDark ? AccentColorDark : AccentColorWhite
              }`,
            }}
            className="text-4xl font-extrabold sm:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Manage Your Business Effortlessly
          </motion.h1>

          <motion.p
            style={{
              color: `${currentTheme.isDark ? MutedTextDark : MutedTextWhite}`,
            }}
            className="max-w-2xl text-lg text-grey-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Vendoo helps you showcase your products, grow your customer base,
            and take control of your digital store — all in one secure platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <VendooRoundedLink text={"Start Selling Now"} action={() => {}} />
          </motion.div>
        </div>

        {/* Image Block */}
        <div className="flex w-full items-center justify-center pt-10 md:w-2/5 md:pt-0">
          <motion.img
            src="/landing/landing-home-1.svg"
            alt="Vendoo platform dashboard"
            className="w-full h-auto max-w-lg p-5"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          />
        </div>
      </section>
      {/* Features Section
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
          {featuresList.map((feature, index) => (
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
                  {feature.desc}
                </p>
              </div>

              <div className="flex-1 w-full min-h-[300px]">
                <motion.div
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
      </section> */}
      {/* Stats Section */}
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
                <AnimatedCounter to={stat.number} />
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
      {/* Testimonials Section */}
      <TestimonialSection />
    </>
  );
}

export default HomeLandingPage;
