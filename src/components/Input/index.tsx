import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {BoxInput, InputArea} from './styles';
import {InputT} from '../../types/InputT';

export default function Input({value, onChangeText, marginBottom}: InputT) {
  return (
    <BoxInput marginBottom={marginBottom}>
      <AntDesign name="search1" size={16} />
      <InputArea
        placeholder="Pesquisar"
        value={value}
        onChangeText={onChangeText}
      />
    </BoxInput>
  );
}
