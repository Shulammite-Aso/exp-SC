import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';

interface Props {
  to: string;
  children: React.ReactNode;
}

export function TextLink({ to, children }: Props) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: ${StyleConstants.COLOR_ACCENT};

  &:hover {
    color: ${StyleConstants.COLOR_ACCENT_HOVER};
  }
`;
