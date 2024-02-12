import React, {useEffect, useState} from 'react';

import {FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/FontAwesome5';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {getRealm} from '../../databases/realm';

import {useDispatch, useSelector} from 'react-redux';
import {
  addProductInSlice,
  decreaseProductQuantity,
} from '../../redux/client/slice';

import {RoutesT} from '../../routes/types/RoutesT';

import Header from '../../components/Header';
import Button from '../../components/Button';

import {OrderRegisterData} from '../../types/OrderRegisterData';
import {ClientType} from '../../types/client';
import {decrementQuantityProps} from '../../types/decrementQuantityProps';
import {ProductPropsType} from '../../types/productProps';
import {IncrementProductQuantityType} from '../../types/incrementQuantityProps';

import {
  ButtonMinus,
  ButtonPlus,
  Card,
  CardButtonBox,
  CardInfo,
  CardInfoBox,
  CardInfoCod,
  CardInfoTitle,
  Icon,
  ImageCard,
  LineSeparatorView,
  MainPage,
  NumberQtdProductText,
  ProductListTitle,
  ProductPriceText,
  ProductTotalPriceText,
  ProductTotalText,
  SelectClientBox,
  SelectClientTitle,
  SelectedClientCNPJCard,
  SelectedClientCard,
  SelectedClientInfoCard,
  SelectedClientNameCard,
  TotalInfoBox,
  TotalInfoView,
} from './styles';

export default function OrderRegister() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const dispatch = useDispatch();
  const client = useSelector((rootReducer: any) => rootReducer.client);
  const [totalPrice, setTotalPrice] = useState(0);
  const [updatePage, setUpdatePage] = useState(false);
  const route: RouteProp<{params: {item: any}}, 'params'> = useRoute();

  const newClient: ClientType[] = client.ClientDescriptionInitialState.filter(
    (selectedClient: ClientType) =>
      selectedClient.CNPJ === route.params.item.CNPJ,
  );

  const [products, setProducts] = useState<OrderRegisterData[]>([]);

  const fetchProducts = async () => {
    const realm = await getRealm();
    try {
      const response = realm.objects<OrderRegisterData[]>('Product').toJSON();
      setProducts(response);
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
    }
  };

  const getTotalPrice = ({product}: ProductPropsType) => {
    const currency = Number(product.price.replace('R$ ', '').replace(',', '.'));
    setTotalPrice(totalPrice + currency);
  };

  const handleIncrementQuantity = ({
    product,
    newClientProp,
    totalPriceProp,
  }: IncrementProductQuantityType) => {
    dispatch(addProductInSlice({product, newClientProp, totalPriceProp}));
  };
  const handleDecrementQuantity = ({
    product,
    newClientProp,
  }: decrementQuantityProps) => {
    dispatch(decreaseProductQuantity({product, newClientProp}));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainPage>
      <Header title="Cadastro de pedido" />
      <SelectClientBox>
        <SelectClientTitle>Cliente Selecionado</SelectClientTitle>
        <SelectedClientCard
          onPress={() => navigation.navigate('OrderSelectClientPage')}>
          <SelectedClientInfoCard>
            <SelectedClientNameCard>
              {newClient[0]?.name}
            </SelectedClientNameCard>
            <SelectedClientCNPJCard>
              {newClient[0]?.CNPJ}
            </SelectedClientCNPJCard>
          </SelectedClientInfoCard>
          <Feather name="check" size={12} color={'#006FFD'} />
        </SelectedClientCard>
      </SelectClientBox>
      <ProductListTitle>Produtos</ProductListTitle>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <>
            <Card>
              <ImageCard
                source={
                  item?.uriImage
                    ? {uri: item?.uriImage}
                    : require('../../assets/images/ImageProduct.png')
                }
              />
              <CardInfo>
                <CardInfoBox>
                  <CardInfoTitle>{item?.name}</CardInfoTitle>
                  <CardInfoCod>Cód. {item.id?.substring(0, 5)}</CardInfoCod>
                </CardInfoBox>
                <CardButtonBox>
                  <ButtonMinus
                    onPress={() => {
                      handleDecrementQuantity({
                        product: item,
                        newClientProp: newClient,
                      });
                    }}>
                    <Icon name="minus" size={10} color={'#006FFD'} />
                  </ButtonMinus>
                  <NumberQtdProductText>
                    {newClient[0].cart[index]?.quantity || 0}
                  </NumberQtdProductText>
                  <ButtonPlus
                    onPress={() => {
                      handleIncrementQuantity({
                        product: item,
                        newClientProp: newClient,
                        totalPriceProp: item.price,
                      });
                      getTotalPrice({
                        product: item,
                      });
                    }}>
                    <Icon name="plus" size={10} color={'#006FFD'} />
                  </ButtonPlus>
                  <ProductPriceText>{item?.price}</ProductPriceText>
                </CardButtonBox>
              </CardInfo>
            </Card>
            <LineSeparatorView />
          </>
        )}
      />
      <TotalInfoBox>
        <TotalInfoView>
          <ProductTotalText>Total</ProductTotalText>
          <ProductTotalPriceText>{`R$ ${newClient[0].cart.reduce(
            (total, product) => total + product.totalPrice,
            0,
          )}`}</ProductTotalPriceText>
        </TotalInfoView>
      </TotalInfoBox>
      <Button
        title="Salvar"
        onPress={() => {
          setUpdatePage(!updatePage);
          navigation.navigate('Pedidos', {updatePage});
        }}
        size="large"
        marginBottom={24}
      />
    </MainPage>
  );
}
