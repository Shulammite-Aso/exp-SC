import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import SideList from './SidebarList';
import SideLink from './SidebarLink';

export default function Sidebar() {
  return (
    <SideContainer>
      <SideList>
        <SideLink route="/company/returns/policy" title="Return Policy" />
        <SideLink
          route="/company/returns/requirements"
          title="Return Requirement"
        />
        <SideLink
          route="/company/returns/what-is-covered"
          title="What is Covered ?"
        />
        <SideLink
          route="/company/returns/what-is-not-covered"
          title="What is not Covered ?"
        />
        <SideLink
          route="/company/returns/how-to-return"
          title="How to Return"
        />
        <SideLink route="/company/returns/support" title="Support Channels" />
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
