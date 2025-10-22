import { useState } from "react";
import { circIn, motion } from "framer-motion";
import VendooInput from "../../components/widgets/VendooInput";
import VendooLabel from "../../components/widgets/VendooLabel";
import VendooRoundedButton from "../../components/widgets/VendooRoundedLink";
import { LockIcon, MailIcon } from "lucide-react";
import { Link } from "react-router-dom";
import getValidRouteName from "../../utils/functions/getValidRouteName";
import { useTheme } from "../../context/ThemeContext";
import {
  AccentColorDark,
  AccentColorWhite,
  PrimaryColorDark,
  PrimaryColorWhite,
  SecondaryColorDark,
  SecondaryColorWhite,
  TextColorDark,
  TextColorWhite,
} from "../../utils/constants/colors";

export default function SignInPage() {
  // getting current theme
  const currentTheme = useTheme();
  // form data
  const [formData, setFormData] = useState({ email: "", password: "" });
  // password visibility
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  // login submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          backgroundColor: `${
            currentTheme.isDark ? PrimaryColorDark : PrimaryColorWhite
          }`,
          boxShadow: `1px 0px 10px ${
            currentTheme.isDark ? SecondaryColorDark : SecondaryColorWhite
          }`,
        }}
        className="w-full max-w-md backdrop-blur-lg p-10 rounded-2xl flex flex-col gap-8"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            color: `${
              currentTheme.isDark ? AccentColorDark : AccentColorWhite
            }`,
          }}
          className="text-3xl md:text-4xl font-extrabold  text-center"
        >
          Welcome Back
        </motion.h1>

        <p
          style={{
            color: `${currentTheme.isDark ? TextColorDark : TextColorWhite}`,
          }}
          className="text-center -mt-4 text-sm"
        >
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
        <div className="flex flex-row justify-center text-sm mt-3 gap-2 text-center items-center ">
          <Link
            replace
            to={`/${getValidRouteName({ text: "forgot password" })}`}
            style={{
              color: `${currentTheme.isDark ? TextColorDark : TextColorWhite}`,
            }}
            className="transition-colors duration-200"
          >
            Forgot password?
          </Link>
          <Link
            replace
            to="/register"
            style={{
              color: `${
                currentTheme.isDark ? AccentColorDark : AccentColorWhite
              }`,
            }}
            className="transition-colors font-extrabold duration-200"
          >
            Create account
          </Link>
        </div>
      </motion.form>
    </div>
  );
}
