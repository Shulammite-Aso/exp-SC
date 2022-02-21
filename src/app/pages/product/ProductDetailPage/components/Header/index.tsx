/**
 *
 * Header
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { StyleConstants } from 'styles/StyleConstants';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

// import { messages } from './messages';

interface Props {}

export function Header(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <Col>
        <Row>
          <Col lg="4" xs="3">
            <HomeNavigate to="/">Home</HomeNavigate>
            <MainCategoriesTitle to="/categories">
              Electronics
            </MainCategoriesTitle>
            <SubCategoriesTitle to="/subcategories">Cameras</SubCategoriesTitle>
            <BrandTitle to="/brandcategories">Canon</BrandTitle>
          </Col>
          <Col lg="8" sm="12">
            <ProductTitle>
              Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens
            </ProductTitle>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.1rem;
  width: 100%;
`;

export const HomeNavigate = styled(Link)`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  color: ${p => p.theme.color.colorText};
  margin-right: 24px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_HOVER};
  }
`;

export const MainCategoriesTitle = styled(Link)`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  color: ${p => p.theme.color.colorText};
  text-decoration: none;
  margin-right: 24px;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_HOVER};
  }
`;

export const SubCategoriesTitle = styled(Link)`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  height: 21px;
  color: ${p => p.theme.color.colorText};
  text-decoration: none;
  margin-right: 24px;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_HOVER};
  }
`;

export const BrandTitle = styled(Link)`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  height: 21px;
  color: ${p => p.theme.color.colorText};
  text-decoration: none;
  margin-right: 24px;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_HOVER};
  }
`;

export const ProductTitle = styled.p`
  flex: 10;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  height: 2rem;
  color: rgba(192, 10, 181, 1) !important;
`;
