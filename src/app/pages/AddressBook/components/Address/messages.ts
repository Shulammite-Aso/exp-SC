/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  title: () => _t(translations.profileAndPassword.title, 'title'),
  firstName: () => _t(translations.profileAndPassword.firstName, 'firstName'),
  lastName: () => _t(translations.profileAndPassword.lastName, 'lastName'),
  fullname: () => _t(translations.profileAndPassword.fullname, 'fullname'),
  email: () => _t(translations.profileAndPassword.email, 'email'),
  btnSave: () => _t(translations.profileAndPassword.btnSave, 'save'),
  btnCancel: () => _t(translations.profileAndPassword.btnCancel, 'cancel'),
  btnSendEmail: () =>
    _t(translations.profileAndPassword.btnSendEmail, 'send email'),
  btnTextMe: () => _t(translations.profileAndPassword.btnTextMe, 'send text'),
  passwordToMakeUpdate: () =>
    _t(
      translations.profileAndPassword.passwordToMakeUpdate,
      'passwordToMakeUpdate',
    ),
  phone: () => _t(translations.profileAndPassword.phone, 'phone'),
  sentCode: () => _t(translations.profileAndPassword.sentCode, 'sentCode'),
  willEmailCode: () =>
    _t(translations.profileAndPassword.willEmailCode, 'willEmailCode'),
  willTextCode: () =>
    _t(translations.profileAndPassword.willTextCode, 'willEmailCode'),
  didntGetCode: () =>
    _t(translations.profileAndPassword.didntGetCode, 'didntGetCode'),
  dateBirth: () =>
    _t(translations.profileAndPassword.dateBirth, 'date of Birth'),
  newCode: () => _t(translations.profileAndPassword.newCode, 'new code'),
  tabOne: () => _t(translations.profileAndPassword.tabOne, 'personal info'),
  tabTwo: () => _t(translations.profileAndPassword.tabTwo, 'password'),
};
