import { motion } from "framer-motion";
import VendooLabel from "../../components/widgets/VendooLabel";
import VendooInput from "../../components/widgets/VendooInput";
import { useState } from "react";
import VendooRoundedButton from "../../components/widgets/VendooRoundedLink";
import { Link } from "react-router-dom";
import { LockIcon, MailIcon, User2Icon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import {
  AccentColorDark,
  AccentColorWhite,
  PriceColorWhite,
  PrimaryColorDark,
  PrimaryColorWhite,
  SecondaryColorDark,
  SecondaryColorWhite,
  TextColorDark,
  TextColorWhite,
} from "../../utils/constants/colors";
import getValidRouteName from "../../utils/functions/getValidRouteName";

export default function RegisterPage() {
  const currentTheme = useTheme();
  // form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // password visibility
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  // confirm password visibility
  const [confirmPasswordVisibility, setConfirmPasswordVisibility] =
    useState(false);

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 ">
      {/* Register Form */}
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
        className="w-full max-w-md backdrop-blur-lg p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] flex flex-col gap-8"
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
          Create an Account
        </motion.h1>

        <p
          style={{
            color: `${currentTheme.isDark ? TextColorDark : TextColorWhite}`,
          }}
          className="text-center -mt-4 text-sm"
        >
          Join Vendoo today and start exploring.
        </p>

        {/* Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col"
        >
          <VendooLabel text="Name" htmlFor="name" />
          <VendooInput
            id="name"
            name="name"
            type="text"
            Icon={User2Icon}
            value={formData.name}
            hintText="Your full name"
            isRequired
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col"
        >
          <VendooLabel text="Email" htmlFor="email" />
          <VendooInput
            id="email"
            name="email"
            type="email"
            Icon={MailIcon}
            value={formData.email}
            hintText="example@mail.com"
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
            Icon={LockIcon}
            isPassword={true}
            isShowingPassword={passwordVisibility}
            passwordToggleAction={() =>
              setPasswordVisibility(!passwordVisibility)
            }
            isRequired
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </motion.div>

        {/* Confirm Password Field */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-col"
        >
          <VendooLabel text="Confirm Password" htmlFor="confirmPassword" />
          <VendooInput
            id="confirmPassword"
            name="confirmPassword"
            type={confirmPasswordVisibility ? "text" : "password"}
            value={formData.confirmPassword}
            hintText="Confirm your password"
            isPassword={true}
            isShowingPassword={confirmPasswordVisibility}
            passwordToggleAction={() => {
              setConfirmPasswordVisibility(!confirmPasswordVisibility);
            }}
            Icon={LockIcon}
            isRequired
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <VendooRoundedButton text="Register" action={handleSubmit} />
        </motion.div>

        {/* Footer Links */}
        <div
          style={{
            color: `${currentTheme.isDark ? TextColorDark : TextColorWhite}`,
          }}
          className="flex flex-row justify-center text-sm mt-3 gap-2 text-center items-center"
        >
          <Link
            replace
            to={`/${getValidRouteName({ text: "forgot password" })}`}
          >
            Already have an account?
          </Link>
          <Link
            replace
            to="/login"
            style={{
              color: `${
                currentTheme.isDark ? AccentColorDark : AccentColorWhite
              }`,
            }}
            className="transition-colors font-extrabold duration-200"
          >
            Login
          </Link>
        </div>
      </motion.form>
    </div>
  );
}
