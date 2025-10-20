import { motion } from "framer-motion";

// Whole Privacy Page
export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8">
          At <span className="font-semibold text-primary">Vendoo</span>, we
          respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your data when you use our platform.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-600 mb-6">
          We collect information you provide directly to us, such as when you
          create an account, make a purchase, or contact support. This may
          include your name, email, phone number, and payment details. We also
          collect usage data such as your device type, browser, and pages
          visited.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>To process orders and deliver your purchases</li>
          <li>To personalize your shopping experience</li>
          <li>
            To send updates, offers, and promotional materials (only if you opt
            in)
          </li>
          <li>To improve our website’s functionality and security</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          3. How We Protect Your Data
        </h2>
        <p className="text-gray-600 mb-6">
          We use secure servers, encryption, and access controls to protect your
          data from unauthorized access, alteration, or disclosure. However, no
          online system is completely secure, and we cannot guarantee absolute
          protection.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          4. Sharing of Information
        </h2>
        <p className="text-gray-600 mb-6">
          We do not sell or rent your personal information. We may share data
          with trusted third-party service providers that help us operate the
          platform (e.g., payment processors or delivery partners) — but only
          for legitimate business purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          5. Your Rights & Choices
        </h2>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Access, correct, or delete your personal data</li>
          <li>Opt out of promotional emails at any time</li>
          <li>Request details about how your data is used</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          6. Cookies & Tracking
        </h2>
        <p className="text-gray-600 mb-6">
          We use cookies and similar technologies to enhance your browsing
          experience, analyze traffic, and improve performance. You can manage
          or disable cookies through your browser settings.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          7. Changes to This Policy
        </h2>
        <p className="text-gray-600 mb-6">
          We may update this Privacy Policy occasionally. The latest version
          will always be available on this page, and any significant changes
          will be communicated to you directly or via email.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
        <p className="text-gray-600">
          For questions or requests related to your data, please contact us at{" "}
          <span className="text-primary font-medium">privacy@vendoo.com</span>.
        </p>

        <p className="text-sm text-gray-400 mt-10">
          Last updated: October 2025
        </p>
      </motion.div>
    </section>
  );
}
