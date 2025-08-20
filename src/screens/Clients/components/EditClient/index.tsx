import { Text, View } from "react-native";

type EditClientProps = {
  id: number;
};

export function EditClient({ id }: EditClientProps) {
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
}
