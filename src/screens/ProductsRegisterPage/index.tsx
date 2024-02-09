import React, {useState} from 'react';

import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Masks} from 'react-native-mask-input';
import uuid from 'react-native-uuid';

import {useForm} from 'react-hook-form';

import Button from '../../components/Button';
import Header from '../../components/Header';
import InputForm from '../../components/InputForm';

import {yupResolver} from '@hookform/resolvers/yup';
import {ValidationProductSchema} from '../../validations/yup';

import {getRealm} from '../../databases/realm';

import {
  DottedView,
  ImageButton,
  ImageProduct,
  MainPage,
  PickerPhotoDescription,
  PickerPhotoTitle,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';

export default function ProductsRegisterPage() {
  const [focusInput, setFocusInput] = useState('');
  const [imageUri, setImageUri] = useState('');
  const [updatePage, setUpdatePage] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({resolver: yupResolver(ValidationProductSchema)});

  const pickImageFromGallery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);

    if (result?.assets) {
      setImageUri(result.assets[0].uri!);
      return;
    }
  };

  const handleNewProductRegister = async () => {
    const realm = await getRealm();

    try {
      realm.write(() => {
        const created = realm.create('Product', {
          _id: uuid.v4(),
          name: getValues().name,
          price: getValues().price,
          description: getValues().description,
          uriImage: imageUri,
        });
        console.log(created);
      });
      setUpdatePage(!updatePage);
      navigation.navigate('Produtos', {updatePage});
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
    }
  };
  return (
    <MainPage>
      <Header title="Cadastro de produto" />
      <InputForm
        control={control}
        name="name"
        placeholder="Nome"
        error={errors.name?.message}
        setFocus={() => setFocusInput('name')}
        focus={focusInput === 'name'}
      />
      <InputForm
        control={control}
        name="price"
        placeholder="Preço"
        error={errors.price?.message}
        setFocus={() => setFocusInput('price')}
        focus={focusInput === 'price'}
        mask={Masks.BRL_CURRENCY}
      />
      <InputForm
        control={control}
        name="description"
        placeholder="Descrição"
        error={errors.description?.message}
        setFocus={() => setFocusInput('description')}
        focus={focusInput === 'description'}
        isDescription
      />
      <PickerPhotoTitle>Foto do produto</PickerPhotoTitle>
      <DottedView>
        {imageUri.length > 0 && (
          <ImageButton onPress={pickImageFromGallery}>
            <ImageProduct source={{uri: imageUri}} />
          </ImageButton>
        )}
        {imageUri.length <= 0 && (
          <>
            <Button
              title="Faça o upload da foto"
              onPress={pickImageFromGallery}
              size="small"
              icon="photo"
            />
            <PickerPhotoDescription>JPG e PNG, somente</PickerPhotoDescription>
          </>
        )}
      </DottedView>
      <Button
        title="Salvar"
        onPress={handleSubmit(handleNewProductRegister)}
        marginTop={200}
        size="large"
      />
    </MainPage>
  );
}
