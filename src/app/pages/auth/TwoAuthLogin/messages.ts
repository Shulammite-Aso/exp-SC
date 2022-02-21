import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  title: () => _t(translations.auth.twoAuthLogin.title, 'Authenticate'),
  subtitle: () => _t(translations.auth.twoAuthLogin.subtitle, 'Confirm'),
  footer: () =>
    _t(translations.auth.twoAuthLogin.footer, 'It may take a while'),
  resend: () => _t(translations.common.links.resend, 'Resend'),
  continue: () => _t(translations.common.links.continue, 'Continue'),
  successTitle: () =>
    _t(translations.auth.twoAuthLogin.successTitle, 'Success'),
  successSubTitle: () => _t(translations.auth.twoAuthLogin.successSubTitle, ''),
};
