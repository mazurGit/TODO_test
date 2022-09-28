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
import {images} from '../../../../assets/assets';
import dayjs from 'dayjs';

type Props = {
  title: string;
  description: string;
};

const ListItem: FC<Props> = ({title, description}) => {
  const [done, setDone] = useState(false);
  const styles = useMemo(() => createStyles(done), [done]);

  const onPress = () => {
    setDone(prevState => !prevState);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress} style={styles.checkIcon}>
        {done ? <CircleIcon /> : <CheckIcon />}
      </TouchableOpacity>
      <View style={styles.textSection}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.description}>{description} </Text>
        <Text style={styles.date}>{!done && dayjs().format('llll')}</Text>
      </View>
      <Image source={images.list_item} style={styles.image} />
    </View>
  );
};

export {ListItem};
