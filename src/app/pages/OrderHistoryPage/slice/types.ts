import { PaginationProps } from 'app/components/Pagination';

export interface OrdersSuccess {
  pagination: PaginationProps;
  orders: OrderHistoryProp[];
}

// export interface OrderSucce
export interface OrderState {
  loading?: boolean;
  error?: string;
  pagination: Partial<PaginationProps>;
  orders: OrderHistoryProp[];
  order?: OrderHistoryProp;
}

export interface OrderProductProps {
  product: {
    _id: string;
    name: string;
    price: string | number;
    primary_image: string;
    images: string[];
  };
  quantity: number;

  _id: string;
  date_delivered: Date | string | number;
  status: OrderStatus;
}

export type OrderStatus = 'pending' | 'cancelled' | 'delivered' | 'shipped';

export interface OrderHistoryProp {
  _id: string;
  customer: string;
  customer_first_name: string;
  customer_last_name: string;
  order_number: string;
  amount: number;
  status: string;
  payment_status: string;
  date: string;
  address: string;
  total_quantity: number;
  createdAt: string;
  updatedAt: string;
  products: OrderProductProps[];
}
