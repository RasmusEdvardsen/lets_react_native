import { Href, Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Home page.</Text>

      <Link href={"/home/group" as Href} style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: "bold" }}>Go to group page</Text>
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