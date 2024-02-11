import React, {useEffect, useState} from 'react';
import {MainPage} from './styles';
import Input from '../../components/Input';
import {getRealm} from '../../databases/realm';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import SearchList from '../../components/SearchList';
import Button from '../../components/Button';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';
import Header from '../../components/Header';

export default function OrderSelectClientPage() {
  const [clients, setClients] = useState([{}]);
  const [search, setSearch] = useState('');
  const route: RouteProp<{params: {updatePage: boolean}}, 'params'> =
    useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const fetchClients = async () => {
    const realm = await getRealm();

    try {
      const response = realm.objects('Client').toJSON();
      setClients(response);
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
    }
  };
  useEffect(() => {
    fetchClients();
  }, [route.params?.updatePage]);
  return (
    <MainPage>
      <Header title="Selecione um cliente" />
      <Input value={search} onChangeText={value => setSearch(value)} />
      <SearchList
        data={clients}
        input={search}
        orderPage
        route={'OrderRegister'}
      />
      <Button
        title="Salvar"
        onPress={() => navigation.navigate('OrderRegister')}
        size="large"
        marginBottom={25}
      />
    </MainPage>
  );
}
