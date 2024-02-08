import styled from 'styled-components/native';

export const BoxButton = styled.TouchableOpacity<{
  marginTop?: number;
}>`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background-color: #006ffd;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.marginTop}px;
`;

export const ButtonText = styled.Text`
  color: white;
`;
