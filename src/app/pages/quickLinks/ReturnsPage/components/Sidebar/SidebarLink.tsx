import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

interface Props {
  route: string;
  title: string;
}

export default function SideLink({ route, title }: Props) {
  return (
    <ListItem>
      <NavLink to={route} activeClassName="active">
        <span>{title}</span>
      </NavLink>
    </ListItem>
  );
}

const ListItem = styled.li`
  padding: 7px 0;
  a {
    color: #777777;
    font-size: 14px;
    line-height: 130%;
    text-decoration: none;
    &:hover {
      color: ${StyleConstants.COLOR_ACCENT};
    }
  }
`;
