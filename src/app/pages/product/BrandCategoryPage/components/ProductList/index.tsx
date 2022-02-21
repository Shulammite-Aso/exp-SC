/**
 *
 * ProductList
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import camera2 from './assets/secondProductImage.png';
import camera from './assets/camera.png';
import camera3 from './assets/thirdProductImage.png';
import camera4 from './assets/camera4.png';
import nostar from './assets/nonstar.png';
import detailsIcon from './assets/detailsAction.png';
import wishlistIcon from './assets/wishlistAction.png';
import addtoChatIcon from './assets/addtochartAction.png';
import payPerMonth from './assets/per-month.png';
import { ProductItem } from '../ProductItem';
import { Row } from 'reactstrap';
import { customMedia } from 'styles/media';

export function ProductList() {
  const products = [
    {
      id: 1,
      image: camera,
      detailsAction: detailsIcon,
      wishlistAction: wishlistIcon,
      addtochatAction: addtoChatIcon,
      payPerMonth: payPerMonth,
      desc: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
      price: '₦ 114,110 ',
      discount: '(46% off)',
      oldprice: '₦ 114,110',
      stared: 3,
      nostar: nostar,
    },
    {
      id: 2,
      image: camera2,
      detailsAction: detailsIcon,
      wishlistAction: wishlistIcon,
      addtochatAction: addtoChatIcon,
      payPerMonth: payPerMonth,
      desc: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
      price: '₦ 114,110 ',
      discount: '(46% off)',
      oldprice: '₦ 114,110',
      stared: 2,
      nostar: nostar,
    },
    {
      id: 3,
      image: camera3,
      detailsAction: detailsIcon,
      wishlistAction: wishlistIcon,
      addtochatAction: addtoChatIcon,
      payPerMonth: payPerMonth,
      desc: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
      price: '₦ 114,110 ',
      discount: '(46% off)',
      oldprice: '₦ 114,110',
      stared: 5,
      nostar: nostar,
    },
    {
      id: 4,
      image: camera4,
      detailsAction: detailsIcon,
      wishlistAction: wishlistIcon,
      addtochatAction: addtoChatIcon,
      payPerMonth: payPerMonth,
      desc: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
      price: '₦ 114,110 ',
      discount: '(46% off)',
      oldprice: '₦ 114,110',
      stared: 4,
      nostar: nostar,
    },
    {
      id: 5,
      image: camera,
      detailsAction: detailsIcon,
      wishlistAction: wishlistIcon,
      addtochatAction: addtoChatIcon,
      payPerMonth: payPerMonth,
      desc: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
      price: '₦ 114,110 ',
      discount: '(46% off)',
      oldprice: '₦ 114,110',
      stared: 3,
      nostar: nostar,
    },
    {
      id: 6,
      image: camera2,
      detailsAction: detailsIcon,
      wishlistAction: wishlistIcon,
      addtochatAction: addtoChatIcon,
      payPerMonth: payPerMonth,
      desc: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
      price: '₦ 114,110 ',
      discount: '(46% off)',
      oldprice: '₦ 114,110',
      stared: 2,
      nostar: nostar,
    },
    {
      id: 7,
      image: camera3,
      detailsAction: detailsIcon,
      wishlistAction: wishlistIcon,
      addtochatAction: addtoChatIcon,
      payPerMonth: payPerMonth,
      desc: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
      price: '₦ 114,110 ',
      discount: '(46% off)',
      oldprice: '₦ 114,110',
      stared: 5,
      nostar: nostar,
    },
    {
      id: 8,
      image: camera4,
      detailsAction: detailsIcon,
      wishlistAction: wishlistIcon,
      addtochatAction: addtoChatIcon,
      payPerMonth: payPerMonth,
      desc: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
      price: '₦ 114,110 ',
      discount: '(46% off)',
      oldprice: '₦ 114,110',
      stared: 2,
      nostar: nostar,
    },
  ];

  return (
    <Wrapper>
      <Row>
        {products.map(product => (
          <ProductItem product={product} key={product.id} />
        ))}
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: -15px;
  row-gap: 30px;
  padding: 0px 54px;

  ${customMedia.greaterThan('medium')`
      grid-template-columns: auto auto auto auto;

   `};

  ${customMedia.lessThan('medium')`
    grid-template-columns: minmax(150px, 1fr);
     
   `};
`;
