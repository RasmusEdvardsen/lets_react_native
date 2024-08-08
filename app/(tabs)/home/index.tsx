import { Href, Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function HomePage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>Home page.</Text>

      <Link href={"/home/group" as Href} style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: "bold" }}>Go to group page</Text>
      </Link>
    </View>
  );
}