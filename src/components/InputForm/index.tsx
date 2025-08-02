import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { s } from "./styles";
import { colors } from "@/theme";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { ErrorMessage } from "../ErrorMessage";

interface InputFormProps<T extends FieldValues> extends TextInputProps {
  label?: string;
  control: Control<T>;
  name: Path<T>;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export function InputForm<T extends FieldValues>({
  label,
  control,
  name,
  icon,
  secureTextEntry,
  ...rest
}: InputFormProps<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const [showText, setShowText] = useState(secureTextEntry);
  const inputRef = useRef<TextInput>(null);

  function checkFocus() {
    if (inputRef.current) {
      setIsFocused(inputRef.current?.isFocused());
    }
  }
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <View style={s.container}>
            {label && (
              <Text
                style={[
                  s.label,
                  isFocused
                    ? { color: colors.blue[600] }
                    : { color: colors.gray[700] },
                ]}
              >
                {label}
              </Text>
            )}
            <TouchableOpacity
              style={{ position: "relative", justifyContent: "center" }}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                style={[
                  s.textIput,
                  isFocused
                    ? { borderColor: colors.blue[600] }
                    : { borderColor: colors.gray[700] },
                ]}
                placeholderTextColor={colors.gray[700]}
                cursorColor={colors.gray[700]}
                ref={inputRef}
                onFocus={checkFocus}
                onEndEditing={checkFocus}
                secureTextEntry={showText}
                {...rest}
              />
              {secureTextEntry && (
                <TouchableOpacity
                  onPress={() => setShowText((value) => !value)}
                  style={s.icon}
                >
                  <MaterialIcons
                    name={showText ? "visibility" : "visibility-off"}
                    size={24}
                    color={colors.gray[600]}
                  />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </View>
        );
      }}
    />
  );
}
