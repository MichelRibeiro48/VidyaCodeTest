import styled from 'styled-components/native';

export const BoxButton = styled.TouchableOpacity<{
  marginTop?: number;
  size: string;
  marginBottom?: number;
}>`
  flex-direction: row;
  width: ${props => (props.size === 'small' ? 183 : 375)}px;
  height: ${props => (props.size === 'small' ? 29 : 48)}px;
  border-radius: 12px;
  background-color: #006ffd;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.marginTop}px;
  margin-bottom: ${props => props.marginBottom}px;
`;

export const ButtonText = styled.Text<{icon?: boolean | undefined}>`
  color: white;
  margin-left: ${props => props.icon && 8}px;
  font-size: 12px;
`;
