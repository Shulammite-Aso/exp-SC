import React from 'react';
import styled from 'styled-components/macro';

interface Prop {
  selectStyle: string;
  location: string;
  delivered: string;
}

export function DeliveryStatus({ selectStyle, location, delivered }: Prop) {
  return (
    <Container>
      <DotIndicator>
        <div className={selectStyle + ' ' + delivered}></div>
      </DotIndicator>
      <StatusDescription>
        <p>{location}</p>
        <p>{''}</p>
      </StatusDescription>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-bottom: 4.7rem;
`;

const DotIndicator = styled.div`
  margin-top: 4px;
  position: relative;
  z-index: 2;

  .delivered {
    width: 23.59px;
    height: 23.59px;
    border-radius: 1rem;
  }

  .notDelivered {
    width: 19px;
    height: 19px;
    border-radius: 0.8rem;
    ${p => p.theme.direction['margin-left']}: 3px;
  }

  .fullfiled {
    background: #c00ab5;
    border: 3px solid #f5a4ef;
  }

  .NotFullfiled {
    background: #c5c0db;
    //border: 3px solid #f7f7fd;
    border: 3px solid #e9cce7;
  }
`;

const StatusDescription = styled.div`
  ${p => p.theme.direction['margin-left']}: 2rem;

  p:nth-child(2) {
    color: ${p => p.theme.color.colorTextBold};
  }
`;
