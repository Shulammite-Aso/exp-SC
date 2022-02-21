/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  titlebold: () => _t(translations.topbanner.left.titlebold, 'Get 30%'),
  title: () => _t(translations.topbanner.left.title, 'Off the Iphone 12pro'),
  detail: () =>
    _t(
      translations.topbanner.left.detail,
      'iPhone 12. Beautifully bright 6.1-inch Super Retina XDR display.',
    ),
};
