import {Picker} from '@react-native-picker/picker';
import styled from 'styled-components/native';

export const PickerInput = styled(Picker)`
  height: 50px;
  font-family: 'Inter-Regular';
`;

export const PickerBox = styled.View`
  border-width: 1px;
  border-radius: 12px;
  border-color: #c5c6cc;
  justify-content: center;
`;

export const StateText = styled.Text`
  margin-top: 16px;
  font-family: 'Inter-Bold';
  color: #2f3036;
`;

export const ErrorText = styled.Text`
  color: red;
  padding-left: 12px;
`;
