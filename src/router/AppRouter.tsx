import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TermsOfServicePage from "../pages/Dashboard/TermsAndServicePage";
import LandingLayout from "../components/layout/LandingLayout";
import RegisterPage from "../pages/auth/RegisterPage";
import SignInPage from "../pages/auth/SignInPage";
import FeaturesPage from "../pages/Dashboard/FeaturesPage";
import ForgotPasswordPage from "../pages/Dashboard/ForgotPasswordPage";
import PricingPage from "../pages/Dashboard/PricingPage";
import PrivacyPolicyPage from "../pages/Dashboard/Privacy";
import AboutPage from "../pages/Landing/AboutPage";
import ContactUsPage from "../pages/Landing/ContactUsPage";
import HomeLanding from "../pages/Landing/HomeLandingPage";

// Whole App Routers
export default function AllAppRouter() {
  return (
    <Router>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<HomeLanding />} />
          <Route path="/home" element={<HomeLanding />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />

          {/* signIn & register pages */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/Pricing/get-started" element={<SignInPage />} />
        </Route>

        <Route path="/">
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
