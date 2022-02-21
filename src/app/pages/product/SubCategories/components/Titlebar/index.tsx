/**
 *
 * Titlebar
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { H3 } from 'app/components/Typography/H3/H3';
import { Row } from 'reactstrap';
import { customMedia } from 'styles/media';

interface Props {}

export function Titlebar(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <Wrapper>
      <Row md={12} xs={12}>
        <Title>Shop by Category</Title>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: transparent;
  margin: 87px auto;
  flex: auto;
  ${customMedia.greaterThan('medium')`
  ${p => p.theme.direction['margin-left']}: 3rem;
  `};
`;

const Title = styled(H3)`
  font-size: 1.5rem;
  line-height: 28.8px;
  font-weight: 700;
  color: ${p => p.theme.color.colorText};
  padding-left: 30rem;
  ${customMedia.lessThan('medium')`
  padding-left:10rem;
  `};
`;
