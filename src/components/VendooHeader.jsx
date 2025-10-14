import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const navLinks = ["Home", "About", "Pricing", "Contact", "About US"];

  return (
    <header className="lg:fixed top-0 left-0 w-full h-[80px] shadow-md z-50 bg-white/80">
      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Logo */}
        <img
          src="./vendoo_logo_trans.png"
          alt="Vendoo Logo"
          className="w-[80px] md:w-[160px] cursor-pointer"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              onClick={() => setCurrentPageIndex(index)}
              className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 text-center
                ${
                  currentPageIndex === index
                    ? "bg-[#1d88c6] text-white" // Active link
                    : "text-[#052a9c] hover:bg-[rgba(29,136,198,0.1)] hover:text-[#1d88c6]" // Default + hover
                }
              `}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Secondary Button - Sign In */}
          <button
            className="px-5 py-2 border border-[#052a9c] text-[#052a9c] rounded-md font-medium
              hover:bg-[#052a9c] hover:text-white transition-colors duration-200"
          >
            Sign In
          </button>

          {/* Primary Button - Sign Up */}
          <button
            className="px-5 py-2 bg-[#052a9c] text-white rounded-md font-medium
              hover:bg-[#1d88c6] transition-colors duration-200"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[rgba(29,136,198,0.1)] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-[80px] left-0 w-full md:hidden transform origin-top transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ backgroundColor: "#f4f4f5" }} // Dropdown background
      >
        <div className="flex flex-col items-center py-4 space-y-3">
          {navLinks.map((link, index) => (
            <a
              key={link}
              href="#"
              onClick={() => setCurrentPageIndex(index)}
              className={` px-6 py-2 rounded-md text-center font-medium transition-colors duration-200
                ${
                  currentPageIndex === index
                    ? "bg-[#1d88c6] text-white" // Active
                    : "text-[#052a9c] hover:bg-[rgba(29,136,198,0.1)] hover:text-[#1d88c6]"
                }
              `}
            >
              {link}
            </a>
          ))}

          {/* Mobile Buttons */}
          <div className="flex flex-col items-center space-y-3 pt-4 border-t border-gray-200 w-full">
            {/* Secondary - Sign In */}
            <button className="w-32 px-6 py-2 border border-[#052a9c] text-[#052a9c] rounded-md font-medium hover:bg-[#052a9c] hover:text-white transition-colors duration-200 cursor-pointer">
              Sign In
            </button>
            {/* Primary - Sign Up */}
            <button className="w-32 px-6 py-2 bg-[#052a9c] text-white rounded-md font-medium hover:bg-[#1d88c6] transition-colors duration-200 cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
