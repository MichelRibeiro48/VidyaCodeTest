import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {HeaderType} from '../../types/Header';

import {HeaderView, BackButton, HeaderText} from './styles';

export default function Header({title}: HeaderType) {
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
