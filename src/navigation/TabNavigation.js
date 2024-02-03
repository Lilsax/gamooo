import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '@screens/Home';
import Profile from '@screens/Profile';
import TopTabsGroup from '@navigation/TopTabsNavigation';

const Tab = createBottomTabNavigator();

const TabGroup = () => {
  return (
    <Tab.Navigator
      initialRouteName="TopTabsGroup"
      screenOptions={({route, navigation}) => ({
        tabBarActiveTintColor: 'pink',
        tabBarInactiveTintColor: 'lightgreen',
        tabBarIcon: ({color, focused, size}) => {
          const iconName =
            route.name == 'TopTabsGroup'
              ? 'mother-nurse'
              : route.name == 'home'
              ? 'home-outline'
              : 'face-man-profile';

          return (
            <MaterialCommunityIcons name={iconName} color={color} size={23} />
          );
        },
      })}>
      <Tab.Screen
        options={{
          tabBarLabel: 'TopTabsGroup',
          headerShown: false,
        }}
        name="TopTabsGroup"
        component={TopTabsGroup}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
        }}
        name="home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
        }}
        name="profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabGroup;
