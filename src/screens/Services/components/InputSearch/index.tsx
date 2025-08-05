import { TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/theme";
import { s } from "./styles";

type SearchProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
};

export function InputSearch({ label, value, onChangeText }: SearchProps) {
  return (
    <View style={[s.contentSearch, s.search]}>
      <TextInput
        placeholder={label}
        placeholderTextColor={colors.gray[600]}
        style={s.textSearch}
        cursorColor={colors.gray[600]}
        value={value}
        onChangeText={onChangeText}
      />
      <AntDesign name="search1" size={22} style={s.icon} />
    </View>
  );
}
