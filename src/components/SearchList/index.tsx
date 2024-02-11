import React from 'react';

import {FlatList} from 'react-native';
import {SearchListT} from '../../types/SearchListT';
import {
  BoxClientView,
  BoxThumbClient,
  Card,
  ClientText,
  CurrencyProductText,
  QtdProductText,
  Thumbnail,
  ThumbnailText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';
import {colors} from '../../mock/colors';
import {useDispatch, useSelector} from 'react-redux';
import {ClientListButton} from '../../types/ClientListButton';
import {addClientDescription} from '../../redux/client/slice';
import Feather from 'react-native-vector-icons/Feather';

export default function SearchList({
  data,
  input,
  clientPage,
  orderPage,
  route,
}: SearchListT) {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const dispatch = useDispatch();
  const client = useSelector((rootReducer: any) => rootReducer.client);

  const onPressClient = ({
    name,
    CNPJ,
    cep,
    phone,
    state,
    city,
    district,
    address,
    number,
  }: ClientListButton) => {
    dispatch(
      addClientDescription({
        name,
        CNPJ,
        cep,
        phone,
        state,
        city,
        district,
        address,
        number,
      }),
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item._id}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) =>
        item.name?.toLowerCase().includes(input.toLowerCase()) && (
          <Card
            onPress={() => {
              navigation.navigate(route);
              onPressClient({
                name: item?.name,
                address: item?.address,
                cep: item?.cep,
                phone: item?.phone,
                city: item?.city,
                CNPJ: item?.CNPJ,
                district: item?.district,
                number: item?.number,
                state: item?.state,
              });
            }}>
            <BoxThumbClient>
              <Thumbnail color={colors[index]}>
                <ThumbnailText>{item?.name[0].toUpperCase()}</ThumbnailText>
              </Thumbnail>
              <BoxClientView>
                <ClientText>{item.name}</ClientText>
                <QtdProductText>
                  {clientPage || orderPage
                    ? item.CNPJ
                    : `Qtd. produtos: ${item.qtdProduct}`}
                </QtdProductText>
              </BoxClientView>
            </BoxThumbClient>
            <CurrencyProductText>
              {!clientPage &&
                !orderPage &&
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.total)}{' '}
              {orderPage &&
                item.CNPJ === client.ClientDescriptionInitialState?.CNPJ && (
                  <Feather name="check" size={16} color={'#006FFD'} />
                )}
            </CurrencyProductText>
          </Card>
        )
      }
    />
  );
}
