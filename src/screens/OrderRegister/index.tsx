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
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';
import {useSelector} from 'react-redux';
import {getRealm} from '../../databases/realm';
import {FlatList} from 'react-native';
import Button from '../../components/Button';
import {ProductQtd} from '../../types/ProductQtd';
import {OrderRegisterData} from '../../types/OrderRegisterData';

export default function OrderRegister() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const client = useSelector((rootReducer: any) => rootReducer.client);
  const [productQtd, setProductQtd] = useState<ProductQtd[]>([]);
  const [products, setProducts] = useState<OrderRegisterData[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const onHandlePress = () => {
    console.log('Teste');
  };
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

  const onHandlePlusPress = (id, price) => {
    const existingItem = productQtd?.find(item => item.id === id);
    const newPrice = price.replace('R$ ', '').replace(',', '.');

    if (existingItem) {
      const updatedCartItems = productQtd.map(item => {
        if (item.id === id) {
          setTotalPrice(item.quantity * totalPrice);
          console.log(totalPrice);
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: (item.quantity + 1) * Number(newPrice),
          };
        }

        return item;
      });

      setProductQtd(updatedCartItems);
    } else {
      setProductQtd([
        ...productQtd,
        {id, quantity: 1, totalPrice: Number(newPrice)},
      ]);
    }
  };

  const onHandleMinusPress = (id, price) => {
    const existingItem = productQtd?.find(item => item.id === id);
    const newPrice = price.replace('R$ ', '').replace(',', '.');

    if (existingItem) {
      const updatedCartItems = productQtd.map(item => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: Number(newPrice) * item.quantity - 1,
          };
        }

        return item;
      });
      setProductQtd(updatedCartItems);
    } else {
      setProductQtd([
        ...productQtd,
        {id, quantity: 1, totalPrice: Number(newPrice)},
      ]);
    }
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
              {client.ClientDescriptionInitialState.name}
            </SelectedClientNameCard>
            <SelectedClientCNPJCard>
              {client.ClientDescriptionInitialState.CNPJ}
            </SelectedClientCNPJCard>
          </SelectedClientInfoCard>
          <Feather name="check" size={12} color={'#006FFD'} />
        </SelectedClientCard>
      </SelectClientBox>
      <ProductListTitle>Produtos</ProductListTitle>
      <FlatList
        data={products}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => (
          <>
            <Card>
              <ImageCard
                source={
                  item?.uriImage
                    ? {uri: item?.uriImage}
                    : require('../../assets/images/ImageProduct.png')
                }
                style={{}}
              />
              <CardInfo>
                <CardInfoBox>
                  <CardInfoTitle>{item?.name}</CardInfoTitle>
                  <CardInfoCod>Cód. {item._id?.substring(0, 5)}</CardInfoCod>
                </CardInfoBox>
                <CardButtonBox>
                  <ButtonMinus
                    onPress={() => onHandleMinusPress(item?._id, item?.price)}>
                    <Icon name="minus" size={10} color={'#006FFD'} />
                  </ButtonMinus>
                  <NumberQtdProductText>
                    {productQtd[index]?.quantity || 0}
                  </NumberQtdProductText>
                  <ButtonPlus
                    onPress={() => onHandlePlusPress(item?._id, item?.price)}>
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
          <ProductTotalPriceText>
            R$ {totalPrice.toFixed(2)}
          </ProductTotalPriceText>
        </TotalInfoView>
      </TotalInfoBox>
      <Button
        title="Salvar"
        onPress={onHandlePress}
        size="large"
        marginBottom={24}
      />
    </MainPage>
  );
}
