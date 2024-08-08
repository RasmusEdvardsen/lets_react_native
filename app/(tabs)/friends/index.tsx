import { Link, Href } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function FriendsPage() {
  return (
    <View style={styles.container}>
      <Text>Friends page.</Text>

      <Link href={"/friends/friend" as Href} style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: "bold" }}>Go to friend page</Text>
      </Link>
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