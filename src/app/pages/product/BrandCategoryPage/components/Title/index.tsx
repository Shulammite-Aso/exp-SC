/**
 *
 * Title
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

interface Props {}

export const Title = memo((props: Props) => {
  return (
    <Wrapper>
      <Row>
        <Col md={1}>
          <HomeNavigate to="/">Home</HomeNavigate>
        </Col>
        <Col md={1}>
          <MainCategoriesTitle to="/products/:category">
            Electronics
          </MainCategoriesTitle>
        </Col>
        <Col md={1}>
          <SubCategoriesTitle to="/products/:category/:subcategory">
            Cameras
          </SubCategoriesTitle>
        </Col>
        <Col md={1}>
          <BrandTitle>Mirror Lenses Camera</BrandTitle>
        </Col>
      </Row>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  /* display: flex;
  position: relative;
  width: 100%;
  height: 21px;
  background-color: transparent;
  margin: 26px 0px;
  padding: 0px 38px; */
`;

const HomeNavigate = styled(Link)`
  font-size: 16px;
  width: 48px;
  font-weight: 400;
  color: ${p => p.theme.color.colorText};
  margin-right: 24px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_HOVER};
  }
`;

const MainCategoriesTitle = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  width: 87px;
  height: 21px;
  color: ${p => p.theme.color.colorText};
  text-decoration: none;
  margin-right: 24px;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_HOVER};
  }
`;

const SubCategoriesTitle = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  width: 75px;
  height: 21px;
  color: ${p => p.theme.color.colorText};
  text-decoration: none;
  margin-right: 24px;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_HOVER};
  }
`;

const BrandTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  width: 175px;
  height: 21px;
  color: rgba(192, 10, 181, 1) !important;
`;
