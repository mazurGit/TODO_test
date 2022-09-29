import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TodoList, AddItem} from '../screens/screens';
import {RootNavigationParamList} from '../common/types/types';
import {RootScreenName} from '../common/enums/enums';

const NativeStack = createNativeStackNavigator<RootNavigationParamList>();

const Navigation: FC = () => {
  return (
    <NativeStack.Navigator>
      <NativeStack.Screen component={TodoList} name={RootScreenName.TODO} />
      <NativeStack.Screen component={AddItem} name={RootScreenName.ADD_ITEM} />
    </NativeStack.Navigator>
  );
};

export {Navigation};
