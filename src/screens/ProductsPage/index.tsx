import React, {useEffect, useState} from 'react';
import Button from '../../components/Button';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RoutesT} from '../../routes/types/RoutesT';
import {getRealm} from '../../databases/realm';
import {MainPage} from './styles';
import ProductList from '../../components/ProductList';
import Input from '../../components/Input';
import {ActivityIndicator} from 'react-native';

export default function ProductsPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const route: RouteProp<{params: {updatePage: boolean}}, 'params'> =
    useRoute();

  const [searchProduct, setSearchProduct] = useState('');
  const [products, setProducts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchProducts = async () => {
    const realm = await getRealm();

    try {
      setIsLoading(true);
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
