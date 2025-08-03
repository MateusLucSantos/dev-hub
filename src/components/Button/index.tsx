import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./styles";

type ButtonMode = "fill" | "outline";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  mode?: ButtonMode;
};

export function Button({
  title,
  mode = "fill",
  disabled,
  ...rest
}: ButtonProps) {
  const isMode = mode === "fill";
  return (
    <TouchableOpacity
      style={[
        s.container,
        isMode ? s.fill : s.outline,
        disabled ? { opacity: 0.6 } : { opacity: 1 },
      ]}
      activeOpacity={0.8}
      {...rest}
    >
      <Text style={[isMode ? s.textButton : s.textOutline]}>{title}</Text>
    </TouchableOpacity>
  );
}
