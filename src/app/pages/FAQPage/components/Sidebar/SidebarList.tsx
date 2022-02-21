import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function SideList({ title, children }: Props) {
  return (
    <Side>
      <h3>{title}</h3>
      <ul>{children}</ul>
    </Side>
  );
}

const Side = styled.div`
  padding: 1rem;

  ul {
    list-style-type: none;
    padding: 5px 0;

    .active {
      color: #c00ab5;
      font-size: 14px;
      line-height: 130%;
      text-decoration: none;
    }
  }
`;
