import VendooRoundedLink from "../../components/widgets/VendooRoundedLink";
import PageHeader from "../../components/common/SectionHeadingText";

export default function ContactPage() {
  return (
    <section className="py-24 px-6 from-blue-100 to-blue-200">
      <PageHeader
        title="Get in Touch"
        description="  Have a question or need help? Our team is here to assist you with
          anything related to your Vendoo experience."
      />

      <div className="max-w-3xl mx-auto from-blue-100 to-blue-200 p-8 rounded-2xl shadow-md">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <VendooRoundedLink
            className="flex flex-row justify-center"
            text="Send Message"
          />
        </form>

        <div className="mt-10 text-center text-gray-600">
          <p>
            Email us directly at{" "}
            <a
              href="mailto:support@vendoo.com"
              className="text-primary font-medium"
            >
              support@vendoo.com
            </a>
          </p>
          <p className="mt-2">
            Or call us at <span className="font-medium">+961 71330986</span>
          </p>
        </div>
      </div>
    </section>
  );
}
