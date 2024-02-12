import React from 'react';
import {Controller} from 'react-hook-form';

import {InputFormType} from '../../types/InputForm';

import {BoxInput, ErrorText, InputArea, TitleBoxText} from './styles';

export default function InputForm({
  control,
  name,
  placeholder,
  error,
  focus,
  setFocus,
  isDescription,
  onPressOut,
  mask,
}: InputFormType) {
  return (
    <>
      <TitleBoxText>{placeholder}</TitleBoxText>
      <BoxInput focus={focus} isDescription={isDescription}>
        <Controller
          control={control}
          name={name}
          defaultValue={''}
          render={({field: {value, onChange}}) => (
            <InputArea
              mask={mask}
              onSubmitEditing={onPressOut}
              placeholder={placeholder}
              value={value}
              onChangeText={onChange}
              onFocus={setFocus}
              multiline={isDescription}
            />
          )}
        />
      </BoxInput>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
}
