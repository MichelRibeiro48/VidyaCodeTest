import React, {useEffect, useState} from 'react';

import Input from '../../components/Input';

import {MainPage} from './styles';
import SearchList from '../../components/SearchList';
import {getRealm} from '../../databases/realm';

export default function OrderPage() {
  const [search, setSearch] = useState('');
  const [clients, setClients] = useState({});
  const [products, setProducts] = useState({});
  const fetchClients = async () => {
    const realm = await getRealm();
    try {
      const responseClient = realm.objects('Client').toJSON();
      const responseProduct = realm.objects('Product').toJSON();
      setClients(responseClient);
      setProducts(responseProduct);
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
