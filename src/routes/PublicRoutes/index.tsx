import { Login } from "@/screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

type PublicStackParamsList = {
  Login: undefined;
};

export function PublicRoutes() {
  const { Navigator, Screen } =
    createNativeStackNavigator<PublicStackParamsList>();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
