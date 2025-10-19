import { motion } from "framer-motion";
import VendooLabel from "../../components/widgets/VendooLabel";
import VendooInput from "../../components/widgets/VendooInput";
import { useState } from "react";
import VendooRoundedButton from "../../components/widgets/VendooRoundedLink";
import { Link } from "react-router-dom";
import { LockIcon, MailIcon, User2Icon } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Register form submitted:", formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-6">
      {/* Register Form */}
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
          Create an Account
        </motion.h1>

        <p className="text-center text-gray-500 -mt-4 text-sm">
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
            type="password"
            value={formData.password}
            hintText="••••••••"
            Icon={LockIcon}
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
            type="password"
            value={formData.confirmPassword}
            hintText="Confirm your password"
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
        <div className="flex justify-between text-sm text-gray-500 mt-3">
          <p className="hover:text-blue-600 transition-colors duration-200">
            Already have an account?
          </p>
          <Link
            replace
            to="/login"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Login
          </Link>
        </div>
      </motion.form>
    </div>
  );
}
