import React, {useEffect, useState} from 'react';
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
import Header from '../../components/Header';
import Feather from 'react-native-vector-icons/FontAwesome5';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';
import {useDispatch, useSelector} from 'react-redux';
import {getRealm} from '../../databases/realm';
import {FlatList} from 'react-native';
import Button from '../../components/Button';
import {ProductQtd} from '../../types/ProductQtd';
import {OrderRegisterData} from '../../types/OrderRegisterData';
import {
  addProductInSlice,
  decreaseProductQuantity,
} from '../../redux/client/slice';

export default function OrderRegister() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const dispatch = useDispatch();
  const client = useSelector((rootReducer: any) => rootReducer.client);
  const cart = useSelector((rootReducer: any) => rootReducer.cart);
  const route: RouteProp<{params: {item: any}}, 'params'> = useRoute();

  const newClient = client.ClientDescriptionInitialState.filter(
    client => client.CNPJ === route.params.item.CNPJ,
  );

  console.log(client.ClientDescriptionInitialState.cart);

  const [productQtd, setProductQtd] = useState<ProductQtd[]>([]);
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
  const handleIncrementQuantity = ({product, newClient}) => {
    dispatch(addProductInSlice({product, newClient}));
  };
  const handleDecrementQuantity = productId => {
    dispatch(decreaseProductQuantity({productId}));
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
                    onPress={() => handleDecrementQuantity(item?.id)}>
                    <Icon name="minus" size={10} color={'#006FFD'} />
                  </ButtonMinus>
                  <NumberQtdProductText>
                    {newClient[0].cart[index]?.quantity || 0}
                  </NumberQtdProductText>
                  <ButtonPlus
                    onPress={() =>
                      handleIncrementQuantity({product: item, newClient})
                    }>
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
          <ProductTotalPriceText>R$ 0</ProductTotalPriceText>
        </TotalInfoView>
      </TotalInfoBox>
      <Button
        title="Salvar"
        onPress={() => console.log('teste')}
        size="large"
        marginBottom={24}
      />
    </MainPage>
  );
}
