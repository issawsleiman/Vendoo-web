import FeaturesList from "../../components/common/pages/FeaturesListingPage";
import PageHeader from "../../components/common/SectionHeadingText";
import { useTheme } from "../../context/ThemeContext";
import {
  SecondaryColorDark,
  SecondaryColorWhite,
} from "../../utils/constants/colors";

// About Page
export default function AboutPage() {
  const currentTheme = useTheme();

  return (
    <div
      style={{
        backgroundColor: `${
          currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
        }`,
      }}
      className="w-full min-h-screen p-10 flex flex-col items-center"
    >
      <PageHeader
        title="  About Vendoo"
        description="Vendoo is a powerful, easy-to-use platform for buying and selling items
        online. Whether you're a casual seller or a professional vendor, Vendoo
        helps you manage listings, track sales, and reach customers with
        efficiency and confidence."
      />
      {/* Features Section */}
      <FeaturesList />
    </div>
  );
}
