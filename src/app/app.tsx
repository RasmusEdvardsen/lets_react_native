import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Friends from './screens/friends/Friends';
import Profile from './screens/friends/Profile';

import Home from './screens/home/Home';
import Chat from './screens/home/group/Chat';
import Participants from './screens/home/group/Participants';
import Map from './screens/home/group/Map';

const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function FriendsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Friends" component={Friends} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    );
};

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

function GroupStack({ route }: any) {
    let params = route.params;

    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Map" component={Map} initialParams={params} />
            <TopTab.Screen name="Chat" component={Chat} initialParams={params} />
            <TopTab.Screen name="Participant" component={Participants} initialParams={params} />
        </TopTab.Navigator>
    )
}

export default function App() {
    // todo: move to location.ts
    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             console.log('Permission to access location was denied');
    //             return;
    //         }

    //         let location = await Location.getCurrentPositionAsync({});
    //         console.log(location);

    //         Location.watchPositionAsync({ timeInterval: 1000, distanceInterval: 0.1 }, (location) => {
    //             console.log(location);
    //         });
    //     })();
    // }, []);

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="HomeStack" component={HomeStack} />
                <Tab.Screen name="FriendsStack" component={FriendsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};