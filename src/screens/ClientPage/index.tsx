import React, {useState} from 'react';
import {MainPage} from './styles';
import SearchList from '../../components/SearchList';
import {mockData} from '../../mock';
import Input from '../../components/Input';

export default function ClientPage() {
  const [search, setSearch] = useState('');
  return (
    <MainPage>
      <Input value={search} onChangeText={value => setSearch(value)} />
      <SearchList data={mockData} input={search} clientPage />
    </MainPage>
  );
}
