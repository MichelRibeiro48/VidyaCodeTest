export interface ProductListProp {
  data: any;
  input: string;
  route: any;
  onRefresh?: () => void;
  refreshing?: boolean;
}
