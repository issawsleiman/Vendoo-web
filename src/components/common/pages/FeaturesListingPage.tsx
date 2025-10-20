import ServiceCard from "../../cards/FeatureCard";
import { featuresList } from "../../../utils/constants/lists";

// App features list
export default function FeaturesListingPage() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10 mb-10">
      {featuresList.map((item, i) => (
        <ServiceCard key={i} feature={item} />
      ))}
    </div>
  );
}
