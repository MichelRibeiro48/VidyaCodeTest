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

export default function SearchList({
  data,
  input,
  clientPage,
  route,
}: SearchListT) {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) =>
        item.name.toLowerCase().includes(input.toLowerCase()) && (
          <Card onPress={() => navigation.navigate(route)}>
            <BoxThumbClient>
              <Thumbnail color={colors[index]}>
                <ThumbnailText>{item.thumbnail}</ThumbnailText>
              </Thumbnail>
              <BoxClientView>
                <ClientText>{item.name}</ClientText>
                <QtdProductText>
                  {clientPage ? item.CNPJ : `Qtd. produtos: ${item.qtdProduct}`}
                </QtdProductText>
              </BoxClientView>
            </BoxThumbClient>
            <CurrencyProductText>
              {!clientPage &&
                new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(item.total)}
            </CurrencyProductText>
          </Card>
        )
      }
    />
  );
}
