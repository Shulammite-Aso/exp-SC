/**
 *
 * Footer
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { Topfooter } from './components/Topfooter/index';
import { Midfooter } from './components/Midfooter/index';
import { Bottomfooter } from './components/Bottomfooter/index';
import { customMedia } from 'styles/media';

interface Props {}

export const Footer = memo((props: Props) => {
  return (
    <Wrapper>
      <TopFooterWrap>
        <Topfooter />
      </TopFooterWrap>
      <MidfooterWrap>
        <Midfooter />
      </MidfooterWrap>
      <BottomfooterWrap>
        <Bottomfooter />
      </BottomfooterWrap>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  width: 100%;
  padding: 78px 120px 78px 120px;
  background: ${p => p.theme.color.colorEmptyStateBackground};

  ${customMedia.lessThan('small')`
  width: 100%;
  padding: 50px 30px 50px 30px;
  margin-bottom: 150px;
  `};
`;

const TopFooterWrap = styled.div`
  border-bottom: 2px solid;
  border-bottom-color: ${p => p.theme.color.borderBottom};

  ${customMedia.lessThan('medium')`
    border: none;
 `};
`;

const MidfooterWrap = styled.div`
  margin-bottom: 56px;
`;

const BottomfooterWrap = styled.div`
  border-top: 2px solid;
  border-top-color: ${p => p.theme.color.borderBottom};

  ${customMedia.lessThan('small')`
    border: none;
    margin-left: -13px;
 `};
`;
