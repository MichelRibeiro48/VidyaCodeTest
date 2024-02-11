import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const MainPage = styled.View`
  flex: 1;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 406px;
`;

export const ProductInfoView = styled.View`
  padding: 24px;
`;

export const ProductInfoTitleText = styled.Text`
  font-family: 'Inter-ExtraBold';
  font-size: 18px;
  color: #1f2024;
`;

export const ProductInfoPriceText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 16px;
  color: #1f2024;
  margin-top: 8px;
`;

export const ProductInfoDescriptionText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
  color: #71727a;
  margin-top: 24px;
`;

export const CloseIcon = styled(AntDesign)``;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  left: 12px;
  top: 10px;
  z-index: 1;
`;
