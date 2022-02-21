/* eslint-disable prettier/prettier */
import React, { memo, useEffect } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { messages } from './messages';
import { customMedia } from 'styles/media';
import { SidebarOption } from '../SidebarOption';
import { useDispatch, useSelector } from 'react-redux';
import { useProductSlice } from '../../../../../pages/product/slice/index';
import {
  loadingSelector,
  productCategorySelector
} from '../../../../../pages/product/slice/selectors';
import { Loader } from 'app/components/Loader';

interface Props {
  selectOption: any;
}

export const SidebarContent = memo(({ selectOption }: Props) => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const { actions } = useProductSlice();
  const categories = useSelector(productCategorySelector);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  useEffect(() => {
    dispatch(actions.fetchProductsCategories());
  }, [actions, dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Block>
        {categories !== null || undefined
          ? categories?.map(category => (
            <SidebarOption
              title={category.name}
              key={category.id}
              id={category.id}
              onClick={() => selectOption(category.id)}
            />
          ))
          : 'No Categories Found'}
      </Block>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  padding-top: 15px;
  height: 100%;
  overflow: auto;

  & > div:last-child {
    width: 4px !important;

    div {
      transition: height 0.3s;
      opacity: 0.52;
    }
  }

  ${customMedia.greaterThan('small')`
    padding-top: 0; 
  `};
`;

const Block = styled.ul`
  padding: 15px 0;

  ${customMedia.lessThan('large')`
    padding: 5px 0; 
  `};

  ${customMedia.lessThan('medium')`
    padding: 0; 
  `};
`;
