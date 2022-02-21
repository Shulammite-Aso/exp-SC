import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Col, Row } from 'reactstrap';

import { TextInput } from 'app/components/form/TextInput';
import { SelectInput } from 'app/components/form/SelectInput';

const addressList = [];

export type FormValues = {
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  state: { label: string; value: string };
  city: { label: string; value: string };
};

const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
  state: yup.object().shape({
    value: yup.string().trim().required('state is required'),
  }),
  city: yup.object().shape({
    value: yup.string().trim().required('city is required'),
  }),
});

interface Props {
  handleFormChange: (key: string, value: string) => void;
}

export const AddressForm = ({ handleFormChange }: Props) => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      first_name: '',
      last_name: '',
      phone: '',
      address: '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  if (addressList.length > 0) {
    return <div>use default address</div>;
  }

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
            label="Last Name"
            {...register('last_name')}
            error={errors?.last_name?.message}
            onChange={(e: any) => {
              const value = e.target.value;
              handleFormChange('last_name', value);
            }}
          />
        </Col>
      </Row>
      <TextInput
        label="Mobile Number"
        {...register('phone')}
        error={errors?.phone?.message}
        onChange={(e: any) => {
          const value = e.target.value;
          handleFormChange('phone', value);
        }}
      />
      <TextInput
        label="Address"
        {...register('address')}
        error={errors?.address?.message}
        onChange={(e: any) => {
          const value = e.target.value;
          handleFormChange('address', value);
        }}
      />

      <Controller
        control={control}
        name="state"
        render={({ field }) => (
          <SelectInput
            {...field}
            label="State / Region"
            error={errors?.state?.value?.message}
            onChange={(e: any) => {
              console.log(`e`, e);
              const value = e.value;
              handleFormChange('state', value);
              field.onChange(e);
            }}
            options={[
              { value: 'north central', label: 'North Central (NC)' },
              { value: 'north west', label: 'North West (NW)' },
              { value: 'north east', label: 'North East (NE)' },
              { value: 'south west', label: 'South West (SW)' },
              { value: 'south south', label: 'South South (SS)' },
              { value: 'south east', label: 'South East (SE)' },
            ]}
          />
        )}
      />
      <Controller
        control={control}
        name="city"
        render={({ field }) => (
          <SelectInput
            {...field}
            label="City"
            error={errors?.city?.value?.message}
            onChange={(e: any) => {
              const value = e.value;
              handleFormChange('city', value);
              field.onChange(e);
            }}
            options={[
              { value: 'north central', label: 'North Central (NC)' },
              { value: 'north west', label: 'North West (NW)' },
              { value: 'north east', label: 'North East (NE)' },
              { value: 'south west', label: 'South West (SW)' },
              { value: 'south south', label: 'South South (SS)' },
              { value: 'south east', label: 'South East (SE)' },
            ]}
          />
        )}
      />
    </form>
  );
};
