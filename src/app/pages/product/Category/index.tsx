/**
 *
 * TopCategories
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import camera from './assets/photos.svg';
import assessories from './assets/assesories-categories.svg';
import security from './assets/security.svg';
import baby from './assets/baby.svg';
import home from './assets/soundSystem.svg';
import art from './assets/tv.svg';
import electronicsBanner from './assets/electronics-banner.svg';
import { Banner } from 'app/components/Banner';
import { CategoryItem } from './components/CategoryItem';
import { StyleConstants } from 'styles/StyleConstants';
import { customMedia } from 'styles/media';

interface Props {}

export const Category = memo((props: Props) => {
  const items = [
    {
      id: 1,
      image: camera,
      desc: 'Cameras  & Photos',
    },
    {
      id: 2,
      image: assessories,
      desc: 'Accessories',
    },
    {
      id: 3,
      image: security,
      desc: 'Security & Surveilliance',
    },
    {
      id: 4,
      image: baby,
      desc: 'Baby, Kids & Toys',
    },
    {
      id: 5,
      image: home,
      desc: 'Home Theatre & Audio Sysytems',
    },
    {
      id: 6,
      image: art,
      desc: 'Television & Audios',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Categories Page</title>
        <meta name="description" content="A AltMall Categories  Page" />
      </Helmet>
      <Banner hasCarousel={false} image={electronicsBanner} />
      <Wrapper>
        <Header>
          <HomeNavigate to="/">Home</HomeNavigate>
          <Title>&#8226; Category name</Title>
        </Header>
        <Items>
          {items.map(item => (
            <CategoryItem item={item} key={item.id} />
          ))}
        </Items>
      </Wrapper>
    </>
  );
});

const Wrapper = styled.div`
  //width: 100%;
  display: block;
  margin-bottom: 90px;
  padding: 1.2rem;

  ${customMedia.lessThan('small')`
    margin-top: 50px;
  `}
`;

const Header = styled.div`
  display: flex;
  padding: 0.7rem;
`;

const HomeNavigate = styled(Link)`
  font-size: 16px;
  color: ${p => p.theme.color.colorTextBlack};
  margin-right: 0.5rem;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const Title = styled.p`
  color: ${StyleConstants.COLOR_ACCENT};
  font-size: 16px;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 1rem;

  ${customMedia.lessThan('small')`
     margin-bottom: 50px;
   `}
`;
