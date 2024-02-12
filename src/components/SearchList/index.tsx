import React from 'react';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {FlatList, RefreshControl} from 'react-native';

import {addClientDescription} from '../../redux/client/slice';
import {useDispatch, useSelector} from 'react-redux';

import {CartType} from '../../types/cart';
import {RoutesT} from '../../routes/types/RoutesT';
import {SearchListType} from '../../types/SearchListT';
import {ClientListButton} from '../../types/ClientListButton';

import {colors} from '../../mock/colors';

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

export default function SearchList({
  data,
  input,
  clientPage,
  orderPage,
  route,
  onRefresh,
  refreshing,
}: SearchListType) {
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
    cart,
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
        cart: cart,
      }),
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item?.CNPJ}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) =>
        item.name?.toLowerCase().includes(input.toLowerCase()) && (
          <Card
            onPress={() => {
              navigation.navigate(route, {item});
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
                cart: item?.cart || [],
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
                    : `Qtd. produtos: ${
                        client.ClientDescriptionInitialState[
                          index
                        ]?.cart.reduce(
                          (total: number, cartItem: CartType) =>
                            (total += cartItem.quantity),
                          0,
                        ) || 0
                      }`}
                </QtdProductText>
              </BoxClientView>
            </BoxThumbClient>
            <CurrencyProductText>
              {!clientPage &&
                !orderPage &&
                `R$ ${
                  client.ClientDescriptionInitialState[index]?.cart.reduce(
                    (total: number, cartItem: CartType) =>
                      (total += cartItem.totalPrice),
                    0,
                  ) || 0
                }`}
            </CurrencyProductText>
          </Card>
        )
      }
    />
  );
}
