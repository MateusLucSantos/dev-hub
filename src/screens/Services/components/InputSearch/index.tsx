import { TextInput, TextInputProps, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/theme";
import { s } from "./styles";

type SearchProps = TextInputProps & {
  label: string;
};

export function InputSearch({ label, ...rest }: SearchProps) {
  return (
    <View style={[s.contentSearch, s.search]}>
      <TextInput
        placeholder={label}
        placeholderTextColor={colors.gray[600]}
        style={s.textSearch}
        cursorColor={colors.gray[600]}
        {...rest}
      />
      <AntDesign name="search1" size={22} style={s.icon} />
    </View>
  );
}
