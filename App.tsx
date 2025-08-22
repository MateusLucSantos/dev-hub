import { Snackbar } from "@/components/Snackbar";
import { AttentanceContextProvider } from "@/context/attentance.context";
import { AuthContextProvider } from "@/context/auth.context";
import { BottomSheetProvider } from "@/context/bottomsheet.context";
import { ClienteContextProvider } from "@/context/client.context";
import { SnackbarContextProvider } from "@/context/snackbar.context";
import { NavigationRoutes } from "@/routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SnackbarContextProvider>
        <AuthContextProvider>
          <ClienteContextProvider>
            <AttentanceContextProvider>
              <BottomSheetProvider>
                <NavigationRoutes />
                <Snackbar />
              </BottomSheetProvider>
            </AttentanceContextProvider>
          </ClienteContextProvider>
        </AuthContextProvider>
      </SnackbarContextProvider>
    </GestureHandlerRootView>
  );
}
