import styled from 'styled-components/native';

export const BoxInput = styled.View<{focus: boolean}>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 44px;
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

export const InputArea = styled.TextInput`
  margin-left: 4px;
  width: 90%;
`;

export const ErrorText = styled.Text`
  color: red;
  padding-left: 12px;
`;
