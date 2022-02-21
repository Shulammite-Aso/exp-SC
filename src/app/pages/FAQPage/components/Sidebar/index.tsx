import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import SideList from './SidebarList';
import SideLink from './SidebarLink';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { t } = useTranslation();
  return (
    <SideContainer>
      <SideList title={t(...messages.firstTitle())}>
        <SideLink route="/faq" title="Frequently Asked Questions" />
        <SideLink route="/route" title="Sell With Us" />
        <SideLink route="/route" title="Terms And Conditions" />
        <SideLink route="/route" title="Privacy Policy" />
        <SideLink route="/route" title="Payment Options" />
        <SideLink route="/route" title="Contact Us" />
      </SideList>
      <SideList title={t(...messages.secondTitle())}>
        <SideLink route="/company/about-us" title="About Us" />
        <SideLink route="/route" title="Sell With Us" />
        <SideLink route="/route" title="Terms And Conditions" />
        <SideLink route="/route" title="Privacy Policy" />
        <SideLink route="/route" title="Payment Options" />
        <SideLink route="/faq/ticket" title="Raise a Ticket" />
      </SideList>
    </SideContainer>
  );
}

const SideContainer = styled.div`
  display: none;
  ${customMedia.greaterThan('medium')`
  display: block;
  border-right: 1px solid #bdbcdb;
  ${p => p.theme.direction['padding-right']}: 2.5rem;
  `};
`;
