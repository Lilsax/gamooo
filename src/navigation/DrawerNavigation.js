import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Setting from '@screens/Settings';
import FeedStackGroup from '@navigation/StackNavigation';

const Drawer = createDrawerNavigator();

const DrawerGroup = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
      }}
      initialRouteName="FeedStackGroup">
      <Drawer.Screen name="setting" component={Setting} />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="FeedStackGroup"
        component={FeedStackGroup}
      />
    </Drawer.Navigator>
  );
};

export default DrawerGroup;
