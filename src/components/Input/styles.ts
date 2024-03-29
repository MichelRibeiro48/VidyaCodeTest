import styled from 'styled-components/native';

export const BoxInput = styled.View<{marginBottom: number | undefined}>`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 44px;
  background-color: #f8f9fe;
  border-radius: 24px;
  padding-left: 16px;
  margin-top: 20px;
  margin-bottom: ${props => props.marginBottom}px;
`;

export const InputArea = styled.TextInput`
  margin-left: 4px;
  width: 90%;
`;
