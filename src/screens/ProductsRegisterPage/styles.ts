import styled from 'styled-components/native';

export const MainPage = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 24px;
`;

export const DottedView = styled.View`
  border-style: dashed;
  border-width: 5px;
  border-radius: 10px;
  border-color: #c5c6cc;
  width: 100%;
  height: 129px;
  justify-content: center;
  align-items: center;
`;

export const PickerPhotoTitle = styled.Text`
  font-family: 'Inter-Bold';
  color: #1f2024;
  margin-bottom: 12px;
  margin-top: 29px;
`;

export const PickerPhotoDescription = styled.Text`
  font-weight: 400;
  color: #949597;
  margin-top: 11px;
`;

export const ImageButton = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;
export const ImageProduct = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;
