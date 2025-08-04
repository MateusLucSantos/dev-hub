import { TextInput, TouchableOpacity, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/theme";
import { s } from "./styles";
import { DismissKeyboardView } from "../DismissKeyboardView";

type SearchProps = {
  label: string;
};

export function InputSearch({ label }: SearchProps) {
  return (
    <View style={[s.contentSearch, s.search]}>
      <TextInput
        placeholder={label}
        placeholderTextColor={colors.gray[600]}
        style={s.textSearch}
        cursorColor={colors.gray[600]}
      />
      <AntDesign name="search1" size={22} style={s.icon} />
    </View>
  );
}
