import { Snackbar } from "@/components/Snackbar";
import { AuthContextProvider } from "@/context/auth.context";
import { ClienteContextProvider } from "@/context/client.context";
import { SnackbarContextProvider } from "@/context/snackbar.context";
import { NavigationRoutes } from "@/routes";

export default function App() {
  return (
    <SnackbarContextProvider>
      <AuthContextProvider>
        <ClienteContextProvider>
          <NavigationRoutes />
          <Snackbar />
        </ClienteContextProvider>
      </AuthContextProvider>
    </SnackbarContextProvider>
  );
}
