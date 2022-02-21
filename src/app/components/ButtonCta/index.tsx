import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { customMedia } from 'styles/media';
import { Button } from 'app/components/Button/Button';

interface Props {
  to: string;
  text: string;
  btStyle: string;
}

export const ButtonCta = memo(({ to, text, btStyle }: Props) => {
  return (
    <Btn as={Link} to={to} className={btStyle}>
      {text}
    </Btn>
  );
});

const Btn = styled(Button)`
  margin-bottom: unset;

  ${customMedia.lessThan('small')`
    font-size: 11px;
    padding: 10px 8px;
  `}
`;
