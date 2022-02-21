/**
 *
 * Servicebar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { ServiceCard } from './components/ServiceCard';
//import { customMedia } from 'styles/media';
import airtimeImg from './assets/How-to-borrow-Data.svg';
import brandImg from './assets/Brand-of-the-week.svg';
import vendorImg from './assets/Become-a-vendor.svg';

interface Props {}

export const Servicebar = memo((props: Props) => {
  const contents = [
    {
      id: 1,
      title: 'Airtime & ',
      image: airtimeImg,
      desc:
        'Stay Connected! Explore our affordable airtime and data bundles across all networks',
    },
    {
      id: 2,
      title: 'Brand of the Week',
      image: brandImg,
      desc:
        'Follow the trend! Shop the best deals on several genuine products from our brand of the week.',
    },
    {
      id: 3,
      title: 'Become a Vendor',
      image: vendorImg,
      desc:
        'Join a marketplace where millions of sellers & buyers nationwide shop for quality, unique & affordable products ',
    },
  ];

  return (
    <Wrapper>
      {contents.map(content => (
        <ServiceCard content={content} key={content.id} />
      ))}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  //flex-direction: row;
  /* border: 1px solid black; */
  ${p => p.theme.direction['ltr']}: 10px;
  align-items: center;
  margin-top: 1.2rem;
  /* display: gird; */
  /* flex-direction: row; */

  padding: 23px 22px;
`;
