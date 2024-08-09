import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FriendsStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Friends" component={FriendsListScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
};

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={HomeScreenStack} />
                <Tab.Screen name="Friends" component={FriendsStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

function HomeScreenStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Group" component={GroupScreen} />
        </Stack.Navigator>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home List Page</Text>
            <Button title="Go to Group" onPress={() => navigation.navigate('Group')} />
        </View>
    );
}
function GroupScreen() {
    return (
        <View style={styles.container}>
            <Text>Group Page</Text>
        </View>
    );
}

function FriendsListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Friends List Page</Text>
            <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
    );
}
function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text>Profile Page</Text>
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

export default App;