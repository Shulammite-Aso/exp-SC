/**
 *
 * Topbanner
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Left } from '../Topbanner/components/Left/Loadable';
import { Right } from '../Topbanner/components/Right/Loadable';
import { customMedia } from 'styles/media';

interface Props {}

export const Topbanner = memo((props: Props) => {
  return (
    <Wrapper>
      <Left />
      <Right />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  /* position: relative; */
  height: 433px;
  /* object-fit: contain; */
  flex-direction: row;
  width: 100%;
  margin: 0 auto;

  background-image: ${p => p.theme.color.bannerImg};
  background-repeat: no-repeat;

  ${customMedia.lessThan('small')` 
  // display: none;
    // min-height: 120px;
    // flex-wrap: wrap;
    width: 100%;
  // top: 240px;
    // flex-direction: column;
    // width: 50%;
  `}
`;
