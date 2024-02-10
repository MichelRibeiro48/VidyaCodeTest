import React, {useEffect, useState} from 'react';
import {ButtonView, FormView, MainPage} from './styles';
import Header from '../../components/Header';
import {useForm} from 'react-hook-form';
import Button from '../../components/Button';
import InputForm from '../../components/InputForm';
import {yupResolver} from '@hookform/resolvers/yup';
import {ValidationClientSchema} from '../../validations/yup';
import {getAddressByCep, getUFBrazil} from '../../api';
import {cepInfoT} from '../../types/cepInfoT';
import {CNPJRegex, cepRegex, phoneRegex} from '../../helpers/Regex';
import {ResponseUFBrazilT} from '../../types/ResponseUFBrazilT';
import {GetAddressResponseT} from '../../types/GetAddressResponseT';
import Dropdown from '../../components/Dropdown';
import uuid from 'react-native-uuid';
import {getRealm} from '../../databases/realm';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';

export default function ClientRegisterPage() {
  const [selectedItem, setSelectedItem] = useState<unknown>('');
  const [focusInput, setFocusInput] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const [updatePage, setUpdatePage] = useState(false);
  const [states, setStates] = useState<string[]>([]);
  const [cepInfo, setCepInfo] = useState<cepInfoT>({
    uf: undefined,
    bairro: undefined,
    localidade: undefined,
    logradouro: undefined,
  });
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: {errors},
  } = useForm({resolver: yupResolver(ValidationClientSchema)});

  const getAddress = async (cep: string) => {
    try {
      const response: GetAddressResponseT = await getAddressByCep(cep);
      setCepInfo(response);
    } catch (e) {
      console.log(e);
    }
  };

  const getResponseUFBrazil = async () => {
    try {
      const response = await getUFBrazil();
      response.map((item: ResponseUFBrazilT) =>
        setStates(oldStates => [...oldStates, item.nome]),
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (cepInfo) {
      reset(
        {
          city: cepInfo.localidade,
          district: cepInfo.bairro,
          address: cepInfo.logradouro,
          state: cepInfo.uf,
        },
        {keepDirtyValues: true},
      );
    }
  }, [cepInfo, reset]);

  useEffect(() => {
    if (states.length < 1) {
      getResponseUFBrazil();
    }
  }, [states]);

  const handleNewClientRegister = async () => {
    const realm = await getRealm();

    try {
      realm.write(() => {
        realm.create('Client', {
          _id: uuid.v4(),
          name: getValues().name,
          CNPJ: getValues().CNPJ,
          phone: getValues().phone,
          cep: getValues().CEP,
          state: getValues().state,
          city: getValues().city,
          district: getValues().district,
          address: getValues().address,
          number: getValues().number,
          colorThumb: '#' + Math.floor(Math.random() * 16777215).toString(16),
        });
      });
      setUpdatePage(!updatePage);
      navigation.navigate('Clientes', {updatePage});
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
    }
  };

  return (
    <MainPage>
      <Header title={'Cadastro de clientes'} />
      <FormView showsVerticalScrollIndicator={false}>
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
          mask={CNPJRegex}
          name="CNPJ"
          placeholder="CNPJ"
          error={errors.CNPJ?.message}
          setFocus={() => setFocusInput('CNPJ')}
          focus={focusInput === 'CNPJ'}
        />
        <InputForm
          control={control}
          name="phone"
          placeholder="Telefone"
          mask={phoneRegex}
          error={errors.phone?.message}
          setFocus={() => setFocusInput('Telefone')}
          focus={focusInput === 'Telefone'}
        />
        <InputForm
          control={control}
          name="CEP"
          placeholder="CEP"
          mask={cepRegex}
          error={errors.CEP?.message}
          setFocus={() => setFocusInput('CEP')}
          focus={focusInput === 'CEP'}
          onPressOut={() => getAddress(control._formValues.CEP)}
        />
        <Dropdown
          states={states}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          control={control}
          name="state"
          error={errors.state?.message}
        />
        <InputForm
          control={control}
          name="city"
          placeholder="Cidade"
          error={errors.city?.message}
          setFocus={() => setFocusInput('Cidade')}
          focus={focusInput === 'Cidade'}
        />
        <InputForm
          control={control}
          name="district"
          placeholder="Bairro"
          error={errors.district?.message}
          setFocus={() => setFocusInput('Bairro')}
          focus={focusInput === 'Bairro'}
        />
        <InputForm
          control={control}
          name="address"
          placeholder="Endereço"
          error={errors.address?.message}
          setFocus={() => setFocusInput('Endereço')}
          focus={focusInput === 'Endereço'}
        />
        <InputForm
          control={control}
          name="number"
          placeholder="Numero"
          error={errors.number?.message}
          setFocus={() => setFocusInput('Numero')}
          focus={focusInput === 'Numero'}
        />
        <ButtonView>
          <Button
            title="Salvar"
            onPress={handleSubmit(handleNewClientRegister)}
            marginTop={24}
            size="large"
          />
        </ButtonView>
      </FormView>
    </MainPage>
  );
}
