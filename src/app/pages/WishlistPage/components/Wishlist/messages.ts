/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  title: () =>
    _t(translations.wishlist.nonEmptyWishlist.title, 'Wishlist page title'),
  firstBtn: () =>
    _t(translations.wishlist.nonEmptyWishlist.firstBtn, 'Add to cart button'),
  secondBtn: () =>
    _t(translations.wishlist.nonEmptyWishlist.secondBtn, 'Delete button'),
};
