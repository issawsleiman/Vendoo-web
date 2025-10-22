import { Eye, EyeClosed, type LucideIcon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { TextColorDark, TextColorWhite } from "../../utils/constants/colors";

interface InputProps {
  id: string;
  value: string;
  hintText?: string;
  name: string;
  isRequired?: boolean;
  type: string;
  Icon?: LucideIcon;
  isPassword?: boolean;
  isShowingPassword?: boolean;
  passwordToggleAction?: React.MouseEventHandler<HTMLDivElement>;
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
  const currentTheme = useTheme();

  return (
    <div
      className={`w-full flex items-center rounded-lg overflow-hidden border transition-colors duration-200 ${
        currentTheme.isDark
          ? "border-white bg-black"
          : "border-gray-300 bg-white"
      }`}
    >
      {Icon && (
        <div className="flex items-center justify-center pl-3">
          <Icon
            size={22}
            style={{
              color: currentTheme.isDark ? TextColorDark : TextColorWhite,
              opacity: 0.6,
            }}
          />
        </div>
      )}

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={hintText}
        required={isRequired}
        onChange={onChange}
        className={`flex-1 px-4 py-3 text-sm md:text-base focus:outline-none focus:ring-2 rounded-md transition-all duration-150
          ${
            currentTheme.isDark
              ? "bg-black text-white placeholder:text-gray-400 focus:ring-white"
              : "bg-white text-black placeholder:text-gray-500 focus:ring-gray-700"
          }
        `}
      />

      {isPassword && (
        <div
          onClick={passwordToggleAction}
          className="flex items-center justify-center px-3 cursor-pointer select-none"
        >
          {isShowingPassword ? (
            <EyeClosed
              size={22}
              color={currentTheme.isDark ? TextColorDark : TextColorWhite}
            />
          ) : (
            <Eye
              size={22}
              color={currentTheme.isDark ? TextColorDark : TextColorWhite}
            />
          )}
        </div>
      )}
    </div>
  );
}
