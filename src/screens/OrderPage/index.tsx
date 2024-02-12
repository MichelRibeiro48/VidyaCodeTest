import React, {useEffect, useState} from 'react';

import {getRealm} from '../../databases/realm';

import Input from '../../components/Input';
import SearchList from '../../components/SearchList';

import {MainPage} from './styles';

export default function OrderPage() {
  const [search, setSearch] = useState('');
  const [clients, setClients] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const fetchClients = async () => {
    setRefreshing(true);
    const realm = await getRealm();
    try {
      const responseClient = realm.objects('Client').toJSON();
      setClients(responseClient);
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);
  return (
    <MainPage>
      <Input value={search} onChangeText={value => setSearch(value)} icon />
      <SearchList
        data={clients}
        input={search}
        route={'OrderRegister'}
        clientPage={false}
        orderPage={false}
        onRefresh={fetchClients}
        refreshing={refreshing}
      />
    </MainPage>
  );
}
