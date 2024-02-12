import React from 'react';
import {BoxInfoView, MainPage, TitleInfoText, ValueInfoText} from './styles';
import {mockData} from '../../mock';
import Header from '../../components/Header';
import {useSelector} from 'react-redux';
import {clientSelector} from '../../types/clientSelector';
import {RouteProp, useRoute} from '@react-navigation/native';

export default function ClientDescriptionPage() {
  const client = useSelector(
    (rootReducer: clientSelector) => rootReducer.client,
  );
  const route: RouteProp<{params: {CNPJ: string}}, 'params'> = useRoute();

  return (
    <MainPage>
      <Header title={client.ClientDescriptionInitialState.name} />
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
