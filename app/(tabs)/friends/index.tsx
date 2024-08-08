import { Link, Href } from 'expo-router';
import { View, Text } from 'react-native';

export default function FriendsPage() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Friends page.</Text>

      <Link href={"/friends/friend" as Href} style={{ marginTop: 16 }}>
        <Text style={{ fontWeight: "bold" }}>Go to friend page</Text>
      </Link>
    </View>
  );
}