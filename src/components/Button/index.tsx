import React from 'react';
import {BoxButton, ButtonText} from './styles';
import {ButtonT} from '../../types/ButtonT';

export default function Button({title, onPress, marginTop}: ButtonT) {
  return (
    <BoxButton onPress={onPress} marginTop={marginTop}>
      <ButtonText>{title}</ButtonText>
    </BoxButton>
  );
}
