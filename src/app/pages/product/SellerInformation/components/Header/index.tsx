/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import {
  HomeNavigate,
  MainCategoriesTitle,
  SubCategoriesTitle,
  BrandTitle,
  ProductTitle,
} from 'app/pages/product/ProductDetailPage/components/Header';
import { messages } from './messages';

interface Props {}

export function Header(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <Wrapper>
      <HomeNavigate to="/">{t(...messages.home())}</HomeNavigate>
      {/* <breakerpoint></breakerpoint> */}
      <MainCategoriesTitle to="/products/categories">
        {t(...messages.maincateory_title())}
      </MainCategoriesTitle>
      <SubCategoriesTitle to="/subcategories">
        {t(...messages.subcategoriy_title())}
      </SubCategoriesTitle>
      <BrandTitle to="/brandcategories">Canon</BrandTitle>
      <ProductTitle>
        Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens
      </ProductTitle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: left;
  width: 100%;
  height: 21px;
  background-color: transparent;
  margin: 20px 0px;
  padding: 0px 38px;
`;
