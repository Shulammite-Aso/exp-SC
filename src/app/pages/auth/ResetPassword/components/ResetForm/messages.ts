/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  password: () => _t(translations.auth.forgotPassword.password, 'Password'),
  confirmPassword: () =>
    _t(translations.auth.forgotPassword.confirmPassword, 'Create Password'),
  button: () =>
    _t(translations.auth.forgotPassword.resetButton, 'Create Password'),
};
