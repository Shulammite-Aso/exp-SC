/**
 *
 * Bottomfooter
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
// import { customMedia } from 'styles/media';
// import { Link } from 'react-router-dom';

// Social Media Icons for the Footer
import twitterIcon from '../../assets/twitter.svg';
import facebookIcon from '../../assets/facebook.svg';
import instagramIcon from '../../assets/instagram.svg';
import linkedinIcon from '../../assets/linkedin.svg';

interface Props {}

export const Bottomfooter = memo((props: Props) => {
  return (
    <Div>
      <div>
        <T>Copyrights 2021 All Rights Reserved. Altmall.</T>
      </div>
      <SocialIcons>
        <img src={facebookIcon} alt="facebook" />
        <img src={instagramIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={linkedinIcon} alt="" />
      </SocialIcons>
    </Div>
  );
});

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    padding-top: 53px;
  }
`;

const T = styled.p`
  //display: block;
  font-size: 20px;
  line-height: 29px;
  font-weight: 400;
  color: ${p => p.theme.color.colorText};
  ${p => p.theme.direction['margin-right']}: 2rem;
`;

const SocialIcons = styled.div`
  width: 190px;
  img {
    display: inline-block;
    width: 33px;
    margin: 0 0.4rem;
  }
`;
