import React, {useState} from 'react';

import {
  DottedView,
  ImageButton,
  ImageProduct,
  MainPage,
  PickerPhotoDescription,
  PickerPhotoTitle,
} from './styles';
import Header from '../../components/Header';
import InputForm from '../../components/InputForm';
import {yupResolver} from '@hookform/resolvers/yup';
import {ValidationProductSchema} from '../../validations/yup';
import {useForm} from 'react-hook-form';
import Button from '../../components/Button';
import {Masks} from 'react-native-mask-input';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';

export default function ProductsRegisterPage() {
  const [focusInput, setFocusInput] = useState('');
  const [imageUri, setImageUri] = useState('');
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({resolver: yupResolver(ValidationProductSchema)});

  const onSubmit = async () => {
    console.log('Tudo certo');
  };

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
  console.log(imageUri);
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
        onPress={handleSubmit(onSubmit)}
        marginTop={200}
        size="large"
      />
    </MainPage>
  );
}
