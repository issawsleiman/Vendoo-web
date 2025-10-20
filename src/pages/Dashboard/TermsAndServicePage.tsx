import { motion } from "framer-motion";

// Whole terms page
export default function TermsPage() {
  return (
    <section className="bg-white py-10 px-6 md:px-20 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <img
          src="./public/vendoo_logo_trans.png"
          alt="logo"
          className="w-30 mb-10 md:w-45"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome to <span className="font-semibold text-primary">Vendoo</span>.
          By using our website and services, you agree to comply with and be
          bound by the following terms. Please read them carefully before using
          our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-6">
          By accessing or using Vendoo, you agree to be bound by these Terms of
          Service and our Privacy Policy. If you do not agree, please
          discontinue using our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. Account Registration
        </h2>
        <p className="text-gray-600 mb-6">
          You may need to create an account to access certain features. You are
          responsible for keeping your login information secure and for all
          activities that occur under your account.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          3. Prohibited Activities
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Posting or selling illegal or counterfeit items</li>
          <li>Engaging in fraudulent or deceptive activity</li>
          <li>Interfering with the functionality or security of the website</li>
          <li>Violating any applicable laws or third-party rights</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">4. Payments & Fees</h2>
        <p className="text-gray-600 mb-6">
          Certain services on Vendoo may involve payments. By purchasing or
          subscribing, you agree to provide accurate billing information and
          authorize Vendoo to charge applicable fees.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-6">
          Vendoo is not liable for any damages arising from your use or
          inability to use the platform, including loss of data, profits, or
          business opportunities.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Termination</h2>
        <p className="text-gray-600 mb-6">
          We may suspend or terminate your account at any time if we believe you
          have violated these Terms or engaged in harmful activities.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          7. Changes to These Terms
        </h2>
        <p className="text-gray-600 mb-6">
          Vendoo may update these Terms from time to time. Continued use of our
          services after changes means you accept the new Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
        <p className="text-gray-600">
          If you have any questions about these Terms, please contact us at{" "}
          <span className="text-primary font-medium">support@vendoo.com</span>.
        </p>

        <p className="text-sm text-gray-400 mt-10">
          Last updated: October 2025
        </p>
      </motion.div>
    </section>
  );
}
