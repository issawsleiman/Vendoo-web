import { Mail, MailMinus } from "lucide-react";

interface InputProps {
  /** The unique id of the input */
  id: string;

  /** The current value of the input */
  value: string;

  /** Placeholder text shown inside the input */
  hintText?: string;

  /** The name attribute for form submission */
  name: string;

  /** Whether the input is required */
  isRequired?: boolean;

  /** Input type (text, password..) */
  type: string;

  /** Optional onChange handler for controlled inputs */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function VendooInput({
  id,
  value,
  hintText = "",
  name,
  type,
  isRequired = false,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-row  justify-center items-center pl-2 pr-2">
      <MailMinus />
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={hintText}
        required={isRequired}
        onChange={onChange}
        className=" w-full bg-white/50 placeholder-gray-400 text-gray-900 pl-4 pr-4 py-3 rounded-md mt-5 mb-5 focus:outline-none focus:ring-2 ml-4 focus:ring-blue-500 transition-all duration-150"
      />
    </div>
  );
}
