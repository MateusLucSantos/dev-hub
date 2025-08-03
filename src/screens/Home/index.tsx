import { Header } from "@/components/Header";

import { View } from "react-native";
import { s } from "./styles";
import { ButtonMenu } from "@/screens/Home/components/ButtonMenu";
import { useNavigation } from "@react-navigation/native";
import { PrivateStackParams } from "@/routes/PrivateRoutes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export function Home() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PrivateStackParams>>();
  return (
    <View style={s.container}>
      <Header />
      <View style={s.content}>
        <ButtonMenu
          icon="account-group"
          onPress={() => {
            navigation.navigate("Client");
          }}
        >
          Clientes
        </ButtonMenu>
        <ButtonMenu
          icon="customerservice"
          iconSet="AntDesign"
          onPress={() => {
            navigation.navigate("Service");
          }}
        >
          Atendimentos
        </ButtonMenu>
        <ButtonMenu
          icon="cellphone"
          onPress={() => {
            navigation.navigate("Info");
          }}
        >
          Info
        </ButtonMenu>
      </View>
    </View>
  );
}
