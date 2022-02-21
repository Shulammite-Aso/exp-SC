export interface AddressState {
  loading: boolean;
  address_list: IAddressProps[];
  error: string;
  message: string;
  user: any;
}
export interface IAddressProps {
  state: string;
  city: string;
  address: string;
  _id: string;
}
