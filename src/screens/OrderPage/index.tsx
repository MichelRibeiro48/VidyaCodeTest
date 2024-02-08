import React, {useState} from 'react';

import Input from '../../components/Input';

import {MainPage} from './styles';
import SearchList from '../../components/SearchList';
import {mockData} from '../../mock';

export default function OrderPage() {
  const [search, setSearch] = useState('');
  return (
    <MainPage>
      <Input value={search} onChangeText={value => setSearch(value)} />
      <SearchList data={mockData} input={search} />
    </MainPage>
  );
}
