import { Text, View, StyleSheet, Button } from "react-native";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <Button title="Go to Group" onPress={() => navigation.navigate('Group')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})