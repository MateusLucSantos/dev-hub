import { Client } from "@/screens/Client";
import { Home } from "@/screens/Home";
import { Info } from "@/screens/Info";
import { Service } from "@/screens/Service";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type PrivateStackParams = {
  Home: undefined;
  Client: undefined;
  Service: undefined;
  Info: undefined;
};

export function PrivateRoutes() {
  const { Navigator, Screen } =
    createNativeStackNavigator<PrivateStackParams>();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Client" component={Client} />
      <Screen name="Service" component={Service} />
      <Screen name="Info" component={Info} />
    </Navigator>
  );
}
