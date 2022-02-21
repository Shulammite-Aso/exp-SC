/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  // someThing: () => _t(translations.someThing,'default value'),
  back: () => _t(translations.common.links.back, 'Back'),
  first_name: () => _t(translations.auth.form.first_name, 'Firstname'),
  last_name: () => _t(translations.auth.form.last_name, 'Lastname'),
  email: () => _t(translations.auth.form.email, 'Email'),
  password: () => _t(translations.auth.form.password, 'Password'),
  termsOfUse: () => _t(translations.common.links.termsOfUse, 'Terms of Use'),
  privacyPolicy: () =>
    _t(translations.common.links.privacyPolicy, 'Privacy Policy'),
  createAccount: () =>
    _t(translations.auth.signup.createAccount, 'Create Account'),
  agreement: () => _t(translations.auth.signup.agreement, 'I agree to'),
};
