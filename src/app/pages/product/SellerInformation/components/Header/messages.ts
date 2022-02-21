/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  home: () => _t(translations.common.seller_information.header.home, 'Home'),
  maincateory_title: () =>
    _t(
      translations.common.seller_information.header.maincateory_title,
      'Electronics',
    ),
  subcategoriy_title: () =>
    _t(
      translations.common.seller_information.header.subcategoriy_title,
      'Camera',
    ),
};
