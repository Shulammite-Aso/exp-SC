/**
 *
 * Asynchronously loads the component for GiftCardSlider
 *
 */

import { lazyLoad } from 'utils/loadable';

export const GiftCardSlider = lazyLoad(
  () => import('./index'),
  module => module.GiftCardSlider,
);
