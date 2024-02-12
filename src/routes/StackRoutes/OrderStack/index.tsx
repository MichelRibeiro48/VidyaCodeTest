import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OrderRegister from '../../../screens/OrderRegister';

export default function OrderStackRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="OrderRegister" component={OrderRegister} />
    </Stack.Navigator>
  );
}
