import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingLayout from "./components/layout/LandingLayout";
import HomeLanding from "./pages/Landing/LandingHome";
import AboutPage from "./pages/Landing/AboutPage";
import ContactUsPage from "./pages/Landing/ContactUsPage";
import RegisterPage from "./pages/auth/RegisterPage";
import SignInPage from "./pages/auth/SignInPage";
import PricingPage from "./pages/Dashboard/PricingPage";
import ForgotPasswordPage from "./pages/Dashboard/ForgotPasswordPage";

export default function App() {
  return (
    <Router>
      <LandingLayout>
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/home" element={<HomeLanding />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* signIn & register pages */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/Pricing/get-started" element={<SignInPage />} />
        </Routes>
      </LandingLayout>
    </Router>
  );
}
