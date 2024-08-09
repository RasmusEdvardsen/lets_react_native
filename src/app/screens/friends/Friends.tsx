import { View, Text, StyleSheet, Button } from 'react-native';

export default function Friends({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Friends Page</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
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