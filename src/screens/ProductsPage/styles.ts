import styled from 'styled-components/native';

export const MainPage = styled.View`
  flex: 1;
  background-color: white;
  padding-left: 16px;
  padding-right: 16px;
`;
export const CardProduct = styled.View`
  width: 166px;
  height: 160px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

export const ImageProduct = styled.Image`
  width: 166px;
  height: 91px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
`;

export const ProductInfoView = styled.View`
  padding: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: 69px;
  background-color: #f8f9fe;
`;

export const ProductTitle = styled.Text`
  font-family: 'Inter-Regular';
  color: #1f2024;
  font-size: 12px;
`;

export const ProductValue = styled.Text`
  font-family: 'Inter-ExtraBold';
  color: #1f2024;
  font-size: 14px;
`;
