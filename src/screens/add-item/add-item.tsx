import React, {FC} from 'react';
import {
  useState,
  useAppDispatch,
  useEffect,
  useNavigation,
} from '../../hooks/hooks';
import {
  View,
  TextInput,
  Button,
  PlusIcon,
  TouchableOpacity,
  Image,
  ScreenWrapper,
  Text,
} from '../../components/components';
import {styles} from './styles';
import {launchImageLibrary} from 'react-native-image-picker';
import {addItem} from '../../store/actions';
import {colors, errors} from '../../common/constants/constants';
import {RootNavigationProps} from '../../common/types/types';
import { RootScreenName } from '../../common/enums/enums';

const AddItem: FC = () => {
  const navigation = useNavigation<RootNavigationProps>();
  const dispatch = useAppDispatch();
  const [pictureUri, setPictureUri] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Створити завдання',
      headerBackVisible: true,
      headerTitleAlign: 'center',
      headerStyle: {backgroundColor: colors.gray},
    });
  }, []);

  const onAddPicture = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxHeight: 100,
      maxWidth: 100,
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
    if (description && title) {
      dispatch(
        addItem({
          title,
          description,
          image: pictureUri,
          done: false,
        }),
      );
      setError(false);
      resetFields();
      navigation.navigate(RootScreenName.TODO);
    } else {
      setError(true);
    }
  };

  return (
    <ScreenWrapper>
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
          placeholder="Назва завдання"
          style={styles.input}
          onChangeText={setTitle}
          placeholderTextColor={colors.dim_gray}
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          style={[styles.input, styles.description]}
          placeholder="Що потрібно зробити"
          multiline={true}
          placeholderTextColor={colors.dim_gray}
        />
        <Text style={styles.error}>{error && errors.all_fields_required}</Text>
        <Button
          contentContainerStyle={styles.createBtn}
          label="Створити"
          onPress={onItemCreate}
        />
      </View>
    </ScreenWrapper>
  );
};

export {AddItem};
