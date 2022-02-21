import React from 'react';
import ToggleChild from './ToggleChild';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import {
  policyChild,
  requirementChild,
  coveredChild,
  notCoveredChild,
  returnChild,
  supportChild,
} from './children';

export function ReturnsMobileView() {
  return (
    <Container>
      <ToggleChild heading="Return Policy" children={policyChild} />
      <ToggleChild heading="Return Requirement" children={requirementChild} />
      <ToggleChild heading="What is Covered ?" children={coveredChild} />
      <ToggleChild heading="What is not Covered ?" children={notCoveredChild} />
      <ToggleChild heading="How to Return" children={returnChild} />
      <ToggleChild heading="Support Channels" children={supportChild} />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  ${customMedia.greaterThan('medium')`
  display: none;
  `};
`;
