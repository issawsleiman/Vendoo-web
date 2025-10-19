import { Eye, EyeClosed, type LucideIcon } from "lucide-react";

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

  //** Prefix Icon */
  Icon?: LucideIcon;

  //** Is Password
  // this for controlling showing the eye visibility on input
  // */
  isPassword?: Boolean;
  // is showing password (controlls show/hide password)
  isShowingPassword?: Boolean;
  // action for toggling the password icon
  passwordToggleAction?: React.MouseEventHandler<HTMLDivElement>;

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
  Icon,
  isPassword,
  isShowingPassword,
  passwordToggleAction,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-row justify-between items-center pl-2 pr-2 ">
      {Icon && <Icon size={25} style={{ opacity: 0.5 }} />}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={hintText}
        required={isRequired}
        onChange={onChange}
        className=" w-full bg-white/50 placeholder-gray-400 border-gray-100 border-2 text-gray-900 pl-4 pr-4 py-3  rounded-md mt-5 mb-5 focus:outline-none focus:ring-2 ml-4 mr-4 focus:ring-blue-500 transition-all duration-150"
      />
      <div onClick={passwordToggleAction}>
        {isPassword &&
          (isShowingPassword ? <EyeClosed size={25} /> : <Eye size={25} />)}
      </div>
    </div>
  );
}
