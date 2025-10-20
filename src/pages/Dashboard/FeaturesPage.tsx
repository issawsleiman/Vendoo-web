import FeaturesList from "../../components/common/pages/FeaturesListingPage";
import PageHeader from "../../components/common/SectionHeadingText";

export default function FeaturesPage() {
  return (
    <section className="min-h-screen flex flex-col items-center py-24 px-6">
      <PageHeader
        title={"Powerful Features Built for Sellers"}
        description="Discover the tools that help you manage your store, boost visibility,
        and grow sales — all in one platform."
      />

      <FeaturesList />
    </section>
  );
}
