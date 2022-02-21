/**
 *
 * Brandbar
 *
 */
import * as React from 'react';
import brandSamsung from './assets/samsung.svg';
import brandHaier from './assets/haierTermo.svg';
import brandLG from './assets/lgbrand.svg';
import brandApple from './assets/appleWrap.svg';
import brandNivea from './assets/NiveaWrap.svg';
import brandTecno from './assets/tecno.svg';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';

interface Props {}

export function Brandbar(props: Props) {
  const brands = [
    {
      logo: brandSamsung,
      id: 1,
    },
    {
      logo: brandHaier,
      id: 2,
    },
    {
      logo: brandLG,
      id: 3,
    },
    {
      logo: brandApple,
      id: 4,
    },
    {
      logo: brandNivea,
      id: 5,
    },
    {
      logo: brandTecno,
      id: 6,
    },
  ];
  return (
    <Div>
      {brands.map(brand => (
        <img src={brand.logo} alt="logo" key={brand.id} />
      ))}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 1rem 0 3rem 0;

  ${customMedia.lessThan('medium')`
   display: none;
 `};

  img {
    height: 35px;
    margin: 0 0.5rem;
  }
`;
