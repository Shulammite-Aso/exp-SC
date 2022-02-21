/**
 *
 * Asynchronously loads the component for CreditCardSlider
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CreditCardSlider = lazyLoad(
  () => import('./index'),
  module => module.CreditCardSlider,
);
