import React from 'react';
import styled from 'styled-components/macro';

export default function Table({ transactions }) {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Transaction Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        {transactions.map(transaction => (
          <tbody key={Math.random()}>
            <tr>
              <td>{transaction.transactionsId}</td>
              <td>{transaction.transtionsDescription}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date}</td>
              <td>
                <span
                  className={
                    transaction.status === 'Credit'
                      ? 'credit_transaction'
                      : transaction.status === 'Debit'
                      ? 'debit_transaction'
                      : 'transaction-status'
                  }
                >
                  {' '}
                  {transaction.status}
                </span>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </Container>
  );
}

const Container = styled.div`
table {
  width: 100%;

  td, th {
    padding: 9px;

    .credit_transaction {
        color: #18B757;
    padding: 5px 10px;
    background: rgba(24, 183, 87, 0.1);
    border-radius: 8px;s
    }
    .debit_transaction {
        background: rgba(255, 0, 0, 0.1);
    border-radius: 8px;
    color: #FF0000;
    padding: 5px 10px;
    }
  }

  th {
    color: ${p => p.theme.color.colorTextLightGray};
  }
  td {
    color: ${p => p.theme.color.colorTextBold};
  }
}
`;
