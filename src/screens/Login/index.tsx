import { Image, Text, View } from "react-native";
import { s } from "./styles";
import { colors } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { LoginForm } from "./components/LoginForm";
import { useKeyboardVisible } from "@/shared/hooks/useKeyboardVisible";
import { useAuthContext } from "@/context/auth.context";

export function Login() {
  const keyboardVisible = useKeyboardVisible();
  return (
    <DismissKeyboardView>
      <View style={s.container}>
        {keyboardVisible ? (
          <></>
        ) : (
          <LinearGradient
            colors={[colors.blue[600], colors.gray[300]]}
            style={s.header}
          >
            <Image source={require("@/assets/logo.png")} style={s.logo} />
            <Text style={s.logoText}>Dev Hub</Text>
          </LinearGradient>
        )}
        <View style={s.form}>
          <Text style={s.title}>Entre com os dados</Text>
          <LoginForm />
        </View>
      </View>
    </DismissKeyboardView>
  );
}
