/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  sellername: () =>
    _t(
      translations.common.seller_information.body.sellername,
      'Justin James Camera',
    ),
  seller_score: () =>
    _t(translations.seller_information.body.seller_score, '80% Seller Score'),
  seller_country: () =>
    _t(
      translations.seller_information.body.seller_country,
      'Country of Origin : Nigeria',
    ),
  years_on_altmall: () =>
    _t(translations.seller_information.body.years_on_altmall, '1 Years'),
  successful_sales: () =>
    _t(translations.seller_information.body.successful_sales, '100+'),

  order_fulfilment_rate: () =>
    _t(translations.seller_information.body.order_fulfilment_rate, 'Excellent'),

  quality_score: () =>
    _t(translations.seller_information.body.quality_score, 'Average'),

  customer_ratings: () =>
    _t(translations.seller_information.body.customer_ratings, 'Good'),
  seller_followers: () =>
    _t(translations.seller_information.body.seller_followers, '100 followers'),
  seller_info_title: () =>
    _t(
      translations.seller_information.body.seller_info_title,
      'Seller Information',
    ),
  more_products: () =>
    _t(
      translations.seller_information.body.more_products,
      '1000 more products in store',
    ),
};
