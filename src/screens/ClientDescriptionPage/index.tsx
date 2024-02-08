import React from 'react';
import {BoxInfoView, MainPage, TitleInfoText, ValueInfoText} from './styles';
import {mockData} from '../../mock';
import Header from '../../components/Header';

export default function ClientDescriptionPage() {
  return (
    <MainPage>
      <Header title={mockData[0].name} />
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
