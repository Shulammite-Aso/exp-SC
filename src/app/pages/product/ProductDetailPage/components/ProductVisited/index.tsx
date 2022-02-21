/**
 *
 * ProductVisited
 *
 */
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ProductList } from '../../../BrandCategoryPage/components/ProductList';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

export function ProductVisited() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <HeaderTitle
      title={'Frequently Bought Toghether'}
      link={'/brandcategories'}
      text={'See all'}
    >
      <ProductList />
    </HeaderTitle>
  );
}
