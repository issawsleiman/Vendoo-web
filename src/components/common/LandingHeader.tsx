import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useHideOnScroll } from "../../utils/useEffects";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HEADER_HEIGHT } from "../../utils/constants/layout";
import { navLinks } from "../../utils/constants/lists";

export default function LandingHeader() {
  // managing mobile drop down menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const isShowingHeader = useHideOnScroll();

  return (
    <motion.header
      style={{ height: `${HEADER_HEIGHT}px` }}
      className="fixed lg:fixed top-0 left-0 w-full shadow-md z-50 bg-white/70 backdrop-blur-lg"
      initial={{ opacity: 0, y: -20 }} // Initial mount animation
      animate={{
        opacity: 1,
        y: isShowingHeader ? 0 : -100,
      }} // Animate into view
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <img
          src="./vendoo_logo_trans.png"
          alt="Vendoo Logo"
          className="w-[80px] md:w-[160px] cursor-pointer"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }} // Subtle hover scale effect
              whileTap={{ scale: 0.98 }} // Tap feedback
              key={link}
            >
              <Link
                to={link}
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Secondary Button - Register*/}
          <Link
            to="register"
            className="px-6 py-2.5 border border-[#052a9c] text-[#052a9c] rounded-full font-semibold
          hover:bg-[#052a9c] hover:text-white hover:shadow-md
          transition-all duration-150 cursor-pointer shadow-sm"
          >
            Register
          </Link>

          {/* Primary Button - Sign In */}
          <Link
            to="signin"
            className="px-5 py-2.5 bg-[#052a9c] text-white rounded-full font-semibold
          hover:bg-[#1d88c6] hover:shadow-md transition-all duration-150 cursor-pointer"
          >
            Sign In
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[rgba(29,136,198,0.1)] transition-colors"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-[80px] left-0 w-full md:hidden transform origin-top transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ backgroundColor: "#f4f4f5" }} // Dropdown background
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
                to={link}
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

          {/* Mobile Buttons */}
          <div className="flex flex-col items-center space-y-3 pt-4 border-t border-gray-200 w-full">
            {/* Secondary - Sign Register */}
            <Link
              to="register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-32 px-6 py-2.5 border border-[#052a9c] text-[#052a9c] rounded-md font-medium hover:bg-[#052a9c] hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Register
            </Link>

            {/* Primary - Sign IN */}
            <Link
              to="signin"
              onClick={() => setMobileMenuOpen(false)}
              className="w-32 px-6 py-2.5 bg-[#052a9c] text-white rounded-md font-medium hover:bg-[#1d88c6] transition-colors duration-200 cursor-pointer"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
