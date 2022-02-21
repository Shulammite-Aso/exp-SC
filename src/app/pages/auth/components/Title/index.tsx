import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { customMedia } from 'styles/media';
import { H1 } from 'app/components/Typography/H1/H1';

interface Props {
  text: string;
}

export const Title = memo(({ text }: Props) => {
  return <Header>{text}</Header>;
});

const Header = styled(H1)`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: bold;

  ${customMedia.lessThan('small')`
    font-size: 18px;
    margin-top: 40px;
    margin-bottom: 10px;
    font-weight: 500;
  `}
`;
