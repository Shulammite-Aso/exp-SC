import React from 'react';
import styled from 'styled-components/macro';
import SideLink from './SidebarLink';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { t } = useTranslation();
  const customer = {
    firstName: 'Amarachi',
    lastName: 'Aso',
    initials: 'AA',
  };
  return (
    <SideBarContainer>
      <Customer>
        <div className="initial">
          <span>{customer.initials}</span>
        </div>{' '}
        <div className="first-name">
          <span>
            {t(...messages.customerGreeting()) + ' ' + customer.firstName + '!'}
          </span>
        </div>
      </Customer>

      <SideBar>
        <SideLink route="/account/profile" title="My details" />
        <SideLink route="/account/address-book" title="Address Book" />
        <SideLink route="/account/wallet" title="Wallet" />
        <SideLink route="/order/history" title="Order History" />
        <SideLink route="/order/track" title="Track Order" />
        <SideLink route="/order/cards" title="Payment methods" />
        <SideLink route="/auth/socialacount" title="Social Account" />
        <SideLink route="/faq" title="Help Centre" />
      </SideBar>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  width: 19%;
  margin-top: 3rem;
  ${p => p.theme.direction['margin-left']}: 1rem;
`;

const Customer = styled.div`
  border-top: 1px solid #f4f3fe;
  display: flex;
  font-weight: bold;
  font-size: 14.6158px;
  padding: 2rem 1rem;

  .initial {
    background-color: #c00ab5;
    color: #ffffff;
    padding: 0.9rem 1rem;
    border-radius: 100%;
  }

  .first-name {
    color: ${p => p.theme.color.colorTextBold};
    padding-top: 1rem;
    ${p => p.theme.direction['margin-left']}: 1rem;
  }
`;

const SideBar = styled.ul`
  list-style-type: none;
  padding: 0;
  ${p => p.theme.direction['border-left']}: 2px solid #f4f3fe;
`;
