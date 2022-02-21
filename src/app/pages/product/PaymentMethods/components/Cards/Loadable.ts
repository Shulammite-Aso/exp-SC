/**
 *
 * Asynchronously loads the component for Cards
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Cards = lazyLoad(
  () => import('./index'),
  module => module.Cards,
);
