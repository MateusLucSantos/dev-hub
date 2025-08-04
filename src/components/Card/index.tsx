import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { s } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type CardProps = TouchableOpacityProps & {
  name: string | null;
  phone: string | null;
  onPressView?: () => void;
  onPressEdit?: () => void;
};

export function Card({
  name,
  phone,
  onPressView,
  onPressEdit,
  ...rest
}: CardProps) {
  return (
    <View style={s.container}>
      <View style={s.contentText}>
        <Text style={s.text} numberOfLines={1}>
          {name}
        </Text>
        <Text style={s.text} numberOfLines={1}>
          {phone}
        </Text>
      </View>
      <View style={s.iconButton}>
        <TouchableOpacity onPress={onPressEdit} {...rest}>
          <MaterialCommunityIcons name="account-edit" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressView} {...rest}>
          <MaterialCommunityIcons name="account-eye" size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
