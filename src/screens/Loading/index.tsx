import { colors } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { ActivityIndicator, Image, StatusBar, Text } from "react-native";
import { s } from "./styles";
import { useAuthContext } from "@/context/auth.context";
import { useEffect } from "react";

type Props = {
  setLoading: (value: boolean) => void;
};

export function Loading({ setLoading }: Props) {
  const { restoreAuthSession, handleLogout } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const token = await restoreAuthSession();
        if (!token) {
          await handleLogout();
        }
      } catch (error) {
        await handleLogout();
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <LinearGradient
      colors={[colors.blue[600], colors.gray[300], colors.gray[300]]}
      style={s.container}
    >
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Image source={require("@/assets/logo.png")} style={s.image} />
      <Text style={s.text}>Dev Hub</Text>
      <ActivityIndicator size={"large"} color={colors.blue[600]} />
    </LinearGradient>
  );
}
