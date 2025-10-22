import { Outlet } from "react-router-dom";
import { HEADER_HEIGHT } from "../../utils/constants/layout";
import LandingHeader from "../common//headers/LandingHeader";
import MainFooter from "../common/VendooFooter";
import { useTheme } from "../../context/ThemeContext";
import {
  AccentColorDark,
  AccentColorWhite,
  PrimaryColorDark,
  PrimaryColorWhite,
  SecondaryColorDark,
  SecondaryColorWhite,
} from "../../utils/constants/colors";
import { Moon } from "lucide-react";

// Here is the main landing layout of the site
export default function LandingLayout() {
  const currentTheme = useTheme();

  return (
    <>
      {/* Landing header */}
      <LandingHeader />
      {/* Main Container */}
      <section
        style={{
          marginTop: `${HEADER_HEIGHT}px`,
          backgroundColor: `${
            currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
          }`,
        }}
      >
        {/* This renders the child route page */}
        <Outlet />
      </section>

      {/* Main Footer */}
      <MainFooter />
    </>
  );
}
