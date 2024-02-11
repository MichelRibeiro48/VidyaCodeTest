import React from 'react';
import {BoxButton, ButtonText} from './styles';
import {ButtonT} from '../../types/ButtonT';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Button({
  title,
  onPress,
  marginTop,
  size,
  icon,
  marginBottom,
}: ButtonT) {
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
