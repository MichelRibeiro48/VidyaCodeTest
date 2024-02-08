import styled from 'styled-components/native';

export const MainPage = styled.View`
  flex: 1;
  padding: 24px;
`;

export const BackButton = styled.TouchableOpacity``;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderText = styled.Text`
  padding-left: 100px;
  font-family: 'Inter-ExtraBold';
  color: #1f2024;
`;

export const BoxInfoView = styled.View`
  margin-top: 33px;
`;

export const TitleInfoText = styled.Text<{initialInfo?: boolean}>`
  font-family: 'Inter-Bold';
  color: #2f3036;
  margin-top: ${props => (props.initialInfo ? 0 : 16)};
`;

export const ValueInfoText = styled.Text`
  font-family: 'Inter-Regular';
  color: #71727a;
`;
