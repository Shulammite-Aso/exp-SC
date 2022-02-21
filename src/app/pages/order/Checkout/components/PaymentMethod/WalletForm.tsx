import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextInput } from 'app/components/form/TextInput';

const schema = yup
  .object({
    first_name: yup.string().required(),
    last_name: yup.string().required(),
    email: yup.string().required().trim().email(),
    dob: yup.date().required(),
    phone: yup.string().required(),
  })
  .required();
export type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  phone: string;
};

interface Props {
  handleFormChange: (key: string, value: string) => void;
}

export function WalletForm({ handleFormChange }: Props) {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  return (
    <form>
      <TextInput
        {...register('first_name')}
        error={errors?.first_name?.message}
        label="First Name"
        onChange={(e: any) => {
          const value = e.target.value;
          handleFormChange('first_name', value);
        }}
      />

      <TextInput
        {...register('last_name')}
        error={errors?.last_name?.message}
        label="Last Name"
        onChange={(e: any) => {
          const value = e.target.value;
          handleFormChange('last_name', value);
        }}
      />
      <TextInput
        {...register('email')}
        error={errors?.email?.message}
        label="Email"
        onChange={(e: any) => {
          const value = e.target.value;
          handleFormChange('email', value);
        }}
      />

      <TextInput
        {...register('dob')}
        error={errors?.dob?.message}
        label="Date of Birth"
        onChange={(e: any) => {
          const value = e.target.value;
          handleFormChange('dob', value);
        }}
      />

      <TextInput
        {...register('phone')}
        error={errors?.phone?.message}
        label="Phone"
        onChange={(e: any) => {
          const value = e.target.value;
          handleFormChange('phone', value);
        }}
      />
    </form>
  );
}
