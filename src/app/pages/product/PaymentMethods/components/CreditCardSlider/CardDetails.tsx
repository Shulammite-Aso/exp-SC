import React from 'react';
import styled from 'styled-components/macro';

interface Prop {
  cardImage: string;
}

export function CardDetails({ cardImage }: Prop) {
  return (
    <Container>
      <img src={cardImage} alt="card image" />
    </Container>
  );
}

const Container = styled.div`
  display: block;
  margin-bottom: 3.5rem;
`;
