import React from 'react';
import {useSelector} from 'react-redux';
import {
  CloseButton,
  CloseIcon,
  MainPage,
  ProductImage,
  ProductInfoDescriptionText,
  ProductInfoPriceText,
  ProductInfoTitleText,
  ProductInfoView,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';
export default function ProductDetails() {
  const product = useSelector((rootReducer: any) => rootReducer.product);
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();

  return (
    <MainPage>
      <CloseButton onPress={() => navigation.goBack()}>
        <CloseIcon name={'close'} size={48} color={'black'} />
      </CloseButton>
      <ProductImage source={{uri: product.productDetailedInitialState.image}} />
      <ProductInfoView>
        <ProductInfoTitleText>
          {product.productDetailedInitialState.name}
        </ProductInfoTitleText>
        <ProductInfoPriceText>
          {product.productDetailedInitialState.price}
        </ProductInfoPriceText>
        <ProductInfoDescriptionText>
          {product.productDetailedInitialState.description}
        </ProductInfoDescriptionText>
      </ProductInfoView>
    </MainPage>
  );
}
