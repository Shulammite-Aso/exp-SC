/**
 *
 * Bottombanner
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Left } from './components/Left';
import { Right } from './components/Right';

interface Props {}

export const Bottombanner = memo((props: Props) => {
  return (
    <Wrapper>
      <Left />
      <Right />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  height: 434px;
  flex-direction: row;
  max-width: 100%;

  background-image: ${p => p.theme.color.bottomBanner};

  ${customMedia.lessThan('medium')`
  // flex-wrap: wrap;
  // flex-direction: column;
  // flex: 50%;
  width:100%
  height: 384px;
 `};
`;
