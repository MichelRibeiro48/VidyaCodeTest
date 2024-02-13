import React, {useEffect, useState} from 'react';

import {ActivityIndicator} from 'react-native';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

import {getRealm} from '../../databases/realm';

import {RoutesT} from '../../routes/types/RoutesT';

import ProductList from '../../components/ProductList';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {MainPage} from './styles';

export default function ProductsPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const route: RouteProp<{params: {updatePage: boolean}}, 'params'> =
    useRoute();

  const [searchProduct, setSearchProduct] = useState('');
  const [products, setProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    const realm = await getRealm();

    try {
      const response = realm.objects('Product').toJSON();
      setProducts(response);
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [route.params?.updatePage]);

  return (
    <MainPage>
      <Input
        value={searchProduct}
        onChangeText={value => setSearchProduct(value)}
        icon
        marginBottom={24}
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ProductList
          data={products}
          input={searchProduct}
          route={'ProductDetails'}
          onRefresh={fetchProducts}
          refreshing={isLoading}
        />
      )}
      <Button
        title="Cadastrar Produto"
        onPress={() => navigation.navigate('ProductsRegisterPage')}
        size="large"
      />
    </MainPage>
  );
}
