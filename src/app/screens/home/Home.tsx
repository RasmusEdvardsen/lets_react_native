import { InitialRegion, LocationToRegion } from "@/src/device/location";
import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Button } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function Home() {
  // Alternative to mapRef: use MapView region, and onregionchange/onregionchangecomplete to animate map.
  const mapRef = useRef<MapView>(null);

  // todo: set when press on "GO" button, use in useEffect to check for position changes.
  const [geoPerms, setGeoPerms] = useState(false);

  useEffect(() => {
    // todo: Lower accuracy drastically in future.
    let subscription = Location.watchPositionAsync({ timeInterval: 5000, distanceInterval: 0.1, accuracy: Location.Accuracy.Highest }, (location) => {
      console.log("User location (long, lat): ", location.coords.longitude, location.coords.latitude);
      mapRef.current?.animateToRegion(LocationToRegion(location));
    });

    return () => {subscription.then((s) => s.remove());}
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={InitialRegion()}
        ref={mapRef} />
      <View style={styles.buttonContainer}>
        <Button title="GO" onPress={() => console.log("Go live (add/remove user marker)")} />
      </View>
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
  buttonContainer: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  }
});