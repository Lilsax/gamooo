import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feed from '@screens/Feed';
import Fake from '@screens/Fake';

const TopTab = createMaterialTopTabNavigator();

const TopTabsGroup = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          height: 5,
          backgroundColor: 'pink',
        },
      }}>
      <TopTab.Screen name="feed" component={Feed} />
      <TopTab.Screen name="fake" component={Fake} />
    </TopTab.Navigator>
  );
};

export default TopTabsGroup;
