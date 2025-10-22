import { motion } from "framer-motion";
import type { Pricing } from "../../models/Pricing";
import { CheckCircle } from "lucide-react";
import VendooRoundedLink from "../widgets/VendooRoundedLink";
import { useTheme } from "../../context/ThemeContext";
import {
  AccentColorDark,
  AccentColorWhite,
  BorderColorDark,
  BorderColorWhite,
  PrimaryColorDark,
  PrimaryColorWhite,
  SecondaryColorDark,
  SecondaryColorWhite,
  TextColorDark,
  TextColorWhite,
} from "../../utils/constants/colors";

export default function PricingCard({
  name,
  price,
  desc,
  features,
  highlighted,
}: Pricing) {
  const currentTheme = useTheme();

  return (
    // main pricing card div
    <motion.div
      style={{
        backgroundColor: `${
          currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
        }`,
        borderColor: `${
          highlighted
            ? AccentColorDark
            : currentTheme.isDark
            ? BorderColorDark
            : BorderColorWhite
        }`,
      }}
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
        style={{
          color: currentTheme.isDark ? TextColorDark : TextColorWhite,
        }}
        className={`text-xl font-bold mb-2 ${
          highlighted
            ? PrimaryColorDark
            : currentTheme.isDark
            ? TextColorDark
            : TextColorWhite
        }`}
      >
        {name}
      </h3>

      {/* price */}
      <p
        style={{
          color: `${currentTheme.isDark ? AccentColorDark : AccentColorWhite}`,
        }}
        className="text-3xl font-extrabold  mb-4"
      >
        {price}
      </p>
      {/* description */}
      <p
        style={{
          color: `${
            currentTheme.isDark ? PrimaryColorWhite : PrimaryColorDark
          }`,
        }}
        className=" mb-6"
      >
        {desc}
      </p>
      <ul className="flex-1 space-y-3 mb-8">
        {features.map((feature, i) => (
          <li
            key={i}
            style={{
              color: `${currentTheme.isDark ? TextColorDark : TextColorWhite}`,
            }}
            className="flex items-center "
          >
            <CheckCircle
              style={{
                color: `${
                  currentTheme.isDark ? AccentColorDark : AccentColorWhite
                }`,
              }}
              className="mr-2"
              size={18}
            />
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
