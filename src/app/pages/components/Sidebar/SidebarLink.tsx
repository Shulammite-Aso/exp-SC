import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

interface Props {
  route: string;
  title: string;
}

export default function SideLink({ route, title }: Props) {
  return (
    <ListItem>
      <NavLink to={route} activeClassName="active">
        <div>
          <span>{title}</span>
        </div>
      </NavLink>
    </ListItem>
  );
}

const ListItem = styled.li`
  a {
    color: ${p => p.theme.color.colorTextBold};
    font-size: 18px;
    line-height: 140%;
    text-decoration: none;
  }

  a:hover {
    color: #c00ab5;
  }

  div {
    border: 1px solid #f4f3fe;
    padding: 1rem;
  }
  .active {
    div {
      border: 0;
      ${p => p.theme.direction['border-left']}: 2px solid #C00AB5;

      span {
        color: #c00ab5;
      }
    }
  }
`;
