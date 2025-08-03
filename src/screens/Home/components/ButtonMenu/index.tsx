import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { s } from "./styles";

type IconSet = "MaterialCommunityIcons" | "AntDesign";

type ButtonMenuProps = TouchableOpacityProps & {
  icon:
    | keyof typeof MaterialCommunityIcons.glyphMap
    | keyof typeof AntDesign.glyphMap;
  iconSet?: IconSet;
  onPress: () => void;
};

export function ButtonMenu({
  icon,
  iconSet = "MaterialCommunityIcons",
  onPress,
  children,
  ...rest
}: PropsWithChildren<ButtonMenuProps>) {
  return (
    <TouchableOpacity onPress={onPress} {...rest}>
      <View style={s.container}>
        {iconSet === "MaterialCommunityIcons" ? (
          <MaterialCommunityIcons
            name={icon as keyof typeof MaterialCommunityIcons.glyphMap}
            size={38}
            style={s.icon}
          />
        ) : (
          <AntDesign
            name={icon as keyof typeof AntDesign.glyphMap}
            size={38}
            style={s.icon}
          />
        )}
        <Text style={s.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}
