import React from 'react';
import {BoxInfoView, MainPage, TitleInfoText, ValueInfoText} from './styles';
import {mockData} from '../../mock';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';

export default function ClientDescriptionPage() {
  const client = useSelector((rootReducer: any) => rootReducer.client);
  return (
    <MainPage>
      <Header title={mockData[0].name} />
      <BoxInfoView>
        <TitleInfoText initialInfo>CNPJ</TitleInfoText>
        <ValueInfoText>
          {client.ClientDescriptionInitialState.CNPJ}
        </ValueInfoText>
        <TitleInfoText>Telefone</TitleInfoText>
        <ValueInfoText>
          {client.ClientDescriptionInitialState.phone}
        </ValueInfoText>
        <TitleInfoText>CEP</TitleInfoText>
        <ValueInfoText>
          {client.ClientDescriptionInitialState.cep}
        </ValueInfoText>
        <TitleInfoText>Estado</TitleInfoText>
        <ValueInfoText>
          {client.ClientDescriptionInitialState.state}
        </ValueInfoText>
        <TitleInfoText>Cidade</TitleInfoText>
        <ValueInfoText>
          {client.ClientDescriptionInitialState.city}
        </ValueInfoText>
        <TitleInfoText>Bairro</TitleInfoText>
        <ValueInfoText>
          {client.ClientDescriptionInitialState.district}
        </ValueInfoText>
        <TitleInfoText>Endereço</TitleInfoText>
        <ValueInfoText>
          {client.ClientDescriptionInitialState.address}
        </ValueInfoText>
        <TitleInfoText>Número</TitleInfoText>
        <ValueInfoText>
          {client.ClientDescriptionInitialState.number}
        </ValueInfoText>
      </BoxInfoView>
    </MainPage>
  );
}
