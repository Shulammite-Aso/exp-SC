/**
 *
 * Body
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import camera from '../../assets/camera.svg';
import cameras from '../../assets/cameras.svg';
import canon from '../../assets/Canon.svg';
import subcamera from '../../assets/subcanon.svg';
import { CategoryItem } from './CategoryItem';
import { Row } from 'reactstrap';

interface Props {}

export const Body = memo((props: Props) => {
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
    <Wrapper>
      <Row className="mt-5 mb-5">
        {items.map(item => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Row>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  /* width: 90%; */
  /* margin: 35px auto 0px auto;
  height: 650px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 32px; */

  /* border: 1px solid white; */
`;
