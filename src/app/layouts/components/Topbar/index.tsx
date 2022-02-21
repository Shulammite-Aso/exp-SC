import { Search } from 'app/components/Search';
import React, { memo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { customMedia } from 'styles/media';
import { TopbarCart } from './components/TopbarCart';
import { TopbarProfile } from './components/TopbarProfile';
import { TopbarSidebarButton } from './components/TopbarSidebarButton';
import { TopbarWishlist } from './components/TopbarWishlist/index';
import { useProductSlice } from 'app/pages/product/slice';
import { useDispatch } from 'react-redux';

interface Props {}

export const Topbar = memo((props: Props) => {
  const { t } = useTranslation();
  const { actions } = useProductSlice();
  const dispatch = useDispatch();
  const history = useHistory();

  const searchHandler = (form: { search: string }) => {
    history.push({
      pathname: '/products/search',
      search: `?q=${form.search}`,
      state: { query: form.search },
    });
    dispatch(
      actions.fetchProductsBySearch({
        page: 1,
        limit: 25,
        query: form.search,
      }),
    );
  };

  return (
    <Wrapper className="topbar">
      <Left>
        <TopbarSidebarButton />
        <Logo to="/" />
      </Left>
      <Right>
        <RightSearch>
          <Search
            placeholder={t(...messages.placeholder())}
            btnText={t(...messages.btnText())}
            submitAction={searchHandler}
          />
        </RightSearch>
        <RightOver>
          <TopbarProfile />
          <TopbarWishlist />
          <TopbarCart />
        </RightOver>
      </Right>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  top: 0;
  min-height: 82px;
  z-index: 101;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  background: ${p => p.theme.color.colorBackground};

  ${customMedia.lessThan('small')`
    min-height: 120px;
  `}
`;

const Left = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  ${p => p.theme.direction['left']}: 0px;
`;
const Right = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 93%;
  ${p => p.theme.direction['right']}: 0px;
  ${p => p.theme.direction['margin-right']}: 15px;

  ${customMedia.lessThan('small')`
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-end;
  `};

  ${customMedia.lessThan('xxsm')`
    justify-content: flex-end;
  `};

  ${customMedia.greaterThan('large')`
    width: 80%;
  `};
`;

const RightOver = styled.div`
  display: flex;
  flex: auto;
  justify-content: flex-end;

  ${customMedia.lessThan('small')`
    margin-top: 10px;
  `};
`;

const RightSearch = styled.div`
  margin: auto 15px;
  width: 90%;

  ${customMedia.lessThan('xmedium')`
    margin-right: 0;
  `};
  ${customMedia.lessThan('small')`
    margin-right: 0;
  `};

  ${customMedia.lessThan('xsm')`
    width: 83%;
  `}

  ${customMedia.greaterThan('large')`
    display: flex;
    justify-content: center;
  `}
`;

export const Logo = styled(Link)`
  width: 150px;
  height: 32px;
  margin: auto 0;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: left;
  background-size: contain;
  display: none;
  background-image: ${p => p.theme.color.logoImg};

  ${customMedia.greaterThan('large')`
    display: block;
  `};
`;
