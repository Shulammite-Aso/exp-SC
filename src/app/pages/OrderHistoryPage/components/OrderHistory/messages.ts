/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  title: () =>
    _t(
      translations.orderHistory.nonEmptyHistory.title,
      'Order history page title',
    ),
  orderNo: () =>
    _t(translations.orderHistory.nonEmptyHistory.orderNo, 'Order number'),
  status: () =>
    _t(translations.orderHistory.nonEmptyHistory.status, 'Order status'),
  dateDelivered: () =>
    _t(
      translations.orderHistory.nonEmptyHistory.dateDelivered,
      'date delivered',
    ),
  orderDetailsBtn: () =>
    _t(
      translations.orderHistory.nonEmptyHistory.orderDetailsBtn,
      'order details buttton',
    ),
};
