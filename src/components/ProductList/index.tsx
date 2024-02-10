import React from 'react';
import {
  CardProduct,
  ImageProduct,
  ProductInfoView,
  ProductTitle,
  ProductValue,
} from './styles';
import {ProductListProp} from '../../types/ProductListProp';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';
import {useDispatch} from 'react-redux';
import {addProductDetailed} from '../../redux/product/slice';
import {ProductListButton} from '../../types/ProductListOnPress';
export default function ProductList({data, input, route}: ProductListProp) {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const dispatch = useDispatch();

  const onPressProduct = ({
    name,
    price,
    description,
    image,
  }: ProductListButton) => {
    dispatch(addProductDetailed({name, price, description, image}));
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item._id}
      renderItem={({item}) =>
        item.name?.toLowerCase().includes(input.toLowerCase()) && (
          <CardProduct
            onPress={() => {
              navigation.navigate('ProductDetails');
              onPressProduct({
                name: item?.name,
                price: item?.price,
                image: item?.uriImage,
                description: item?.description,
              });
            }}>
            <ImageProduct source={{uri: item?.uriImage}} />
            <ProductInfoView>
              <ProductTitle>{item?.name}</ProductTitle>
              <ProductValue>{item?.price}</ProductValue>
            </ProductInfoView>
          </CardProduct>
        )
      }
    />
  );
}
