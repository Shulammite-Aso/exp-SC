import React from 'react';
import { Row } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';
interface PaginationProps {
  prevPage: number | null;
  currentPage: number;
  nextPage: number | null;
  pageTotal: number;
  pageSize: number;
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
  return (
    <Row className="mx-0 justify-content-end mt-4">
      {pagination && (pagination.pageTotal as number) > 1 && (
        <PaginationStyle>
          <ReactPaginate
            pageCount={pagination.pageTotal as number}
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            onPageChange={onPageChange}
            containerClassName={'container'}
            previousLinkClassName={'page'}
            previousClassName="previous"
            initialPage={(pagination?.currentPage as number) - 1}
            breakClassName={'page'}
            nextLinkClassName={`page ${
              (pagination.currentPage as number) === pagination.pageTotal &&
              'd-none'
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
      background: #c00ab5;
      color: #fff;
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
    color: #000;
    &:active {
      a {
        border: 1px solid #c00ab5;
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
