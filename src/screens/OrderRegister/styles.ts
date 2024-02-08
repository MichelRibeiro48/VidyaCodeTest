import styled from 'styled-components/native';

export const MainPage = styled.View`
  height: 100%;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: white;
  flex: 1;
`;

export const SelectClientBox = styled.View`
  width: 100%;
  height: 135px;
  border-width: 1px;
  border-color: #d4d6dd;
  border-radius: 16px;
  padding: 16px;
  margin-top: 25px;
`;

export const SelectClientTitle = styled.Text`
  font-family: 'Inter-Bold';
  color: #71727a;
  margin-bottom: 6px;
`;

export const SelectedClientCard = styled.TouchableOpacity`
  width: 100%;
  height: 67px;
  background-color: #eaf2ff;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SelectedClientInfoCard = styled.View``;

export const SelectedClientNameCard = styled.Text`
  font-family: 'Inter-Bold';
  color: #1f2024;
`;

export const SelectedClientCNPJCard = styled.Text`
  font-family: 'Inter-Regular';
  color: #71727a;
`;
