import React from 'react';
import {View} from 'react-native';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RoutesT} from '../../routes/types/RoutesT';

export default function ProductsPage() {
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
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
