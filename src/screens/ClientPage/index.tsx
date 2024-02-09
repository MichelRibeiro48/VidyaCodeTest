import React, {useState} from 'react';
import {MainPage} from './styles';
import SearchList from '../../components/SearchList';
import {mockData} from '../../mock';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RoutesT} from '../../routes/types/RoutesT';

export default function ClientPage() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RoutesT>>();
  return (
    <MainPage>
      <Input value={search} onChangeText={value => setSearch(value)} />
      <SearchList
        data={mockData}
        input={search}
        clientPage
        route={'ClientDescription'}
      />
      <Button
        title="Novo cliente"
        onPress={() => navigation.navigate('ClientRegister')}
        size="large"
      />
    </MainPage>
  );
}
