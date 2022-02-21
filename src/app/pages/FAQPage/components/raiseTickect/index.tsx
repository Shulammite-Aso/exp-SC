import React from 'react';
import styled from 'styled-components/macro';
import Ticket from './Ticket';

export default function RaiseTicket() {
  return (
    <TicketList>
      <h3>Raise a Ticket</h3>
      <ul>
        <Ticket title="Late Delivery" />
        <Ticket title="Delayed CBN CRMS Report" />
        <Ticket title="Delayed Approval / Dedline" />
        <Ticket title="Return An Item" />
        <Ticket title="Outstanding Altmall FAcility Balance" />
        <Ticket title="Liquidation" />
        <Ticket title="Unable to Create SAF Account" />
        <Ticket title="Non-receipt of ticket ID/Password for Online " />
        <Ticket title="BVN Verification" />
        <Ticket title="Invalid Account" />
        <Ticket title="Price Increase" />
        <Ticket title="Login Issue/Password Reset" />
        <Ticket title="Inactive Remita Mandate" />
        <Ticket title="Produced Specification Confirmation" />
        <Ticket title="General Enquiry" />
        <Ticket title="Order Cancellation" />
        <Ticket title="Other" />
      </ul>
    </TicketList>
  );
}

const TicketList = styled.div`
  ${p => p.theme.direction['padding-left']}: 2.7rem;
  h3 {
    font-weight: bold;
    font-size: 19px;
    line-height: 140%;
    ${p => p.theme.color.colorTextBold};

    margin-bottom: 1.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`;
