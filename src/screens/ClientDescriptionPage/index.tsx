import React from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';

import {useSelector} from 'react-redux';

import Header from '../../components/Header';

import {ClientType} from '../../types/client';
import {clientSelectorType} from '../../types/clientSelector';

import {BoxInfoView, MainPage, TitleInfoText, ValueInfoText} from './styles';

export default function ClientDescriptionPage() {
  const client = useSelector(
    (rootReducer: clientSelectorType) => rootReducer.client,
  );
  const route: RouteProp<{params: {item: any}}, 'params'> = useRoute();
  const newClient = client.ClientDescriptionInitialState.filter(
    (selectedClient: ClientType) =>
      selectedClient.CNPJ === route.params.item.CNPJ,
  );

  return (
    <MainPage>
      <Header title={newClient[0].name} />
      <BoxInfoView>
        <TitleInfoText initialInfo>CNPJ</TitleInfoText>
        <ValueInfoText>{newClient[0].CNPJ}</ValueInfoText>
        <TitleInfoText>Telefone</TitleInfoText>
        <ValueInfoText>{newClient[0].phone}</ValueInfoText>
        <TitleInfoText>CEP</TitleInfoText>
        <ValueInfoText>{newClient[0].cep}</ValueInfoText>
        <TitleInfoText>Estado</TitleInfoText>
        <ValueInfoText>{newClient[0].state}</ValueInfoText>
        <TitleInfoText>Cidade</TitleInfoText>
        <ValueInfoText>{newClient[0].city}</ValueInfoText>
        <TitleInfoText>Bairro</TitleInfoText>
        <ValueInfoText>{newClient[0].district}</ValueInfoText>
        <TitleInfoText>Endereço</TitleInfoText>
        <ValueInfoText>{newClient[0].address}</ValueInfoText>
        <TitleInfoText>Número</TitleInfoText>
        <ValueInfoText>{newClient[0].number}</ValueInfoText>
      </BoxInfoView>
    </MainPage>
  );
}
