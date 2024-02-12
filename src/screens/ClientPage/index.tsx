import React, {useEffect, useState} from 'react';
import {MainPage} from './styles';
import SearchList from '../../components/SearchList';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';
import {getRealm} from '../../databases/realm';
import {useSelector} from 'react-redux';

export default function ClientPage() {
  const [search, setSearch] = useState('');
  const [clients, setClients] = useState([{}]);
  const route: RouteProp<{params: {updatePage: boolean}}, 'params'> =
    useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  const clientSelection = useSelector((rootReducer: any) => rootReducer.client);
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
      <Input value={search} onChangeText={value => setSearch(value)} />
      <SearchList
        data={clients}
        input={search}
        clientPage
        route={'ClientDescription'}
        params={clientSelection.ClientDescriptionInitialState.CNPJ}
      />
      <Button
        title="Novo cliente"
        onPress={() => navigation.navigate('ClientRegister')}
        size="large"
      />
    </MainPage>
  );
}
