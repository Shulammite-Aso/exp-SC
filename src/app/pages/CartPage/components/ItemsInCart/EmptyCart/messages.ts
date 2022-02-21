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
      translations.orderHistory.emptyHistory.title,
      'Order history page title',
    ),
  description: () =>
    _t(translations.orderHistory.emptyHistory.description, 'description'),
  replyTo: () =>
    _t(
      translations.orderHistory.emptyHistory.replyTo,
      'Reply to place an order',
    ),
  startShopping: () =>
    _t(
      translations.orderHistory.emptyHistory.startShopping,
      'start shopping button',
    ),
};
