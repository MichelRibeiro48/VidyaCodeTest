import {Mask} from 'react-native-mask-input';

export interface InputFormType {
  control: any;
  name: string;
  placeholder?: string;
  error: string | undefined;
  setFocus: () => void;
  focus: boolean;
  onPressOut?: () => void;
  mask?: Mask;
  isDescription?: boolean;
}
