import React from 'react';
import {ErrorText, PickerBox, PickerInput, StateText} from './styles';
import {Picker} from '@react-native-picker/picker';
import {DropdownT} from '../../types/DropdownT';
import {Controller} from 'react-hook-form';

export default function Dropdown({states, control, name, error}: DropdownT) {
  return (
    <>
      <StateText>Estado</StateText>
      <PickerBox>
        <Controller
          control={control}
          name={name}
          render={({field: {value, onChange}}) => (
            <PickerInput selectedValue={value} onValueChange={onChange}>
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
