import { Link } from "react-router-dom";

interface ButtonProps {
  // Button text
  text: string;
  // Button action
  action: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function VendooBorderdRoundedButton({
  action,
  text,
}: ButtonProps) {
  return (
    <Link
      to="register"
      onClick={action}
      className="w-32 px-6 py-2.5 border border-[#052a9c] text-[#052a9c] rounded-full font-medium hover:bg-[#052a9c] hover:text-white transition-colors duration-200 cursor-pointer"
    >
      {text}
    </Link>
  );
}
