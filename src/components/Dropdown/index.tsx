import React from 'react';
import {Controller} from 'react-hook-form';
import {Picker} from '@react-native-picker/picker';

import {DropdownType} from '../../types/Dropdown';

import {ErrorText, PickerBox, PickerInput, StateText} from './styles';

export default function Dropdown({
  states,
  control,
  name,
  error,
  fieldTitle,
  selectedItem,
  setSelectedItem,
}: DropdownType) {
  return (
    <>
      <StateText>{fieldTitle}</StateText>
      <PickerBox>
        <Controller
          control={control}
          name={name}
          render={({field: {value, onChange}}) => (
            <PickerInput
              selectedValue={{selectedItem, value}}
              onValueChange={item => {
                setSelectedItem(item);
                onChange(item);
              }}>
              <Picker.Item label="Selecione..." value="" />
              {states.map((item, index) => {
                return <Picker.Item label={item} value={item} key={index} />;
              })}
            </PickerInput>
          )}
        />
      </PickerBox>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
}
