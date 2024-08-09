import { View, Text, StyleSheet } from 'react-native';

export default function FriendsPage() {
  return (
    <View style={styles.container}>
      <Text>Friends page.</Text>
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