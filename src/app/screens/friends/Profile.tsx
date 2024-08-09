import { Text, View, StyleSheet } from "react-native";

export default function Profile({ route }: any) {
  return (
    <View style={styles.container}>
      <Text>Friend Page {route.params.id} {route.params.name}</Text>
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