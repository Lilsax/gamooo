import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '@store/store';
import DrawerGroup from '@navigation/DrawerNavigation';

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerGroup />
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
