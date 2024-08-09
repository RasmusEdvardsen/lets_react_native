import { User } from '@/src/models/User';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

export default function Friends({ navigation }: any) {
  let friends: User[] = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Doe"},
  ];

  return (
    <View style={styles.container}>
      <Text>Friends Page</Text>
      <FlatList 
        data={friends}
        renderItem={
          ({item}) => <Button title="Go to Profile" onPress={() => navigation.navigate('Profile', item)} />} />
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