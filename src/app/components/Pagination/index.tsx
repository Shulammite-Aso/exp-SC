import React from 'react';
import { Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';
import { StyleConstants } from 'styles/StyleConstants';

export const mockPagination: any = {
  prevPage: 2,
  currentPage: 1,
  nextPage: 2,
  pageTotal: 5,
  pageSize: 40,
  total: 200,
};

export interface PaginationProps {
  next?: {
    page: number;
    limit: number;
  };
  prev?: {
    page: number;
    limit: number;
  };
  total: number;
}

interface NumberedPaginationProps {
  pagination: Partial<PaginationProps>;
  onPageChange: (selectedObject: any) => void;
}
export const NumberedPagination: React.FC<NumberedPaginationProps> = ({
  pagination,
  onPageChange,
}): JSX.Element => {
  const divider = pagination?.next ? 'next' : 'prev';
  return (
    <Row className="mx-0 justify-content-end mt-4">
      {pagination &&
        (Math.ceil(
          (pagination?.total as number) /
            (pagination[divider]?.limit as number),
        ) > 1 ||
          pagination.prev) && (
          <PaginationStyle>
            <ReactPaginate
              pageCount={Math.ceil(
                (pagination?.total as number) /
                  (pagination[divider]?.limit as number),
              )}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              onPageChange={onPageChange}
              containerClassName={'container'}
              previousLinkClassName={'page'}
              previousClassName="previous"
              initialPage={
                (((pagination[divider]?.page as number) - 1) as number) - 1
              }
              breakClassName={'page'}
              nextLinkClassName={`page ${
                (pagination[divider]?.page as number) ===
                  Math.ceil(
                    (pagination?.total as number) /
                      (pagination[divider]?.limit as number),
                  ) && 'd-none'
              }`}
              nextLabel={<MdKeyboardArrowRight size={20} />}
              previousLabel={<MdKeyboardArrowLeft size={20} />}
              pageClassName={'page'}
              disabledClassName={'disabled'}
              activeClassName={'active border-all-primary'}
              disableInitialCallback
            />
          </PaginationStyle>
        )}
    </Row>
  );
};

const PaginationStyle = styled.div`
  .page {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 22.4px;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-right: 15px;
    cursor: pointer;
    &.active {
      background: ${StyleConstants.COLOR_DARK_RED};
      color: ${StyleConstants.COLOR_WHITE};
    }
  }

  .disabled {
    cursor: not-allowed;
  }

  .previous,
  .next {
    width: 24px;
    height: 24px;
    content: '';
    cursor: pointer;
    border-radius: 4px;
    margin-right: 15px;
    background: transparent;
    color: ${StyleConstants.COLOR_BLACK};
    &:active {
      a {
        border: 1px solid ${StyleConstants.COLOR_DARK_RED};
      }
    }
  }

  .container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
`;
