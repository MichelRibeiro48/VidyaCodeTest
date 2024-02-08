import React from 'react';
import {
  BackButton,
  BoxInfoView,
  Header,
  HeaderText,
  MainPage,
  TitleInfoText,
  ValueInfoText,
} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {mockData} from '../../mock';
import {useNavigation} from '@react-navigation/native';

export default function ClientDescriptionPage() {
  const navigation = useNavigation();

  return (
    <MainPage>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Ionicons name={'chevron-back'} size={24} color={'#006FFD'} />
        </BackButton>
        <HeaderText>{mockData[0].name}</HeaderText>
      </Header>
      <BoxInfoView>
        <TitleInfoText initialInfo>CNPJ</TitleInfoText>
        <ValueInfoText>{mockData[0].CNPJ}</ValueInfoText>
        <TitleInfoText>Telefone</TitleInfoText>
        <ValueInfoText>{mockData[0].phone}</ValueInfoText>
        <TitleInfoText>CEP</TitleInfoText>
        <ValueInfoText>{mockData[0].cep}</ValueInfoText>
        <TitleInfoText>Estado</TitleInfoText>
        <ValueInfoText>{mockData[0].state}</ValueInfoText>
        <TitleInfoText>Cidade</TitleInfoText>
        <ValueInfoText>{mockData[0].city}</ValueInfoText>
        <TitleInfoText>Bairro</TitleInfoText>
        <ValueInfoText>{mockData[0].district}</ValueInfoText>
        <TitleInfoText>Endereço</TitleInfoText>
        <ValueInfoText>{mockData[0].address}</ValueInfoText>
        <TitleInfoText>Número</TitleInfoText>
        <ValueInfoText>{mockData[0].number}</ValueInfoText>
      </BoxInfoView>
    </MainPage>
  );
}
