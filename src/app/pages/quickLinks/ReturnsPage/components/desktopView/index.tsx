import React from 'react';
import Sidebar from '../Sidebar';
import { Route, Switch } from 'react-router-dom';
import ReturnPolicy from '../ReturnPolicy';
import ReturnRequirements from '../ReturnRequirements';
import WhatIsCovered from '../WhatIsCovered';
import WhatIsNotCovered from '../WhatIsNotCovered';
import HowToReturn from '../HowToReturn';
import SupportChannels from '../SupportChannels';
import styled from 'styled-components';
import { customMedia } from 'styles/media';

export function ReturnsDesktopView() {
  return (
    <Wrapper>
      <Sidebar />
      <Switch>
        <Route path="/company/returns/policy">
          <ReturnPolicy />
        </Route>
        <Route path="/company/returns/requirements">
          <ReturnRequirements />
        </Route>
        <Route path="/company/returns/what-is-covered">
          <WhatIsCovered />
        </Route>
        <Route path="/company/returns/what-is-not-covered">
          <WhatIsNotCovered />
        </Route>
        <Route path="/company/returns/how-to-return">
          <HowToReturn />
        </Route>
        <Route path="/company/returns/support">
          <SupportChannels />
        </Route>
      </Switch>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 12px;
  margin-top: 75px;
  display: flex;
  ${p => p.theme.direction['padding-left']}: 3rem;
  ${customMedia.lessThan('small')`
  display: none;
  `};
`;
