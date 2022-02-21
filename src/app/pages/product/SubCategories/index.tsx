/**
 *
 * TopCategories
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import camera from './assets/camera.svg';
import cameras from './assets/cameras.svg';
import canon from './assets/Canon.svg';
import subcamera from './assets/subcanon.svg';
import cameraBanner from './assets/camera-banner.svg';
import { Banner } from 'app/components/Banner';
import { CategoryItem } from './components/CategoryItem';
import { StyleConstants } from 'styles/StyleConstants';
import { customMedia } from 'styles/media';

interface Props {}

export const SubCategories = memo((props: Props) => {
  const items = [
    {
      id: 1,
      image: camera,
      desc: 'Mobile Accessories',
    },
    {
      id: 2,
      image: cameras,
      desc: 'Automotive & Industrial',
    },
    {
      id: 3,
      image: canon,
      desc: 'Baby, Kids & Toys',
    },
    {
      id: 4,
      image: subcamera,
      desc: 'Fashion',
    },
    {
      id: 5,
      image: camera,
      desc: 'Phones & Tablets',
    },
    {
      id: 6,
      image: cameras,
      desc: 'Arts & Crafts',
    },
    {
      id: 7,
      image: subcamera,
      desc: 'Arts & Crafts',
    },
    {
      id: 8,
      image: canon,
      desc: 'Arts & Crafts',
    },
    {
      id: 9,
      image: camera,
      desc: 'Arts & Crafts',
    },
    {
      id: 10,
      image: cameras,
      desc: 'Arts & Crafts',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Categories Page</title>
        <meta name="description" content="A AltMall Categories  Page" />
      </Helmet>
      <Wrapper>
        <Banner hasCarousel={false} image={cameraBanner} />
        <Header>
          <HomeNavigate to="/">Home</HomeNavigate>
          <ParentCategory to="/products/:category/">
            &#8226; Category name
          </ParentCategory>
          <Title>&#8226; subcategory </Title>
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

  .banner {
    width: %;
  }
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

const ParentCategory = styled(Link)`
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
