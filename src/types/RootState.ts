import { AuthState } from 'app/pages/auth/slice/types';
import { ProductState } from 'app/pages/product/slice/types';
import { cartState } from 'app/pages/CartPage/slice/types';
import { orderShipmentState } from 'app/pages/TrackOrderPage/slice/types';
import { wishlistState } from 'app/pages/WishlistPage/slice/types';
import { ProfilePageState } from 'app/pages/ProfilePage/slice/types';
import { ThemeState } from 'styles/theme/slice/types';
import { SidebarState } from '../app/layouts/components/Sidebar/slice/types';
import { LandingPageState } from 'app/pages/HomePage/slice/types';
import { OrderState } from 'app/pages/OrderHistoryPage/slice/types';
import { AddressState } from 'app/pages/AddressBook/slice/types';
import { DealState } from 'app/pages/DealsPage/slice/types';

export interface RootState {
  theme?: ThemeState;
  sidebar?: SidebarState;
  auth?: AuthState;
  product?: ProductState;
  cart?: cartState;
  wishlist?: wishlistState;
  profilePage?: ProfilePageState;
  landingPage?: LandingPageState;
  orders?: OrderState;
  address?: AddressState;
  trackOrder?: orderShipmentState;
  deal?: DealState;
}
