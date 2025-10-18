import LandingHeader from "../common/LandingHeader";
import MainFooter from "../common/MainFooter";

export default function LandingLayout({ children }: any) {
  return (
    <>
      <LandingHeader />
      <main className="min-h-screen">{children}</main>
      <MainFooter />
    </>
  );
}
