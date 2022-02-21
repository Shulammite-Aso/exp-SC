import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import debit from '../../assets/debit.svg';
import credit from '../../assets/credit.svg';
import allTransactions from '../../assets/all-transactions.svg';
import filterBtn from '../../assets/filter.svg';
import download from '../../assets/download cloud.svg';
import lens from 'app/assets/icons/search.svg';
import Table from './Table';
import { H4 } from 'app/components/Typography/H4/H4';
import { Button } from '../../../../components/Button/Button';
import { useState } from 'react';

export default function WalletContent() {
  const [showFilterOption, setShowFilterOption] = useState(false);
  const [byStatus, setByStatus] = useState(false);
  const [byDate, setByDate] = useState(false);
  const [showDownLoadStatement, setShowDownLoadStatement] = useState(false);
  const date = new Date();

  const downloadStatement: JSX.Element = (
    <DownLoadStatement
      onClick={() => setShowDownLoadStatement(!showDownLoadStatement)}
    >
      <img src={download} alt="download file" />
      <p>Download document.CSV</p>
    </DownLoadStatement>
  );

  interface Transactions {
    transactionsId: string;
    transtionsDescription: string;
    amount: string;
    date: string;
    status: string;
  }

  const allTransaction = [
    {
      transactionsId: '#23342',
      transtionsDescription: 'Purchased Tecno Phantom 9',
      amount: 'N30,000',
      date: '12 Oct, 2021',
      status: 'Credit',
    },
    {
      transactionsId: '#23342',
      transtionsDescription: 'Purchased Infinix Hot 8',
      amount: 'N30,000',
      date: '12 Oct, 2021',
      status: 'Debit',
    },
    {
      transactionsId: '#23342',
      transtionsDescription: 'Purchased Infinix Phantom 9',
      amount: 'N30,000',
      date: '12 Oct, 2021',
      status: 'Credit',
    },
    {
      transactionsId: '#23342',
      transtionsDescription: 'Purchased Tecno Phantom 9',
      amount: 'N30,000',
      date: '12 Oct, 2021',
      status: 'Debit',
    },
  ];

  const [transactions, setTransactions] = useState<Transactions[]>(
    allTransaction,
  );

  const [query, setQuery] = useState('');

  const searchJournal = () => {
    const matches: Transactions[] = [];

    const regex: RegExp = new RegExp('.*' + query + '.*', 'ig');

    for (let i = 0; i < allTransaction.length; i++) {
      if (
        allTransaction[i].transactionsId.match(regex) ||
        allTransaction[i].transtionsDescription.match(regex) ||
        allTransaction[i].amount.match(regex)
      ) {
        matches.push(allTransaction[i]);
      }
    }

    setTransactions(matches);
    console.log(matches);
  };

  return (
    <Container>
      <Heading>Wallet</Heading>

      <FirstRow>
        <TotalAndActionButton>
          <div className="total">
            <p>Total Balance</p>
            <p>200,000</p>
            <p>{date.toUTCString()}</p>
          </div>
          <div className="fund_wallet">
            <Button className="btn btn-primary">Fund Wallet</Button>
          </div>
        </TotalAndActionButton>

        <TransactionsCard>
          <img src={credit} alt="credit" />
          <div>
            <p>Total Credit</p>
            <p>N3,546,900</p>
          </div>
        </TransactionsCard>

        <TransactionsCard>
          <img src={debit} alt="debit" />
          <div>
            <p>Total Credit</p>
            <p>N3,546,900</p>
          </div>
        </TransactionsCard>

        <TransactionsCard>
          <img src={allTransactions} alt="all Transactions" />
          <div>
            <p>Total Credit</p>
            <p>N3,546,900</p>
          </div>
        </TransactionsCard>
      </FirstRow>

      <WalletTableSectionC>
        <TitleAndSearch>
          <TableHeading>Transaction History</TableHeading>
          <div>
            <SearchBar>
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
              <SearchIcon
                src={lens}
                onClick={searchJournal}
                className="search_icon"
                alt="search icon"
              />
            </SearchBar>
            <Filter onClick={() => setShowFilterOption(!showFilterOption)}>
              <img src={filterBtn} alt="filter" /> <span>Filter</span>
            </Filter>
          </div>

          {showFilterOption ? (
            <FilterMainOptions>
              <div className="radio_input">
                <input
                  type="radio"
                  id="by_date"
                  onClick={() => setByDate(!byDate)}
                />
                <label htmlFor="by_date">By Date</label>
              </div>

              {byDate && (
                <ByDateFilter>
                  <p id="lastDay" onClick={() => setByDate(!byDate)}>
                    last day
                  </p>
                  <p id="lastSevenDay" onClick={() => setByDate(!byDate)}>
                    last 7 days
                  </p>
                  <p id="lastThirtyDays" onClick={() => setByDate(!byDate)}>
                    last 30 days
                  </p>
                  <p
                    id="LastQuarter"
                    onClick={() =>
                      setShowDownLoadStatement(!showDownLoadStatement)
                    }
                  >
                    last quarter
                  </p>
                  {showDownLoadStatement && downloadStatement}
                  <p id="LatYear">last year</p>
                  <p id="">+custom date</p>
                </ByDateFilter>
              )}

              <div className="radio_input">
                <input
                  type="radio"
                  id="by_status"
                  onClick={() => setByStatus(!byStatus)}
                />
                <label htmlFor="by_status">By Status</label>
              </div>

              {byStatus && (
                <div>
                  <select name="status" id="">
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                  </select>
                </div>
              )}
              <ApplyFilterButton
                className="btn btn-primary"
                onClick={() => setShowFilterOption(false)}
              >
                Apply Filter
              </ApplyFilterButton>
            </FilterMainOptions>
          ) : null}
        </TitleAndSearch>
        <Table transactions={transactions} />
      </WalletTableSectionC>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  ${customMedia.lessThan('medium')`
    padding: 0.6rem;
  `}
`;

const Heading = styled(H4)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
`;

const FirstRow = styled.div`
  //text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2.5rem 0 1.5rem 0;
`;

const TotalAndActionButton = styled.div`
  display: flex;
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  border-radius: 18.393px;
  ${p => p.theme.direction['margin-right']}: 1rem;
  padding: 1.5rem;

  .total {
    ${p => p.theme.direction['margin-right']}: 2rem;
    p {
      color: ${p => p.theme.color.colorTextBlack};
    }

    p:nth-child(1) {
      font-size: 12px;
    }
    p:nth-child(2) {
      color: #cd17c2;
      font-size: 24px;
      font-weight: bold;
    }
    p:nth-child(3) {
      font-size: 10px;
    }
  }

  .fund_wallet {
    position: relative;
  }
`;

const TransactionsCard = styled.div`
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  border-radius: 18.393px;
  display: flex;
  ${p => p.theme.direction['margin-right']}: 1rem;
  padding: 1.5rem;
  ${p => p.theme.direction['padding-right']}: 3rem;
  min-width: 221.67px;

  ${customMedia.lessThan('xsm')`
  Height: 120px;
    width: 90%;

    img {
      width: 30%;
    }
  `}

  ${customMedia.lessThan('medium')`
    margin: 1rem auto;
  `}

  img {
    ${p => p.theme.direction['margin-right']}: 0.3rem;
  }

  div {
    p {
      color: ${p => p.theme.color.colorTextBlack};
    }
    p:nth-child(1) {
      font-size: 12px;
      white-space: nowrap;
      margin-bottom: 1rem;
    }
    p:nth-child(2) {
      font-size: 14px;
      font-weight: bold;
    }
  }
  }
`;

const WalletTableSectionC = styled.div`
  box-shadow: 0px 8px 16px rgba(142, 141, 208, 0.12);
  border-radius: 8px;
  padding: 1rem;
  overflow: auto;
  white-space: nowrap;
`;

const ApplyFilterButton = styled(Button)`
  margin-top: 1rem;
  width: 190px;
`;

const TitleAndSearch = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  position: relative;
`;

const TableHeading = styled(H4)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: 500;
  font-size: 18px;
`;

const SearchBar = styled.div`
  background: ${p => p.theme.color.inputColor};
  border-radius: 4px;
  display: inline-block;
  padding: 0.5rem;

  input {
    border: none;
    background-color: transparent;
    color: ${p => p.theme.color.colorText};
    outline: none;
`;
const Filter = styled.div`
  background: ${p => p.theme.color.inputColor};
  border-radius: 9px;
  color: #c00ab5;
  cursor: pointer;
  display: inline-block;
  width: 100px;
  height: 40px;
  ${p => p.theme.direction['margin-left']}: 1rem;
  padding: 0.6rem;

  img {
    width: 16px;
  }
`;

const SearchIcon = styled.img`
  cursor: pointer;
  margin: auto 10px;
  width: 25px;

  path {
    stroke: #cd17c2;
  }

  ${customMedia.lessThan('xsm')`
    margin: auto 5px;
    width: 15px;
  `}
`;

const FilterMainOptions = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  padding: 1.5rem;
  position: absolute;
  top: 45px;
  right: 5px;

  label {
    cursor: pointer;
    ${p => p.theme.direction['margin-left']}: 0.8rem;
  }

  .radio_input {
    cursor: pointer;
    margin-bottom: 0.8rem;
  }

  select {
    background: #f7f7fd;
    border: 1px solid #c00ab5;
    border-radius: 8px;
    padding: 0.3rem 0.8rem;
  }
`;

const ByDateFilter = styled.div`
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  padding: 1rem 0;
  margin-bottom: 1rem;
  p {
    color: ${p => p.theme.color.colorTextBold};
    cursor: pointer;
    font-size: 16px;
    line-height: 24px;
    padding: 0.5rem 0.8rem;
  }

  p:hover {
    background: #f8f8fa;
  }
`;

const DownLoadStatement = styled.div`
  border: 1px solid #c00ab5;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  padding: 0.9rem;

  p {
    color: #c00ab5;
    ${p => p.theme.direction['margin-left']}: 0.8rem;
  }
  img {
    width: 24px;
  }
`;
