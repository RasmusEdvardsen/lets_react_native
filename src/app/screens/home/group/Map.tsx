import { View, Text, StyleSheet } from "react-native";

export default function Map() {
  return (
    <View style={styles.container}>
      <Text>Map Page</Text>
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