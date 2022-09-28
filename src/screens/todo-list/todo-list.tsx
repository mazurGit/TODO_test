import React, {FC} from 'react';
import {View} from '../../components/components';
import {ListItem} from './components/components';

const TodoList: FC = () => {
  return (
    <View>
      <ListItem title="TODO" description="description" />
    </View>
  );
};

export {TodoList};
