import { PaginationProps } from 'app/components/Pagination';
import { CampaignProductProps } from 'app/pages/HomePage/slice/types';

export interface DealState {
  loading?: boolean;
  topDeals: TopDealProductProps[];
  pagination: Partial<PaginationProps>;
  error?: any;
  success?: boolean;
}

export type TopDealProductProps = CampaignProductProps &
  Partial<{
    sale: {
      price: number;
      start_date: string;
      end_date: string;
    };
    rating: number;
    _id: string;
    color: string[];
    dimensions: string;
    images: string[];
    fairmall_region: string;
    status: string;
    stock_status: string;
    enabled: boolean;
    is_top_deal: boolean;
    is_bento: boolean;
    is_procurement: boolean;
    is_bundle: boolean;
    is_deleted: boolean;
    size_variations: [
      {
        sale?: {
          price: number;
          start_date: string;
          end_date: string;
        };
        _id: string;
        size: string;
        price: number;
        quantity: number;
      },
    ];
    sku: string;
    brand: {
      _id: string;
      name: string;
    };
    category: {
      _id: string;
      name: string;
    };
    long_description: string;
    short_description: string;
    weight: number;
    warranty: string;
    discount: {
      price: number;
      start_date: Date | string;
      end_date: Date | string;
    };
    discount_percentage: number;
    altpay_monthly_payout: number;
    quantity: number;
    store_name: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  }>;
