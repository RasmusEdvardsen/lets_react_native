import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function FriendPage() {
  return (
    <>
      <Stack.Screen options={{ title: "Friend" }} />
      
      <View style={styles.container}>
        <Text>Friend Page</Text>
      </View>
    </>
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