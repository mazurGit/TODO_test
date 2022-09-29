import React, {FC} from 'react';
import {
  useNavigation,
  useEffect,
  useAppDispatch,
  useAppSelector,
  useCallback,
} from '../../hooks/hooks';
import {RootNavigationProps, TodoItem} from '../../common/types/types';
import {RootScreenName} from '../../common/enums/enums';
import {
  PlusIcon,
  FlatList,
  Button,
  View,
  Text,
  ScreenWrapper,
} from '../../components/components';
import {ListItem, FilterSection} from './components/components';
import {styles} from './styles';
import {selectFilteredItems} from '../../store/selectors';
import {colors} from '../../common/constants/colors';
import {setSearchValue, resetItemsList} from '../../store/actions';

const TodoList: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: '',
      headerBackVisible: true,
      headerStyle: {backgroundColor: colors.gray},
      headerSearchBarOptions: {
        onChangeText: ({nativeEvent: {text}}) => dispatch(setSearchValue(text)),
      },
    });
  }, []);
  const onAddPress = useCallback(() => {
    navigation.navigate(RootScreenName.ADD_ITEM);
  }, []);
  const onResetPress = useCallback(() => {
    dispatch(resetItemsList());
  }, []);
  const todoItems = useAppSelector(selectFilteredItems);
  const renderItem = useCallback(
    ({item}: {item: TodoItem}) => (
      <ListItem item={item} contentContainerStyle={styles.todoItem} />
    ),
    [],
  );
  const keyExtractor = useCallback((item: TodoItem) => item.id, []);

  return (
    <ScreenWrapper>
      {todoItems && (
        <>
          <FilterSection />
          <FlatList
            ListEmptyComponent={() => (
              <Text style={styles.headerText}>Завдання відсутні</Text>
            )}
            data={todoItems}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ListFooterComponent={
              <PlusIcon size={40} style={styles.plus} onPress={onAddPress} />
            }
          />
          <View style={styles.buttonWrapper}>
            <Button
              label="Скинути список"
              contentContainerStyle={styles.button}
              onPress={onResetPress}
            />
            <Button
              label="Додати завдання"
              contentContainerStyle={styles.button}
              onPress={onAddPress}
            />
          </View>
        </>
      )}
    </ScreenWrapper>
  );
};

export {TodoList};
