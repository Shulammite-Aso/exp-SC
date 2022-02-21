import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';

interface Props {
  route: string;
  title: string;
}

export const MidfooterLink = memo(({ route, title }: Props) => {
  return <StyledFooterLink to={route}>{title}</StyledFooterLink>;
});

const StyledFooterLink = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${p => p.theme.color.colorText};
  transition: all 0.3s;

  &:hover {
    text-decoration: none;
    color: ${StyleConstants.COLOR_LIGHT_RED};
  }
`;
