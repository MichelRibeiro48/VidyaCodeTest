import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import OrderPage from '../../screens/OrderPage';
import ClientPage from '../../screens/ClientPage';
import ProductsPage from '../../screens/ProductsPage';

export default function TabRoutes() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          height: 80,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Inter',
          fontWeight: '800',
        },
        tabBarItemStyle: {
          paddingVertical: 16,
        },
        tabBarStyle: {
          height: 88,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Pedidos"
        component={OrderPage}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="bag"
              size={20}
              color={focused ? '#006FFD' : '#D4D6DD'}
            />
          ),
          tabBarLabelStyle: {
            color: '#1F2024',
            fontFamily: 'Inter',
            fontWeight: '600',
          },
        }}
      />
      <Tab.Screen
        name="Clientes"
        component={ClientPage}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="user"
              size={20}
              color={focused ? '#006FFD' : '#D4D6DD'}
            />
          ),
          tabBarLabelStyle: {
            color: '#1F2024',
            fontFamily: 'Inter',
            fontWeight: '600',
          },
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={ProductsPage}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <FontAwesome6
              name="shop"
              size={20}
              color={focused ? '#006FFD' : '#D4D6DD'}
            />
          ),
          tabBarLabelStyle: {
            color: '#1F2024',
            fontFamily: 'Inter',
            fontWeight: '600',
          },
        }}
      />
    </Tab.Navigator>
  );
}
