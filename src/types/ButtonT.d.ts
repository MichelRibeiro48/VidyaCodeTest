export interface ButtonType {
  title: string;
  onPress: () => void;
  marginTop?: number;
  paddingBottom?: number;
  size: 'small' | 'large';
  icon?: string;
  marginBottom?: number;
}
