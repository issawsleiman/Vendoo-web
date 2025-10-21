import { Menu, Moon, X } from "lucide-react";
import { motion } from "framer-motion";
import { useHideOnScroll } from "../../../utils/useEffects";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HEADER_HEIGHT } from "../../../utils/constants/layout";
import { navLinks } from "../../../utils/constants/lists";
import VendooRoundedButton from "../../widgets/VendooRoundedLink";
import VendooBorderdRoundedButton from "../../widgets/VendooRoundedBorderedLink";
import getValidRouteName from "../../../utils/functions/getValidRouteName";
import ThemeSwitch from "../../widgets/ThemeSwitch";
import { useTheme } from "../../../context/ThemeContext";
import {
  PrimaryColorDark,
  PrimaryColorWhite,
  SecondaryColorDark,
  SecondaryColorWhite,
} from "../../../utils/constants/colors";

export default function LandingHeader() {
  // managing mobile drop down menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const isShowingHeader = useHideOnScroll();

  const currentTheme = useTheme();

  return (
    // main landing header
    <motion.header
      style={{
        height: `${HEADER_HEIGHT}px`,
        backgroundColor: `${
          currentTheme.isDark ? PrimaryColorDark : PrimaryColorWhite
        }`,
      }}
      className={`fixed lg:fixed top-0 left-0 w-full shadow-md z-[100] backdrop-blur-lg`}
      initial={{ opacity: 0, y: -20 }} // Initial mount animation
      animate={{
        opacity: 1,
        y: isShowingHeader ? 0 : -100,
      }} // Animate into view
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* main header div */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <img
          src={
            currentTheme.isDark
              ? "./vendoo_logo_trans_white.png"
              : "./vendoo_logo_trans.png"
          }
          alt="Vendoo Logo"
          className="w-[80px] md:w-[160px] cursor-pointer"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              key={link}
            >
              <Link
                to={getValidRouteName({ text: link })}
                onClick={() => setCurrentPageIndex(index)}
                className={`px-4 py-2 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ease-in-out text-center
      ${
        currentPageIndex === index
          ? "bg-[#1d88c6] text-white shadow-md shadow-blue-300/40"
          : "text-gray-600 hover:bg-[rgba(29,136,198,0.1)] hover:text-[#1d88c6]"
      }
    `}
              >
                {link}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Login/Register buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <VendooBorderdRoundedButton
            text={"Register"}
            action={() => {
              setCurrentPageIndex(-1);
            }}
          />
          {/* Primary Button - Login */}
          <VendooRoundedButton
            text={"Login"}
            action={() => {
              setCurrentPageIndex(-1);
            }}
          />
        </div>

        <ThemeSwitch />

        {/* Hamburger Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[rgba(29,136,198,0.1)] transition-colors"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={26} color={currentTheme.isDark ? "White" : "Black"} />
          ) : (
            <Menu size={26} color={currentTheme.isDark ? "White" : "Black"} />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        style={{
          backgroundColor: `${
            currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
          } `,
        }}
        className={`absolute top-[80px] left-0 w-full md:hidden transform origin-top transition-transform duration-300 ease-in-out  ${
          isMobileMenuOpen ? "scale-y-100" : "scale-y-0"
        }`}
        // Dropdown background
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          {navLinks.map((link, index) => (
            <div
              key={link.toLowerCase()}
              onClick={() => {
                setCurrentPageIndex(index);
                setMobileMenuOpen(false);
              }}
              className="px-6 py-2 rounded-md text-center font-medium transition-colors duration-200"
            >
              <Link
                to={getValidRouteName({ text: link })}
                className={`px-6 py-2 rounded-md text-center font-medium transition-colors duration-200
    ${
      currentPageIndex === index
        ? "bg-[#1d88c6] text-white"
        : "text-[#052a9c] hover:bg-[rgba(29,136,198,0.1)] hover:text-[#1d88c6]"
    }
  `}
              >
                {link}
              </Link>
            </div>
          ))}

          {/* Mobile Buttons (Login/register) */}
          <div className="flex flex-col items-center space-y-3 pt-4 border-t border-gray-200 w-full">
            {/* Secondary - Sign Register */}
            <VendooBorderdRoundedButton
              action={() => {
                setCurrentPageIndex(-1);
                setMobileMenuOpen(false);
              }}
              text={"Register"}
            />

            {/* Primary - Login */}
            <VendooRoundedButton
              text={"login"}
              action={() => {
                setCurrentPageIndex(-1);
                setMobileMenuOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
