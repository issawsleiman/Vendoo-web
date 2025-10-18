import ServiceCard from "../cards/ServiceCard";
import { featuresList } from "../../utils/constants/lists";

export default function FeaturesList() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mt-10 mb-10">
      {featuresList.map((item, i) => (
        <ServiceCard key={i} service={item} />
      ))}
    </div>
  );
}
