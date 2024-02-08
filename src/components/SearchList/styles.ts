import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  width: 100%;
  height: 80px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Thumbnail = styled.View<{ color: string }>`
  width: 40px;
  height: 40px;
  background-color: ${props => props.color};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const ThumbnailText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 18px;
  color: white;
`;

export const ClientText = styled.Text`
  font-family: 'Inter-Bold';
  font-size: 12px;
  color: #1f2024;
`;

export const QtdProductText = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
`;
export const BoxClientView = styled.View``;

export const BoxThumbClient = styled.View`
  flex-direction: row;
`;

export const CurrencyProductText = styled.Text`
  font-family: 'Inter-ExtraBold';
  font-size: 14px;
  color: #1f2024;
`;
