/**
 *
 * Asynchronously loads the component for AddressBookPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddressBookPage = lazyLoad(
  () => import('./index'),
  module => module.AddressBookPage,
);
