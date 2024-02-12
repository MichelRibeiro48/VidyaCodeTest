import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import {InputType} from '../../types/Input';

import {BoxInput, InputArea} from './styles';

export default function Input({value, onChangeText, marginBottom}: InputType) {
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
