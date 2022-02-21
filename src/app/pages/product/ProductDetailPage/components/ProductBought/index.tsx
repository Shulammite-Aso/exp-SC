/**
 *
 * ProductBought
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ProductList } from '../../../BrandCategoryPage/components/ProductList';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

export function ProductBought() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <HeaderTitle
      title={'Recently Visited'}
      link={'/brandcategories'}
      text={'See all'}
    >
      <ProductList />
    </HeaderTitle>
  );
}
