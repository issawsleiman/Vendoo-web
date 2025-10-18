import { HEADER_HEIGHT } from "../../utils/constants/layout";
import LandingHeader from "../common/LandingHeader";
import MainFooter from "../common/MainFooter";

export default function LandingLayout({ children }: any) {
  return (
    <>
      <LandingHeader />
      <main
        style={{ marginTop: `${HEADER_HEIGHT}px` }}
        className="min-h-screen"
      >
        {children}
      </main>
      <MainFooter />
    </>
  );
}
