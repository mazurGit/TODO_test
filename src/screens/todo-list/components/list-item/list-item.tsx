import React, {FC} from 'react';
import {useMemo, useAppDispatch} from '../../../../hooks/hooks';
import {
  View,
  Text,
  CheckIcon,
  CircleIcon,
  TouchableOpacity,
  Image,
  TrashIcon,
} from '../../../../components/components';
import {createStyles} from './styles';
import dayjs from 'dayjs';
import {StyleProp, ViewStyle} from 'react-native';
import {TodoItem} from '../../../../common/types/types';
import {changeItemStatus, removeItemById} from '../../../../store/actions';

type Props = {
  item: TodoItem;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const ListItem: FC<Props> = ({item, contentContainerStyle}) => {
  const dispatch = useAppDispatch();
  const {title, description, image: imageBase64, id, done} = item;
  const styles = useMemo(() => createStyles(done), [done]);

  const onPressComplete = () => {
    dispatch(changeItemStatus(id));
  };

  const onDeletePress = () => {
    dispatch(removeItemById(id));
  };

  return (
    <View style={[styles.wrapper, contentContainerStyle]}>
      <View style={styles.cardContentWrapper}>
        <TouchableOpacity onPress={onPressComplete} style={styles.checkIcon}>
          {done ? <CheckIcon /> : <CircleIcon />}
        </TouchableOpacity>
        <View style={styles.textSection}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.description}>{description} </Text>
          <Text style={styles.date}>{done && dayjs().format('llll')}</Text>
        </View>
        <Image
          source={{uri: `data:image/jpeg;base64,${imageBase64}`}}
          style={styles.image}
        />
      </View>
      <TrashIcon style={styles.trashIcon} onPress={onDeletePress} />
    </View>
  );
};

export {ListItem};
