import React from 'react';

import {BoxInput, ErrorText, TitleBoxText} from './styles';
import {Controller} from 'react-hook-form';
import {InputFormT} from '../../types/InputFormT';
import MaskInput from 'react-native-mask-input';

export default function InputForm({
  control,
  name,
  placeholder,
  error,
  focus,
  onPressOut,
  mask,
}: InputFormT) {
  return (
    <>
      <TitleBoxText>{placeholder}</TitleBoxText>
      <BoxInput focus={focus}>
        <Controller
          control={control}
          name={name}
          defaultValue={''}
          render={({field: {value, onChange}}) => (
            <MaskInput
              mask={mask}
              onSubmitEditing={onPressOut}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
      </BoxInput>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
}
