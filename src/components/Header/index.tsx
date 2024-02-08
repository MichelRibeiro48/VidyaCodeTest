import React from 'react';
import {HeaderView, BackButton, HeaderText} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {HeaderT} from '../../types/HeaderT';

export default function Header({title}: HeaderT) {
  const navigation = useNavigation();
  return (
    <HeaderView>
      <BackButton onPress={() => navigation.goBack()}>
        <Ionicons name={'chevron-back'} size={24} color={'#006FFD'} />
      </BackButton>
      <HeaderText>{title}</HeaderText>
    </HeaderView>
  );
}
