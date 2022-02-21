import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { creditCardValidation } from 'utils/validation';
import { Col, Row } from 'reactstrap';
import { TextInput } from 'app/components/form/TextInput';

const schema = yup.object({ ...creditCardValidation }).required();
export type FormValues = {
  first_name: string;
  last_name: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  postalCode: string;
};

interface Props {
  handleFormChange: (key: string, value: string) => void;
}

export function CardForm({ handleFormChange }: Props) {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  return (
    <form>
      <Row>
        <Col md={6}>
          <TextInput
            {...register('first_name')}
            error={errors?.first_name?.message}
            label="First Name"
            onChange={(e: any) => {
              const value = e.target.value;
              handleFormChange('first_name', value);
            }}
          />
        </Col>
        <Col md={6}>
          <TextInput
            {...register('last_name')}
            error={errors?.last_name?.message}
            label="Last Name"
            onChange={(e: any) => {
              const value = e.target.value;
              handleFormChange('last_name', value);
            }}
          />
        </Col>
      </Row>
      <TextInput
        {...register('cardNumber')}
        error={errors?.cardNumber?.message}
        label="Card Number"
        onChange={(e: any) => {
          const value = e.target.value;
          handleFormChange('cardNumber', value);
        }}
      />
      <Row>
        <Col md={6}>
          <TextInput
            {...register('expiryDate')}
            error={errors?.expiryDate?.message}
            label="Card Expiry Date (MM/YY)"
            onChange={(e: any) => {
              const value = e.target.value;
              handleFormChange('expiryDate', value);
            }}
          />
        </Col>
        <Col md={6}>
          <TextInput
            {...register('cvv')}
            error={errors?.cvv?.message}
            label="CVV (3 digits)"
            onChange={(e: any) => {
              const value = e.target.value;
              handleFormChange('cvv', value);
            }}
          />
        </Col>
      </Row>

      <TextInput
        {...register('postalCode')}
        error={errors?.postalCode?.message}
        label="Postal Code"
        onChange={(e: any) => {
          const value = e.target.value;
          handleFormChange('postalCode', value);
        }}
      />
    </form>
  );
}
