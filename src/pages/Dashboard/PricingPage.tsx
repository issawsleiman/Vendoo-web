import PricingCard from "../../components/cards/PriceCard";
import { pricingList } from "../../utils/constants/lists";
import PageHeader from "../../components/common/SectionHeadingText";
import { useTheme } from "../../context/ThemeContext";
import {
  SecondaryColorDark,
  SecondaryColorWhite,
} from "../../utils/constants/colors";

export default function PricingPage() {
  const currentTheme = useTheme();

  return (
    <section
      style={{
        backgroundColor: `${
          currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
        }`,
      }}
      className="py-24 px-6"
    >
      <PageHeader
        title=" Simple, Transparent Pricing"
        description="Choose a plan that fits your selling needs. Start free, upgrade
          anytime."
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingList.map((pricingItem, i) => (
          <PricingCard
            key={i}
            name={pricingItem.name}
            price={pricingItem.price}
            desc={pricingItem.desc}
            features={pricingItem.features}
            highlighted={pricingItem.highlighted}
          />
        ))}
      </div>
    </section>
  );
}
