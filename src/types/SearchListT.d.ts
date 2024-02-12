export interface SearchListType {
  data: any;
  input: string;
  clientPage?: boolean;
  orderPage?: boolean;
  route: any;
  onRefresh?: () => void;
  refreshing?: boolean;
}
