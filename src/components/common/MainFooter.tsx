export default function VendooFooter() {
  return (
    <footer className="bg-gray-50 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Brand */}
        <div className="text-white text-1xl md:text-2xl font-bold">
          <img
            className="w-25"
            src="./vendoo_logo_trans.png"
            alt="vendoo-logo"
          />
        </div>

        {/* Optional Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <a href="/about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>

        {/* Social Icons (optional) */}
        <div className="flex gap-4 text-gray-400">
          {/* Replace with Lucide icons if you want */}
          <a href="#" className="hover:text-white transition-colors">
            🌐
          </a>
          <a href="#" className="hover:text-white transition-colors">
            🐦
          </a>
          <a href="#" className="hover:text-white transition-colors">
            📘
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Vendoo. All rights reserved.
      </p>
    </footer>
  );
}
