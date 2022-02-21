/**
 *
 * Filterbar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Row, Col } from 'reactstrap';
import { H4 } from 'app/components/Typography/H4/H4';
import { Controller, useForm } from 'react-hook-form';
import { SelectInput } from 'app/components/form/SelectInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface Props {
  handleFormChange: (key: string, value: string) => void;
}

export type FormValues = {
  price: { label: string; value: string };
  brand: { label: string; value: string };
  store_availability: { label: string; value: string };
};

const schema = yup.object().shape({
  price: yup.object().shape({
    value: yup.string().trim().required('price is required'),
  }),
  brand: yup.object().shape({
    value: yup.string().trim().required('brand is required'),
  }),
  store_availability: yup.object().shape({
    value: yup.string().trim().required('store_availability is required'),
  }),
});

export const Filterbar = memo(({ handleFormChange }: Props) => {
  const {
    // register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      // firstname: '',
      // lastname: '',
      // phone: '',
      // address: '',
    },
    mode: 'all',
    resolver: yupResolver(schema),
  });

  return (
    <Wrapper>
      <Row className="p-4">
        <Col md={2} className="pt-4">
          <H4>Filter by:</H4>
        </Col>
        <Col md={2}>
          <Controller
            control={control}
            name="price"
            render={({ field }) => (
              <SelectInput
                {...field}
                label="Price"
                error={errors?.price?.value?.message}
                onChange={(e: any) => {
                  console.log(`e`, e);
                  const value = e.value;
                  handleFormChange('price', value);
                  field.onChange(e);
                }}
                options={[
                  { value: 'lowest_price', label: 'Lowest Prices' },
                  { value: 'highest_price', label: 'Highest Prices' },
                ]}
              />
            )}
          />
        </Col>
        <Col md={3}>
          <Controller
            control={control}
            name="brand"
            render={({ field }) => (
              <SelectInput
                {...field}
                label="Top Brand"
                // error={errors?.state?.value?.message}
                onChange={(e: any) => {
                  console.log(`e`, e);
                  const value = e.value;
                  handleFormChange('brand', value);
                  field.onChange(e);
                }}
                options={[
                  { value: 'apple', label: 'Apple' },
                  { value: 'samsung', label: 'Samsung' },
                  { value: 'tecno', label: 'Tecno' },
                  { value: 'nivea', label: 'Nivea' },
                  { value: 'lg', label: 'LG' },
                  { value: 'haier_thermocool', label: 'Haier Thermocool' },
                ]}
              />
            )}
          />
        </Col>
        <Col md={4}>
          <Controller
            control={control}
            name="store_availability"
            render={({ field }) => (
              <SelectInput
                {...field}
                label="Store Availability"
                // error={errors?.state?.value?.message}
                onChange={(e: any) => {
                  console.log(`e`, e);
                  const value = e.value;
                  handleFormChange('store_availability', value);
                  field.onChange(e);
                }}
                options={[
                  { value: 'available', label: 'Available?' },
                  { value: 'not_available', label: 'Not Available?' },
                ]}
              />
            )}
          />
        </Col>
      </Row>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
`;
