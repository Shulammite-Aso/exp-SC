/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  back: () => _t(translations.common.links.back, 'Back'),
  createAccount: () =>
    _t(translations.auth.signup.createAccount, 'Create Account'),
  title: () => _t(translations.auth.login.title, 'Login'),
  googleSignin: () => _t(translations.auth.login.google, 'Google'),
  fbSignin: () => _t(translations.auth.login.facebook, 'Facebook'),
};
