import {
  useFonts,
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_700Bold,
} from "@expo-google-fonts/orbitron";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./PublicRoutes";
import { useCallback, useState } from "react";
import { PrivateRoutes } from "./PrivateRoutes";
import { SystemBars } from "react-native-edge-to-edge";
import { useAuthContext } from "@/context/auth.context";
import { Loading } from "@/screens/Loading";

export function NavigationRoutes() {
  const [loading, setLoading] = useState(true);
  const { access_token, expires_in } = useAuthContext();

  const [fontsLoaded] = useFonts({
    Orbitron_400Regular,
    Orbitron_500Medium,
    Orbitron_700Bold,
  });

  const Routes = useCallback(() => {
    if (loading) {
      return <Loading setLoading={setLoading} />;
    }

    if (!access_token || expires_in <= 0) {
      return <PublicRoutes />;
    } else {
      return <PrivateRoutes />;
    }
  }, [fontsLoaded, access_token, expires_in, loading]);

  return (
    <NavigationContainer>
      <SystemBars style={"light"} />
      <Routes />
    </NavigationContainer>
  );
}
