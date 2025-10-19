import PricingCard from "../../components/cards/PriceCard";
import { pricingList } from "../../utils/constants/lists";
import PageHeader from "../../components/common/PageHeader";

export default function PricingPage() {
  return (
    <section className="bg-white py-24 px-6">
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
