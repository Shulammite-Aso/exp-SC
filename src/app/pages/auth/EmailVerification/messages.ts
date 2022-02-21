import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  title: () => _t(translations.auth.emailVerification.title, 'Authenticate'),
  subtitle: () => _t(translations.auth.emailVerification.subtitle, 'Confirm'),
  footer: () =>
    _t(translations.auth.emailVerification.footer, 'It may take a while'),
  resend: () => _t(translations.common.links.resend, 'Resend'),
  continue: () => _t(translations.common.links.continue, 'Continue'),
  successTitle: () =>
    _t(translations.auth.emailVerification.successTitle, 'Success'),
  successSubTitle: () =>
    _t(
      translations.auth.emailVerification.successSubTitle,
      'Proceed to log in',
    ),
};
