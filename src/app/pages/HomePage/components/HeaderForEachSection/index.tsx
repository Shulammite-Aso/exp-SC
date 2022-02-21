/**
 *
 * Servicebar
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
//import { customMedia } from 'styles/media';
import { H2 } from 'app/components/Typography/H2/H2';
import { Link } from 'react-router-dom';
import { StyleConstants } from 'styles/StyleConstants';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {
  title: string;
  linkTo: string;
}

export const Header = memo(({ title, linkTo }: Props) => {
  const { t } = useTranslation();

  return (
    <Conatiner>
      <TopdealTitle>{title}</TopdealTitle>
      <SeeAllText to={linkTo}>{t(...messages.pageLink())}</SeeAllText>
    </Conatiner>
  );
});

const Conatiner = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.7rem;
`;

const TopdealTitle = styled(H2)`
  color: ${p => p.theme.color.colorTextBlack};
  font-weight: bold;
  text-transform: capitalize;
  font-size: 24px;
  line-height: 120%;
  margin: 0 auto;
`;

const SeeAllText = styled(Link)`
  font-size: 0.7rem;
  text-decoration: none;
  ${p => p.theme.direction['margin-left']}: 0px;
  color: ${StyleConstants.COLOR_LIGHT_RED};
  &:hover {
    color: ${StyleConstants.COLOR_RED_HOVER};
  }
`;
