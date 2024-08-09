import { View, Text, StyleSheet } from "react-native";

export default function Participants() {
  return (
    <View style={styles.container}>
      <Text>Participants Page</Text>
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