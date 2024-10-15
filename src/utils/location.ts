import * as Location from 'expo-location';
import { Region } from 'react-native-maps';

export function LocationToRegion(location: Location.LocationObject): Region {
    return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
}

export function InitialRegion(): Region {
    return {
        latitude: 55.676098,
        longitude: 12.568337,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };
}