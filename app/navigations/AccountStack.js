import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../components/Account';

const Stack = createStackNavigator();
export default function FavoritesStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='account'
                component={Account}
                options={{ title: 'Mi cuenta' }}
            />
        </Stack.Navigator>
    )

}
