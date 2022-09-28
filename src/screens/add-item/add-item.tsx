import React, {FC} from 'react';
import {useState, useAppDispatch} from '../../hooks/hooks';
import uuid from 'react-native-uuid';
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
import {addItem} from '../../store/actions';

const AddItem: FC = () => {
  const dispatch = useAppDispatch();
  const [pictureUri, setPictureUri] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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

  const resetFields = () => {
    setPictureUri('');
    setTitle('');
    setDescription('');
  };
  const onItemCreate = () => {
    dispatch(
      addItem({
        title,
        description,
        image: pictureUri,
        id: uuid.v4().toString(),
        done: false,
      }),
    );
    resetFields();
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
      <TextInput
        value={title}
        placeholder="Заголовок"
        style={styles.input}
        onChangeText={setTitle}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.description]}
        placeholder="Що потрібно зробити"
        multiline={true}
      />
      <Button
        contentContainerStyle={styles.createBtn}
        label="Створити"
        onPress={onItemCreate}
      />
    </View>
  );
};

export {AddItem};
