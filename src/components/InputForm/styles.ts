import MaskInput from 'react-native-mask-input';
import styled from 'styled-components/native';

export const BoxInput = styled.View<{
  focus: boolean;
  isDescription: boolean | undefined;
}>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${props => (props.isDescription ? 94 : 48)}px;
  align-items: ${props => (props.isDescription ? 'flex-start' : 'center')};
  border-radius: 12px;
  padding-left: 16px;
  border-width: 1px;
  border-color: ${props => (props.focus ? '#006FFD' : '#C5C6CC')};
`;

export const TitleBoxText = styled.Text`
  font-family: 'Inter-Bold';
  color: #2f3036;
  margin-top: 16px;
`;

export const InputArea = styled(MaskInput)`
  margin-left: 4px;
  width: 90%;
`;

export const ErrorText = styled.Text`
  color: red;
  padding-left: 12px;
`;
