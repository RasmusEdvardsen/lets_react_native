import { Group } from "@/src/models/Group";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Home() {
  let groups: Group[] = [
    { id: 69 },
    { id: 420 },
    { id: 80085 },
  ];

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});