import { View, Text, StyleSheet } from "react-native";

export default function Map({ route }: any) {

  return (
    <View style={styles.container}>
      <Text>Map page for group with id {route.params.id}</Text>
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