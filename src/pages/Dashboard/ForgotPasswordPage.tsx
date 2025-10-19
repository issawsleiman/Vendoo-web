import { Link } from "react-router-dom";
import VendooInput from "../../components/widgets/VendooInput";
import VendooRoundedLink from "../../components/widgets/VendooRoundedLink";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 p-6">
      <div className="bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] text-center max-w-md w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Forgot Password
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-8">
          Enter your email address below and we’ll send you a link to reset your
          password.
        </p>

        <form className="flex flex-col gap-5">
          <VendooInput
            id={"email"}
            value={""}
            name={"email"}
            type={"email"}
            hintText="example@mail.com"
          />
          <VendooRoundedLink text={" Send Reset Link"} />
        </form>

        <p className="text-sm text-gray-500 mt-6">
          Remembered your password?{" "}
          <Link
            to="/login"
            replace
            className="text-blue-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
