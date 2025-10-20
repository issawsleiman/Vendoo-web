import { Outlet } from "react-router-dom";
import { HEADER_HEIGHT } from "../../utils/constants/layout";
import LandingHeader from "../common//headers/LandingHeader";
import MainFooter from "../common/VendooFooter";

// Here is the main landing layout of the site
export default function LandingLayout() {
  return (
    <>
      {/* Landing header */}
      <LandingHeader />
      <section style={{ marginTop: `${HEADER_HEIGHT}px` }}>
        {/* This renders the child route page */}
        <Outlet />
      </section>
      {/* Main Footer */}
      <MainFooter />
    </>
  );
}
