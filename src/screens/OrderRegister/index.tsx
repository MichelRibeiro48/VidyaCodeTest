import React from 'react';
import {
  MainPage,
  SelectClientBox,
  SelectClientTitle,
  SelectedClientCNPJCard,
  SelectedClientCard,
  SelectedClientInfoCard,
  SelectedClientNameCard,
} from './styles';
import Header from '../../components/Header';
import Feather from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';

export default function OrderRegister() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  return (
    <MainPage>
      <Header title="Cadastro de pedido" />
      <SelectClientBox>
        <SelectClientTitle>Cliente Selecionado</SelectClientTitle>
        <SelectedClientCard
          onPress={() => navigation.navigate('OrderSelectClientPage')}>
          <SelectedClientInfoCard>
            <SelectedClientNameCard>Imperio dos sonhos</SelectedClientNameCard>
            <SelectedClientCNPJCard>00.000.000/0000-00</SelectedClientCNPJCard>
          </SelectedClientInfoCard>
          <Feather name="check" size={12} color={'#006FFD'} />
        </SelectedClientCard>
      </SelectClientBox>
    </MainPage>
  );
}
