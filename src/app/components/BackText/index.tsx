import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import { StyleConstants } from 'styles/StyleConstants';
import { ReactComponent as BackArrow } from 'app/assets/icons/left_arrow.svg';

interface Props {
  text: string;
}
export const BackText = memo(({ text }: Props) => {
  const history = useHistory();

  return (
    <P onClick={() => history.goBack()}>
      <BackArrow /> <span>{text}</span>
    </P>
  );
});

const P = styled.p`
  text-decoration: none;
  font-size: 12px;
  color: ${StyleConstants.COLOR_ACCENT};
  cursor: pointer;

  span {
    ${p => p.theme.direction['margin-left']}: 5px;
  }

  &:hover {
    color: ${StyleConstants.COLOR_ACCENT_HOVER};

    svg path {
      stroke: ${StyleConstants.COLOR_ACCENT_HOVER};
    }
  }
`;
