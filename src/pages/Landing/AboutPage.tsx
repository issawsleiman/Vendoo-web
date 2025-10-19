import FeaturesList from "../../components/common/FeaturesList";
import PageHeader from "../../components/common/PageHeader";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 p-10 flex flex-col items-center">
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
