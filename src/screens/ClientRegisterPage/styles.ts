import {Picker} from '@react-native-picker/picker';
import styled from 'styled-components/native';

export const MainPage = styled.View`
  height: 100%;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: white;
`;

export const ButtonView = styled.View`
  padding-bottom: 25px;
`;
export const FormView = styled.ScrollView``;

export const PickerInput = styled(Picker)`
  height: 48px;
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
