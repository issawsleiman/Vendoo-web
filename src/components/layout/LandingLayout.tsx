import { HEADER_HEIGHT } from "../../utils/constants/layout";
import LandingHeader from "../common/LandingHeader";
import MainFooter from "../common/MainFooter";

export default function LandingLayout({ children }: any) {
  return (
    <>
      <LandingHeader />
      {/* Here is the landing fragmet pages will load with respect to route */}
      <main style={{ marginTop: `${HEADER_HEIGHT}px` }}>{children}</main>
      <MainFooter />
    </>
  );
}
