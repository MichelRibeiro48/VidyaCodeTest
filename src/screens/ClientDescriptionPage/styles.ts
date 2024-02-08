import styled from 'styled-components/native';

export const MainPage = styled.View`
  flex: 1;
  padding: 24px;
`;

export const BoxInfoView = styled.View`
  margin-top: 33px;
`;

export const TitleInfoText = styled.Text<{initialInfo?: boolean}>`
  font-family: 'Inter-Bold';
  color: #2f3036;
  margin-top: ${props => (props.initialInfo ? 0 : 16)}px;
`;

export const ValueInfoText = styled.Text`
  font-family: 'Inter-Regular';
  color: #71727a;
`;
