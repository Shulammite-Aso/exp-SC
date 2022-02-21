import * as React from 'react';
import styled from 'styled-components/macro';
import { Helmet } from 'react-helmet-async';
import { Servicebar } from '../HomePage/components/Servicebar';
import { Topdeals } from '../HomePage/components/Topdeals';
import { TopCategories } from './components/TopCategories';
import { Campaigns } from './components/Campaigns';
import { Brandbar } from './components/Brandbar';
import { Banner } from 'app/components/Banner';

export function HomePage() {
  return (
    <Wrapper>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A AltMall homepage" />
      </Helmet>
      <Banner hasCarousel={true} />
      <Servicebar />
      <Topdeals />
      <TopCategories />
      <Banner hasCarousel={false} />
      <Campaigns />
      <Brandbar />
      {/* <RenderHomepageContentsHere /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
