import React, {FC} from 'react';
import {useState} from '../../hooks/hooks';
import {
  View,
  TextInput,
  Button,
  PlusIcon,
  TouchableOpacity,
  Image,
} from '../../components/components';
import {styles} from './styles';
import {launchImageLibrary} from 'react-native-image-picker';

const AddItem: FC = () => {
  const [pictureUri, setPictureUri] = useState('');
  const onAddPicture = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 70,
      maxWidth: 70,
      includeBase64: true,
    });
    if (result.assets) {
      const pictureBase64 = result.assets[0].base64 as string;
      setPictureUri(pictureBase64);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.pictureWrapper}>
        {pictureUri ? (
          <Image
            source={{uri: `data:image/jpeg;base64,${pictureUri}`}}
            style={styles.imageContainer}
          />
        ) : (
          <TouchableOpacity onPress={onAddPicture}>
            <PlusIcon size={35} />
          </TouchableOpacity>
        )}
      </View>
      <TextInput placeholder="Заголовок" style={styles.input} />
      <TextInput
        style={[styles.input, styles.description]}
        placeholder="Що потрібно зробити"
        multiline={true}
      />
      <Button
        contentContainerStyle={styles.createBtn}
        label="Створити"
        onPress={() => {
          // TODO
        }}
      />
    </View>
  );
};

export {AddItem};
