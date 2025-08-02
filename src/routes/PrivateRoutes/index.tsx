import { Home } from "@/screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type PrivateStackParams = {
  Home: undefined;
};

export function PrivateRoutes() {
  const { Navigator, Screen } =
    createNativeStackNavigator<PrivateStackParams>();

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
