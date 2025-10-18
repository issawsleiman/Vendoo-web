import { useState } from "react";
import { motion } from "framer-motion";
import VendooInput from "../../components/widgets/VendooInput";
import VendooLabel from "../../components/widgets/VendooLabel";
import VendooRoundedButton from "../../components/widgets/VendooRoundedButton";

export default function SignInPage() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-400 to-blue-200 flex items-center justify-center p-6">
      {/* Sign in form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/90 backdrop-blur-md p-10 rounded-xl shadow-2xl flex flex-col gap-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-blue-700 text-center"
        >
          Sign In
        </motion.h1>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col"
        >
          <VendooLabel text="Email" htmlFor="email" />
          <VendooInput
            id="email"
            name="email"
            type="email"
            value={formData.name}
            hintText="Name"
            isRequired
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </motion.div>

        {/* Password Field */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col"
        >
          <VendooLabel text="Password" htmlFor="password" />
          <VendooInput
            id="password"
            name="password"
            type="password"
            value={formData.email}
            hintText="Password"
            isRequired
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </motion.div>

        {/* Submit Button */}
        <VendooRoundedButton text={"Sign in"} />
      </motion.form>
    </div>
  );
}
