/**
 *
 * ProductVisited
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { H2 } from 'app/components/Typography/H2/H2';
import { Col, Row } from 'reactstrap';
import { StyleConstants } from 'styles/StyleConstants';
import { customMedia } from 'styles/media';
import { Link } from 'react-router-dom';

// interface Props {
//   title: string;
//   text: string;
//   link: string;
// }

const HeaderTitle = ({ title, text, link, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <Row>
        <Col md={12} lg={12}>
          <Heading>
            <TopdealTitle>{title}</TopdealTitle>
            <SeeAllText to={link}>{text} &#x3E;</SeeAllText>
          </Heading>
        </Col>
      </Row>
      <Body>{children}</Body>
    </Wrapper>
  );
};

export default HeaderTitle;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
`;

const Heading = styled.div`
  display: flex;
  display: relative;
  width: 100%;
  background-color: transparent;
  margin-top: 70px;
  justify-content: space-evenly;
  margin-bottom: 4rem;
`;

const TopdealTitle = styled(H2)`
  font-size: 1rem;
  font-weight: 700;
  color: ${p => p.theme.color.colorText};
  width: 85%;
  text-align: center;

  ${customMedia.greaterThan('medium')`
     font-size: 1.5rem;
   `};

  ${customMedia.lessThan('medium')`
     font-size: 0.78rem;
   `};
`;

const SeeAllText = styled(Link)`
  font-size: 1rem;
  text-decoration: none;
  ${p => p.theme.direction['margin-left']}: 0;
  color: ${StyleConstants.COLOR_LIGHT_RED};
  width: fit-content;
  padding-right: 1.3rem;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_RED_HOVER};
  }

  ${customMedia.lessThan('medium')`
     font-size: 0.75rem;
     margin-top: 0.70rem;
     width: 30%;
   `};
`;

const Body = styled.div``;
