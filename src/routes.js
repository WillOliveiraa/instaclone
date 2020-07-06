import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './Pages/Feed';

import logo from './assets/instagram.png';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTitle: <Image source={logo} />,
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#F5F5F5' },
                }}
            >
                <Stack.Screen name='Feed' component={Feed} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;