import { Group } from "@/src/models/Group";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

export default function Home({ navigation }: any) {
  let groups: Group[] = [
    { id: 69 },
    { id: 420 },
    { id: 80085 },
  ];

  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
      <FlatList
        data={groups}
        renderItem={
          ({ item }) => <Button title="Go to Profile" onPress={() => navigation.navigate('GroupStack', item)} />} />
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