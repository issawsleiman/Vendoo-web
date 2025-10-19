import { useState } from "react";
import { motion } from "framer-motion";
import VendooInput from "../../components/widgets/VendooInput";
import VendooLabel from "../../components/widgets/VendooLabel";
import VendooRoundedButton from "../../components/widgets/VendooRoundedLink";
import { LockIcon, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";
import getValidRouteName from "../../utils/functions/getValidRouteName";

export default function SignInPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-6">
      {/* Sign-in Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex flex-col gap-8"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold text-blue-700 text-center"
        >
          Welcome Back
        </motion.h1>

        <p className="text-center text-gray-500 -mt-4 text-sm">
          Sign in to continue to your account
        </p>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col"
        >
          <VendooLabel text="Email" htmlFor="email" />
          <VendooInput
            id="email"
            name="email"
            type="email"
            value={formData.email}
            hintText="example@mail.com"
            Icon={MailIcon}
            isRequired
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </motion.div>

        {/* Password Field */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col"
        >
          <VendooLabel text="Password" htmlFor="password" />
          <VendooInput
            id="password"
            name="password"
            type={passwordVisibility ? "text" : "password"}
            value={formData.password}
            hintText="••••••••"
            isPassword={true}
            isShowingPassword={passwordVisibility}
            passwordToggleAction={() => {
              console.log(passwordVisibility);
              setPasswordVisibility(!passwordVisibility);
            }}
            Icon={LockIcon}
            isRequired
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </motion.div>

        {/* Sign In Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <VendooRoundedButton
            className="w-full mx-auto"
            text="Sign In"
            action={handleSubmit}
          />
        </motion.div>

        {/* Footer Links */}
        <div className="flex justify-between text-sm text-gray-500 mt-3">
          <Link
            replace
            to={`/${getValidRouteName({ text: "forgot password" })}`}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Forgot password?
          </Link>
          <Link
            replace
            to="/register"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Create account
          </Link>
        </div>
      </motion.form>
    </div>
  );
}
