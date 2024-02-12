import React, {useEffect, useState} from 'react';

import Input from '../../components/Input';

import {MainPage} from './styles';
import SearchList from '../../components/SearchList';
import {getRealm} from '../../databases/realm';
import {useSelector} from 'react-redux';

export default function OrderPage() {
  const [search, setSearch] = useState('');
  const [clients, setClients] = useState({});
  const client = useSelector((rootReducer: any) => rootReducer.client);

  const fetchClients = async () => {
    const realm = await getRealm();
    try {
      const responseClient = realm.objects('Client').toJSON();
      setClients(responseClient);
    } catch (e) {
      console.log(e);
    } finally {
      realm.close();
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
      />
    </MainPage>
  );
}
