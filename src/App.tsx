import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingLayout from "./components/layout/LandingLayout";
import HomeLanding from "./pages/Landing/LandingHome";
import AboutPage from "./pages/Landing/AboutPage";
import ContactUsPage from "./pages/Landing/ContactUsPage";
import RegisterPage from "./pages/auth/RegisterPage";
import SignInPage from "./pages/auth/SignInPage";

export default function App() {
  return (
    <Router>
      <LandingLayout>
        <Routes>
          <Route path="/home" element={<HomeLanding />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/pricing" element={<ContactUsPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />

          {/* signIn & register pages */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<SignInPage />} />
        </Routes>
      </LandingLayout>
    </Router>
  );
}
