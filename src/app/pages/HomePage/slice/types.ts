export interface LandingPageState {
  loading?: boolean;
  campaignTypes: CampaignTypeProps[];
  campaigns: SingleCampaignProps[];
  singleCampaign?: SingleCampaignProps;
  topCategories?: TopCategoryProps[];
  error?: any;
  success?: boolean;
}

export interface CampaignTypeProps {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  campaigns: CampaignProps[];
  id: string;
}

export interface CampaignProps {
  _id: string;
  title: string;
  banner: string;
}
export interface SingleCampaignProps extends CampaignProps {
  type: {
    _id: string;
    name: string;
  };
  start_date: string;
  end_date: string;
  available: boolean;
  createdAt: string;
  updatedAt: string;
  description: string;
  banner: string;
  products: CampaignProductProps[];
  categories: {
    id: string;
    name: string;
  }[];
}

export interface CreateCampaignProps {
  title: string;
  start_date: string | Date;
  end_date: string | Date;
  description: string;
  banner: File;
  categories: string[];
}

export interface CampaignProductProps {
  campaign: {
    id: string;
    name: string;
    status: string;
    comment?: string;
    promo_price: number;
    promo_stock: number;
    date_posted: string;
  };
  _id: string;
  vendor: {
    _id: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    id: string;
  };
  name: string;
  price: number;
  primary_image: string;
  images: string[];
  id: string;
}

export interface TopCategoryProps {
  _id: string;
  name: string;
  images: {
    orientation: string;
    link: string;
    _id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  slug: string;
  banner: string;
  commission: number;
  image: string;
  is_top_deal: boolean;
  top_category: boolean;
  subcategories: SubCategory[];
}

export interface SubCategory {
  _id: string;
  name: string;
  category: string;
  parent_category: string;
  slug: string;
  subcategories?: SubCategory[];
}
