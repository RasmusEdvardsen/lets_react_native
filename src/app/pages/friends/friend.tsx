import { Text, View, StyleSheet } from "react-native";

export default function FriendPage() {
  return (
    <View style={styles.container}>
      <Text>Friend Page</Text>
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