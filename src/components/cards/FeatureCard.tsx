import { useTheme } from "../../context/ThemeContext";
import type { Feature } from "../../models/Feature";
import {
  AccentColorDark,
  AccentColorWhite,
  MutedTextDark,
  MutedTextWhite,
  PrimaryColorDark,
  PrimaryColorWhite,
  SecondaryColorDark,
  SecondaryColorWhite,
  TextColorDark,
  TextColorWhite,
} from "../../utils/constants/colors";

type Props = {
  feature: Feature;
};

export default function FeatureCard({ feature }: Props) {
  const currentTheme = useTheme();

  return (
    <div
      style={{
        borderWidth: 0.5,
        borderColor: `${
          currentTheme.isDark ? SecondaryColorWhite : SecondaryColorDark
        }`,
      }}
      className={`group w-full p-8 shadow-sm hover:shadow-lg rounded-2xl transition-all duration-300`}
    >
      {/* Icon */}
      <div
        style={{
          backgroundColor: `${
            currentTheme.isDark ? PrimaryColorDark : PrimaryColorWhite
          }`,
        }}
        className="flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:bg-blue-100 transition-colors duration-300"
      >
        <feature.icon
          size={32}
          color={currentTheme.isDark ? AccentColorDark : AccentColorWhite}
          strokeWidth={3.5}
          className="transition-transform duration-300 group-hover:scale-110 w-full "
        />
      </div>

      {/* Title */}
      <h3
        style={{
          color: `${currentTheme.isDark ? TextColorDark : TextColorWhite}`,
        }}
        className="font-extrabold"
      >
        {feature.title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: `${currentTheme.isDark ? MutedTextDark : MutedTextWhite}`,
        }}
      >
        {feature.desc}
      </p>
    </div>
  );
}
