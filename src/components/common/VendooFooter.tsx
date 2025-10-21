import { Link } from "react-router-dom";
import getValidRouteName from "../../utils/functions/getValidRouteName";
import { useTheme } from "../../context/ThemeContext";
import {
  PrimaryColorDark,
  PrimaryColorWhite,
} from "../../utils/constants/colors";

// Vendoo Footer
export default function VendooFooter() {
  const currentTheme = useTheme();

  return (
    <footer
      style={{
        backgroundColor: `${
          currentTheme.isDark ? PrimaryColorDark : PrimaryColorWhite
        }`,
      }}
      className={`${
        currentTheme.isDark ? PrimaryColorDark : PrimaryColorWhite
      }text-gray-300 py-12 px-6 `}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white text-1xl md:text-2xl font-bold">
          <img
            className="w-25"
            src={
              currentTheme.isDark
                ? "./vendoo_logo_trans_white.png"
                : "./vendoo_logo_trans.png"
            }
            alt="vendoo-logo"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <Link
            to={getValidRouteName({ text: "about" })}
            className="hover:text-white transition-colors"
            replace
          >
            About
          </Link>
          <Link
            to={getValidRouteName({ text: "contact" })}
            className="hover:text-white transition-colors"
            replace
          >
            Contact
          </Link>
          <Link
            to={getValidRouteName({ text: "privacy policy" })}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to={getValidRouteName({ text: "terms of service" })}
            target="_blank"
            className="hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        <div className="flex gap-4 text-gray-400">
          <a href="#" className="hover:text-white transition-colors">
            🌐
          </a>
          <a href="#" className="hover:text-white transition-colors">
            🐦
          </a>
          <a href="#" className="hover:text-white transition-colors">
            📘
          </a>
        </div>
      </div>

      <p className="mt-8 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Vendoo. All rights reserved.
      </p>
    </footer>
  );
}
