/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  title: () => _t(translations.cart.nonEmptyCart.title, 'Cart page title'),
  quantity: () =>
    _t(
      translations.cart.nonEmptyCart.quantity,
      'Subheading for quantity of product',
    ),
  unitPrice: () =>
    _t(translations.cart.nonEmptyCart.unitPrice, 'Subheading for unit price'),
  subTotal: () =>
    _t(translations.cart.nonEmptyCart.subTotal, 'Subheading for total'),
  total: () => _t(translations.cart.nonEmptyCart.total, 'Total price'),
  disclaimer: () => _t(translations.cart.nonEmptyCart.disclaimer, 'disclaimer'),
  firstBtn: () =>
    _t(translations.cart.nonEmptyCart.firstBtn, 'Continue shopping buttton '),
  secondBtn: () =>
    _t(translations.cart.nonEmptyCart.secondBtn, 'Proceed to cart buttton'),
};
