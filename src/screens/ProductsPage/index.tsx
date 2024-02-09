import React, {useEffect} from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RoutesT} from '../../routes/types/RoutesT';
import {getRealm} from '../../databases/realm';

export default function ProductsPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const fetchProducts = async () => {
    const realm = await getRealm();

    try {
      const response = realm.objects('Product');
      console.log(response);
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <View>
      <Button
        title="Cadastrar Produto"
        onPress={() => navigation.navigate('ProductsRegisterPage')}
        size="large"
      />
    </View>
  );
}
