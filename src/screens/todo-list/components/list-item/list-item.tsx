import React, {FC} from 'react';
import {useState, useMemo} from '../../../../hooks/hooks';
import {
  View,
  Text,
  CheckIcon,
  CircleIcon,
  TouchableOpacity,
  Image,
} from '../../../../components/components';
import {createStyles} from './styles';
import dayjs from 'dayjs';
import {StyleProp, ViewStyle} from 'react-native';
import {TodoItem} from '../../../../common/types/types';

type Props = {
  item: TodoItem;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

const ListItem: FC<Props> = ({item, contentContainerStyle}) => {
  const {title, description, image: imageBase64} = item;
  const [done, setDone] = useState(false);
  const styles = useMemo(() => createStyles(done), [done]);

  const onPress = () => {
    setDone(prevState => !prevState);
  };

  return (
    <View style={[styles.wrapper, contentContainerStyle]}>
      <TouchableOpacity onPress={onPress} style={styles.checkIcon}>
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
  );
};

export {ListItem};
