import 'react-native-gesture-handler';
import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './navigation/navigation';
import {appService} from './services/services';

appService.init();

const App: FC = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export {App};
