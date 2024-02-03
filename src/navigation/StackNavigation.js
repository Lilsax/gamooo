import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Model from '@screens/Model';
import TabGroup from '@navigation/TabNavigation';

const MainStack = createNativeStackNavigator();

const FeedStackGroup = () => {
  return (
    <MainStack.Navigator initialRouteName="TabGroup">
      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="TabGroup"
        component={TabGroup}
      />
      <MainStack.Screen
        options={{
          presentation: 'modal',
        }}
        name="modal"
        component={Model}
      />
    </MainStack.Navigator>
  );
};

export default FeedStackGroup;
