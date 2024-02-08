export interface DropdownT {
  states: string[];
  selectedItem: unknown;
  setSelectedItem: (itemValue: unknown) => void;
  control: any;
  name: string;
  error: string | undefined;
}
