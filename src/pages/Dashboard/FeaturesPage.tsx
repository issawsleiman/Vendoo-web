import FeaturesList from "../../components/common/pages/FeaturesListingPage";
import PageHeader from "../../components/common/SectionHeadingText";
import { useTheme } from "../../context/ThemeContext";
import {
  SecondaryColorDark,
  SecondaryColorWhite,
} from "../../utils/constants/colors";

export default function FeaturesPage() {
  const currentTheme = useTheme();
  return (
    <section
      className={`min-h-screen flex flex-col items-center py-24 px-6 bg-${
        currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
      }
      }`}
    >
      <PageHeader
        title={"Powerful Features Built for Sellers"}
        description="Discover the tools that help you manage your store, boost visibility,
        and grow sales — all in one platform."
      />

      <FeaturesList />
    </section>
  );
}
