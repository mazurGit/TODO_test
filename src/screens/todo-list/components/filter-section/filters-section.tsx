import React, {FC} from 'react';
import {ItemStatusSelector} from '../components';
import {StatusButtonSelector} from '../../../../common/enums/enums';
import {View} from '../../../../components/components';
import {styles} from './styles';
import {selectStatusFilter} from '../../../../store/filter/selectors';
import {useAppSelector, useAppDispatch} from '../../../../hooks/hooks';
import {setStatusFilter} from '../../../../store/actions';

const buttons = [
  {name: StatusButtonSelector.ALL, label: 'All'},
  {name: StatusButtonSelector.DONE, label: 'Виконані'},
  {name: StatusButtonSelector.UNDONE, label: 'Не виконані'},
];

const FilterSection: FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectStatusFilter);
  const onPress = (name: StatusButtonSelector) => {
    dispatch(setStatusFilter(name));
  };

  return (
    <View style={styles.wrapper}>
      {buttons.map(({name, label}) => {
        const isSelected = filter === name;
        return (
          <ItemStatusSelector
            key={name}
            title={label}
            isSelected={isSelected}
            onPress={() => onPress(name)}
          />
        );
      })}
    </View>
  );
};

export {FilterSection};
