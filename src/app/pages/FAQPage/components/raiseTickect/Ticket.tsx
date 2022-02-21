import React from 'react';
import { useState } from 'react';
import cancel from '../../assets/cancel.svg';
import upload from '../../assets/uploadFile.svg';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';

interface Props {
  title: string;
}

export default function Ticket({ title }: Props) {
  const [showTicketDescription, setShowTicketDescription] = useState(false);
  const provideTicketDescription = () => {
    setShowTicketDescription(!showTicketDescription);
  };
  return (
    <>
      <ListItem>
        <p onClick={provideTicketDescription} tabIndex={1}>
          {title}
        </p>
      </ListItem>
      {showTicketDescription ? (
        <Card>
          <img
            src={cancel}
            className="close-card"
            onClick={provideTicketDescription}
            alt="close"
          />
          <h6>Ticket Information</h6>
          <input type="text" placeholder="Subject" />
          <textarea
            name="ticket_description"
            id="ticket_description"
            placeholder="Description"
            cols={30}
            rows={10}
          ></textarea>
          <Upload>
            <img src={upload} alt="upload a file" />
            <span>Upload image to support your complaint </span>{' '}
            <span>(max 20MB)</span>
          </Upload>
          <Button onClick={provideTicketDescription}>Submit Ticket</Button>
        </Card>
      ) : null}
    </>
  );
}

const ListItem = styled.li`
  padding: 7px 0;
  cursor: pointer;

  p[tabindex]:focus {
    color: #c00ab5;
    outline: none;
  }
`;

const Card = styled.div`
  padding: 1rem;
  padding-top: 2.7rem;
  width: 360px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 13.5847px 20.377px rgba(142, 141, 208, 0.12);
  position: fixed;
  top: 120px;
  left: 12px;

  ${customMedia.greaterThan('medium')`
  right: 200px;
  width: 586px;
  `};

  .close-card {
    width: 22px;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  h6 {
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #212121;
  }

  input {
    background: #f7f7fd;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
    padding: 1rem;
    width: 100%;
  }

  textarea {
    border: none;
    background: #f7f7fd;
    border-radius: 4px;
    margin-top: 1rem;
    padding: 1rem;
    width: 100%;
  }
`;

const Upload = styled.div`
  margin: 1.6rem 0;
  img {
    width: 19.44px;
  }
  span:nth-child(2) {
    color: #777777;
    font-size: 14px;
    line-height: 130%;
    ${p => p.theme.direction['padding-left']}: 0.7rem;
  }

  span:nth-child(3) {
    color: #c00ab5;
    font-size: 14px;
    line-height: 130%;
    ${p => p.theme.direction['padding-left']}: 0.3rem;
  }
`;

const Button = styled.button`
  background: #c00ab5;
  border-radius: 4px;
  border: none;
  color: #ffffff;
  text-align: center;
  display: inline-block;
  padding: 0.8rem 0;
  ${p => p.theme.direction['margin-left']}: 20%;
  width: 200px;

  ${customMedia.greaterThan('medium')`
  ${p => p.theme.direction['margin-left']}: 30%;
  `};
`;
