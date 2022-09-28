import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './store/store';
import {Navigation} from './navigation/navigation';
import {appService} from './services/services';

appService.init();

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export {App};
