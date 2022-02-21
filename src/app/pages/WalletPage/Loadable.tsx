/**
 *
 * Asynchronously loads the component for WalletPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const WalletPage = lazyLoad(
  () => import('./index'),
  module => module.WalletPage,
);
