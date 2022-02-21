import * as Yup from 'yup';
import valid from 'card-validator';

export const passwordPattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d]).{8,35}$/;

export const isEmpty = (value: any): boolean => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};
export const creditCardValidation = {
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  cardNumber: Yup.string()
    .test(
      'test-number',
      'Credit Card number is invalid',
      value => valid.number(value).isValid,
    )
    .required('required'),
  expiryDate: Yup.string()
    .test(
      'test-date',
      'Credit Card expiration data is invalid',
      value => valid.expirationDate(value).isValid,
    )
    .required('required'),
  cvv: Yup.string()
    .test(
      'test-ccv',
      'Credit Card ccv data is invalid',
      value => valid.cvv(value).isValid,
    )
    .required('required'),
  postalCode: Yup.string()
    .test(
      'test-number',
      'Postal code is invalid',
      value => valid.postalCode(value).isValid,
    )
    .required('required'),
};
