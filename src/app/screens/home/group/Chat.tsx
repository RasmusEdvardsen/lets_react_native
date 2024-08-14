import { View, Text, StyleSheet } from "react-native";

export default function Chat({ route }: any) {
  return (
    <View style={styles.container}>
      <Text>Chat Page {route.params.id} {route.params.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});