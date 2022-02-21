import React, { useEffect, useState } from 'react';
import { SelectInput } from 'app/components/form/SelectInput';
import { customMedia } from 'styles/media';
import styled from 'styled-components/macro';
import { useProductSlice } from 'app/pages/product/slice';
import { useDispatch } from 'react-redux';

export function Filters({ filterObject, setChildFilterObject }) {
  const [state, setState] = useState({
    price: '',
    topBrand: '',
    storeAvailability: '',
    dateSort: '',
  });
  const { actions } = useProductSlice();
  const dispatch = useDispatch();

  const onChange = (e: any) => {
    console.log('e in fiter', e.target);
    setState({ ...state, [e.target.name]: [e.target.value] });
    console.log('state in fiter', state);
    // Dispatch the data gotten on change
  };
  useEffect(() => {
    const filterProductsParams = {
      page: 1,
      limit: 25,
      filterObject,
    };
    dispatch(actions.fetchProductsByFilter(filterProductsParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterObject]);
  return (
    <Wrapper>
      <Field>
        <LabelFilter>Filter by :</LabelFilter>
        <PriceSelect name="price" label="Price" onChange={onChange} />
        <TopBrandSelect
          name="topBrand"
          label="Top Brands"
          onChange={onChange}
        />
      </Field>
      <Field>
        <LabelSort>Sort by :</LabelSort>
        <BestSellersSelect
          name="dateSort"
          label={state.dateSort === '' ? 'Select Sort Order' : state.dateSort}
          onChange={(e: { value: any }) =>
            setChildFilterObject({ ...filterObject, dateSort: e.value })
          }
          options={[
            { value: 'new to old', label: 'New to Old' },
            { value: 'old to new', label: 'Old to New' },
          ]}
        />
      </Field>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 13px;
  padding-bottom: 10px;
  margin-top: 40px;

  ${customMedia.lessThan('small')`
  height: max-content;
   margin-top: 10px;
   padding: 0 20px;
  `}
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  ${customMedia.lessThan('small')`
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
  `}
`;

const Label = styled.p`
  display: block;
  color: ${p => p.theme.color.colorText};
  margin-right: 20px;
  font-size: 16px;
  min-width: max-content;
  position: relative;
  top: 0px;
  ${customMedia.lessThan('small')`
    font-size: 13px;
  `}
`;
const LabelFilter = styled(Label)`
  ${customMedia.lessThan('small')`
    margin-right: 5px;
  `}
`;
const LabelSort = styled(Label)`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const PriceSelect = styled(SelectInput)`
  margin: auto 5px;
  width: 100px;
`;
const TopBrandSelect = styled(SelectInput)`
  margin: auto 5px;
  width: 140px;
`;

const BestSellersSelect = styled(SelectInput)`
  margin: auto 5px;
  width: 185px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
