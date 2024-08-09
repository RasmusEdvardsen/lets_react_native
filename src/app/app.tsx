import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Friends from './screens/friends/Friends';
import Profile from './screens/friends/Profile';
import Home from './screens/home/Home';
import Group from './screens/home/Group';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function FriendsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Friends" component={Friends} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Group" component={Group} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Friends" component={FriendsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};