import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const MainPage = styled.View`
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

export const ProductListTitle = styled.Text`
  font-family: 'Inter-ExtraBold';
  font-size: 14px;
  color: #1f2024;
  margin-top: 25px;
  margin-bottom: 16px;
`;

export const Card = styled.View`
  flex-direction: row;
`;

export const ImageCard = styled.Image`
  width: 90px;
  height: 100px;
  border-radius: 16px;
`;

export const CardInfo = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const CardInfoBox = styled.View``;

export const CardInfoTitle = styled.Text`
  font-family: 'Inter-ExtraBold';
  font-size: 12px;
  color: #1f2024;
`;

export const CardInfoCod = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
  color: #71727a;
`;

export const CardButtonBox = styled.View`
  flex-direction: row;
  margin-top: 13px;
`;

export const NumberQtdProductText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 14px;
  color: #1f2024;
  margin-right: 6px;
  margin-left: 6px;
`;

export const ButtonPlus = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  background-color: #eaf2ff;
  border-radius: 26px;
  justify-content: center;
`;

export const ButtonMinus = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  background-color: #eaf2ff;
  border-radius: 26px;
  justify-content: center;
`;

export const ProductPriceText = styled.Text`
  font-family: 'Inter-ExtraBold';
  margin-left: 40%;
`;

export const LineSeparatorView = styled.View`
  width: 100%;
  height: 1px;
  background-color: #d4d6dd;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const Icon = styled(AntDesign)`
  left: 7px;
`;

export const TotalInfoBox = styled.View`
  width: 100%;
  padding: 12px 24px 24px 24px;
`;

export const TotalInfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductTotalPriceText = styled.Text`
  font-family: 'Inter-ExtraBold';
`;

export const ProductTotalText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 14px;
  color: #71727a;
`;
