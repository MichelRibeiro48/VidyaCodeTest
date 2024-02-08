import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabRoutes from './TabRoutes';
import OrderRegister from '../screens/OrderRegister';
import {NavigationContainer} from '@react-navigation/native';
import ClientDescriptionPage from '../screens/ClientDescriptionPage';
import ClientRegisterPage from '../screens/ClientRegisterPage';

export default function OrderStackRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={TabRoutes} />
        <Stack.Screen name="OrderRegister" component={OrderRegister} />
        <Stack.Screen
          name="ClientDescription"
          component={ClientDescriptionPage}
        />
        <Stack.Screen name="ClientRegister" component={ClientRegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
