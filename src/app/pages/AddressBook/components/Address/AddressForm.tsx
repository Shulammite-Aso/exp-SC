import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Button } from 'app/components/Button/Button';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import { states } from './StatesData';
import { TextInput } from 'app/components/form/TextInput';
import { SelectInput } from 'app/components/form/SelectInput';

const addressList = [];

export type FormValues = {
  address: string;
  state: { label: string; value: string };
  city: { label: string; value: string };
};

const schema = yup.object().shape({
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
  setEditItem: React.Dispatch<React.SetStateAction<string>>;
  handleAdressSubmit: (e: any) => void;
  handleCitySelect: (e: any) => void;
  stateLGAs: any;
}

export const AddressForm = ({
  handleFormChange,
  setEditItem,
  handleAdressSubmit,
  handleCitySelect,
  stateLGAs,
}: Props) => {
  const { t } = useTranslation();

  const {
    register,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
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
              const value = e.value;
              handleCitySelect(e.label);
              handleFormChange('state', value);
              field.onChange(e);
            }}
            options={states.map(state => ({
              label: state.name,
              value: state.name,
            }))}
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
            options={stateLGAs?.lgas.map(lga => ({
              label: lga,
              value: lga,
            }))}
          />
        )}
      />

      <FormBottom>
        <div></div>
        <ActionButtons>
          <CancelButton onClick={() => setEditItem('cancel')}>
            {t(...messages.btnCancel())}
          </CancelButton>
          <PrimaryActionButton
            className="btn btn-primary"
            onClick={handleAdressSubmit}
          >
            {t(...messages.btnSave())}
          </PrimaryActionButton>
        </ActionButtons>
      </FormBottom>
    </form>
  );
};

const FormBottom = styled.div`
  ${customMedia.greaterThan('medium')`
  display: flex;
  justify-content: space-between;

  p {
    width: 50%
  }
  `};
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  ${customMedia.lessThan('medium')`
    margin-top: 0.8rem;
  `};
`;

const PrimaryActionButton = styled(Button)`
  height: 34px;
`;

const CancelButton = styled(Button)`
  //margin: 8px 0;
  border: none;
  color: ${p => p.theme.color.colorTextBold};
  background-color: ${p => p.theme.color.colorBackground};
  height: 34px;
`;
