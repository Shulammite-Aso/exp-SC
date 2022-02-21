/**
 *
 * Midbar
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { H3 } from 'app/components/Typography/H3/H3';
import { Button } from 'app/components/Button/Button';
import { customMedia } from 'styles/media';

interface Props {
  content: {
    image: string;
    title: string;
    desc: string;
  };
}

export function ServiceCard({ content }: Props) {
  return (
    <Card>
      <Heading>{content.title}</Heading>
      <img src={content.image} alt={content.title} />
      <Description>{content.desc}</Description>
      <div>
        <ServiceBtn className="btn btn-primary"> Learn More </ServiceBtn>
      </div>
    </Card>
  );
}

const Card = styled.div`
  display: block;
  box-shadow: 0px 14.8849px 22.3273px rgba(142, 141, 208, 0.12);
  border-radius: 18.6061px;
  box-sizing: border-box;
  text-align: center;
  max-width: 330px;
  margin: 1rem;
  padding: 2.6rem 3rem;

  ${customMedia.lessThan('medium')`
   width: 100%;
  `};

  img {
    height: 188px;
  }
`;

const Heading = styled(H3)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
  color: ${p => p.theme.color.colorTextBold};
  margin-bottom: 2.2rem;
`;

const ServiceBtn = styled(Button)`
  height: 50px;
  align-content: center;
  width: 150px;
  margin: auto !important;
  background-color: Transparent !important;
  color: #c00ab5;
`;
