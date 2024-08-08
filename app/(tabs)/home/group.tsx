import { Text, View, StyleSheet } from "react-native";

export default function GroupPage() {
  return (
    <View style={styles.container}>
      <Text>Group Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});