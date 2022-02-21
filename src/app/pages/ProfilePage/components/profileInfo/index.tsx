import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { PersonalInfoTab } from './PersonalInfoTab';
import { PasswordTab } from './PasswordTab';
import { customMedia } from 'styles/media';
import { H3 } from 'app/components/Typography/H3/H3';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const { t } = useTranslation();

  const [currentView, setCurrentView] = useState('personalInfo');

  const changeToPersonalInfoView = () => {
    setCurrentView('personalInfo');
  };

  const changeToPasswordView = () => {
    setCurrentView('password');
  };

  return (
    <Card>
      <Heading>{t(...messages.title())}</Heading>
      <Tabs>
        <div
          className={currentView === 'personalInfo' ? 'active_one' : ''}
          onClick={changeToPersonalInfoView}
        >
          {t(...messages.tabOne())}
        </div>
        <div
          className={currentView === 'password' ? 'active_one' : ''}
          onClick={changeToPasswordView}
        >
          {t(...messages.tabTwo())}
        </div>
      </Tabs>
      {currentView === 'personalInfo' ? (
        <PersonalInfoTab />
      ) : currentView === 'password' ? (
        <PasswordTab />
      ) : null}
    </Card>
  );
}

const Card = styled.div`
  border: 1px solid #f4f3fe;
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  border-radius: 10px;
  margin: 3rem auto;
  width: 80%;
  padding: 2.4rem 0.5rem;

  ${customMedia.greaterThan('xsm')`
  
  padding: 2rem;
  `};

  ${customMedia.greaterThan('medium')`
  width: 600px;
  margin: 3rem  auto;
  padding: 2.4rem;
  `};
`;

const Tabs = styled.div`
  //display: flex;
  text-align: center;
  margin-bottom: 2rem;

  div {
    color: ${p => p.theme.color.colorTextBold};
    cursor: pointer;
    font-size: 14px;
    line-height: 130%;
    display: inline-block;
    padding: 4px 1.2rem;
  }

  .active_one {
    border-bottom: 2px solid #c00ab5;
  }
`;

const Heading = styled(H3)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
