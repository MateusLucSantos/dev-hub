import { PropsWithChildren } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";

import { s } from "./styles";

export function DismissKeyboardView({ children }: PropsWithChildren) {
  return (
    <>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <KeyboardAvoidingView behavior="padding" style={s.containerKeyboard}>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{ backgroundColor: "" }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
}
