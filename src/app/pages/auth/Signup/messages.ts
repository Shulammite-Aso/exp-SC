/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  back: () => _t(translations.common.links.back, 'Back'),
  signIn: () => _t(translations.auth.login.signIn, 'Create Account'),
  title: () => _t(translations.auth.signup.title, 'Sign up'),
  googleSignup: () => _t(translations.auth.signup.google, 'Google'),
  fbSignup: () => _t(translations.auth.signup.facebook, 'Facebook'),
};
