/**
 *
 * Right
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
// import { messages } from './messages';

interface Props {}

export const Right = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <RightImage />
      {/* <RightEcllipse /> */}
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  /* position: absolute; */
  width: 40%;
  /* border: 1px solid black; */
  margin-left: 60%;
  ${p => p.theme.direction['right']}: 0px;
`;

// const RightEcllipse = styled.div`
//   position: absolute;
//   width: 608px;
//   height: 100%;
//   background-image: ${p => p.theme.color.rightEllipse};
//   background-repeat: no-repeat;
// `;

const RightImage = styled.div`
  /* position: relative; */
  width: 672px;
  height: 100%;
  margin-top: 15px;
  z-index: 1;
  margin-left: -20%;
  /* margin-left: 720px; */
  background-image: ${p => p.theme.color.rightbannerImg};
`;
