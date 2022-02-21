/**
 *
 * Right
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';

interface Props {}

export const Right = memo((props: Props) => {
  return (
    <Div>
      <RightImage />
      <RightEcllipse />
    </Div>
  );
});

const Div = styled.div`
  display: flex;
  /* flex: 1; */
  width: 40%;
  margin-left: 20%;
  ${p => p.theme.direction['right']}: 0px;
  position: relative;

  ${customMedia.lessThan('medium')`

  // flex: none;
  width:100%
  // height: 384px;

 `};
`;

const RightEcllipse = styled.div`
  right: 1px;
  position: absolute;
  width: 608px;
  height: 642px;
  object-fit: contain;
  background-image: ${p => p.theme.color.rightEllipse};
  background-repeat: no-repeat;

  ${customMedia.lessThan('medium')`
    display: none;
`};
`;

const RightImage = styled.div`
  top: 14px;
  right: 1px;
  position: absolute;
  width: 672px;
  height: 100%;
  object-fit: contain;
  z-index: 1;
  background-image: ${p => p.theme.color.phoneImage};
  background-repeat: no-repeat;

  ${customMedia.lessThan('medium')`

  width:200%;

 `};
`;
