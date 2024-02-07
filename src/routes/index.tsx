import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ClientPage from '../screens/ClientPage';
import OrderPage from '../screens/OrderPage';
import ProductsPage from '../screens/ProductsPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
export default function Routes() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
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
                size={24}
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
                size={24}
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
                size={24}
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
    </NavigationContainer>
  );
}
