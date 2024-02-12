import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ButtonType} from '../../types/ButtonT';

import {BoxButton, ButtonText} from './styles';

export default function Button({
  title,
  onPress,
  marginTop,
  size,
  icon,
  marginBottom,
}: ButtonType) {
  return (
    <BoxButton
      onPress={onPress}
      marginTop={marginTop}
      size={size}
      marginBottom={marginBottom}>
      {icon && <Icon name={icon} size={24} color={'white'} />}
      <ButtonText icon={size === 'small'}>{title}</ButtonText>
    </BoxButton>
  );
}
