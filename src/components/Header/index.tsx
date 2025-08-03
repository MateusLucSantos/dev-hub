import { colors } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "./styles";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { useAuthContext } from "@/context/auth.context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HeaderProps = {
  goBack?: boolean;
};

export function Header({ goBack }: HeaderProps) {
  const { handleLogout } = useAuthContext();
  const navigation = useNavigation();
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
      <View style={s.header}>
        {goBack && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} />
          </TouchableOpacity>
        )}
        <View style={s.logoContainer}>
          <Image source={require("@/assets/logo.png")} style={s.logo} />
          <Text style={s.text}>Dev Hub</Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleLogout}>
            <MaterialCommunityIcons name="logout" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
