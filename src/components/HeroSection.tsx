import { motion } from "framer-motion";

import VendooRoundedButton from "./widgets/VendooRoundedLink";
import FeaturesList from "./common/pages/FeaturesListingPage";
import { useTheme } from "../context/ThemeContext";
import {
  AccentColorDark,
  AccentColorWhite,
  MutedTextDark,
  MutedTextWhite,
  SecondaryColorDark,
  SecondaryColorWhite,
} from "../utils/constants/colors";

// here's the landing sections go
export default function LandingSections() {
  const currentTheme = useTheme();

  return (
    <>
      {/* main section */}
      <section
        id="home"
        className={`w-full  min-h-screen flex flex-col justify-center items-center text-center ${
          currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
        }`}
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

        <VendooRoundedButton text={"Start Selling Now"} action={() => {}} />
      </section>
      {/* features section */}
      <motion.h3
        style={{ color: `${currentTheme.isDark ? "White" : "Black"}` }}
        className="w-full text-center text-2xl md:text-3xl font-bold text-gray-900 mb-5 mt-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What We Offer
      </motion.h3>

      <FeaturesList />
    </>
  );
}
