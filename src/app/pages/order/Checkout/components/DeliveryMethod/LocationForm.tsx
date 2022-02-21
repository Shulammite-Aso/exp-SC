import React from 'react';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SelectInput } from 'app/components/form/SelectInput';

export type FormValues = {
  location: { label: string; value: string };
};

const schema = yup
  .object({
    location: yup.object().shape({
      value: yup.string().trim().required('location is required'),
    }),
  })
  .required();

interface Props {
  handleDeliveryMethod: (selectMethod: {
    method: string;
    value: string;
  }) => void;
}

export function LocationForm({ handleDeliveryMethod }: Props) {
  const {
    control,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  return (
    <Controller
      control={control}
      name="location"
      render={({ field }) => (
        <SelectInput
          {...field}
          label="Select Location"
          error={errors?.location?.value?.message}
          onChange={(e: any) => {
            field.onChange(e);
            handleDeliveryMethod({
              method: 'Location',
              value: e.value,
            });
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
  );
}
