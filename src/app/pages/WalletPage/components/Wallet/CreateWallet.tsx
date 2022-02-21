import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Button } from 'app/components/Button/Button';
import edit from '../../assets/edit-icon.svg';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export function CreateWallet({ changeView }) {
  const { t } = useTranslation();

  const mql = window.matchMedia('(max-width: 411px)');
  const mobileDevice = mql.matches;

  const [editItem, setEditItem] = useState('');
  const [showEnterPassword, setShowEnterPassword] = useState(false);
  const [showEnterCode, setShowEnterCode] = useState(false);

  const itemToEdit = item => {
    setEditItem(item);
  };

  return (
    <Card>
      <div>
        {editItem === 'fullname' ? (
          <EditProfileItem>
            <form action="">
              <input
                placeholder="First name"
                type="text"
                id="first_name"
                name="first_name"
              />
              <input
                placeholder="Last name"
                type="text"
                id="last_name"
                name="last_name"
              />
              <FormBottom>
                <p></p>
                <ActionButtons>
                  <CancelButton>{t(...messages.btnCancel())}</CancelButton>
                  <PrimaryActionButton
                    onClick={e => {
                      e.preventDefault();
                      setShowEnterPassword(!showEnterPassword);
                    }}
                    className="btn btn-primary"
                  >
                    {t(...messages.btnSave())}
                  </PrimaryActionButton>
                </ActionButtons>
              </FormBottom>
            </form>
          </EditProfileItem>
        ) : (
          <ProfileItem>
            <div>
              <p>{t(...messages.fullname())}</p>
              <p>Oluwaseun Akande</p>
            </div>
            <div>
              <img
                onClick={() => itemToEdit('fullname')}
                src={edit}
                alt="edit"
              />
            </div>
          </ProfileItem>
        )}
      </div>

      <div>
        {editItem === 'email' ? (
          <EditProfileItem>
            <form action="">
              <input placeholder="Email" type="email" id="email" name="email" />
              <FormBottom>
                <p>{t(...messages.willEmailCode())}</p>

                <ActionButtons>
                  <CancelButton>{t(...messages.btnCancel())}</CancelButton>
                  <PrimaryActionButton
                    onClick={e => {
                      e.preventDefault();
                      setShowEnterCode(!showEnterCode);
                    }}
                    className="btn btn-primary"
                  >
                    {t(...messages.btnSendEmail())}
                  </PrimaryActionButton>
                </ActionButtons>
              </FormBottom>
            </form>
          </EditProfileItem>
        ) : (
          <ProfileItem>
            <div>
              <p>{t(...messages.email())}</p>
              {mobileDevice ? (
                <p>
                  {(() => {
                    const email = 'oluwaseunakkande@gmail.com';
                    return email.length > 18
                      ? email.slice(0, 18) + '...'
                      : email;
                  })()}
                </p>
              ) : (
                <p>oluwaseunakkande@gmail.com</p>
              )}

              <p>
                For extra security <span>verify now</span>
              </p>
            </div>
            <div>
              <img onClick={() => itemToEdit('email')} src={edit} alt="edit" />
            </div>
          </ProfileItem>
        )}
      </div>

      <div>
        {editItem === 'dateOfBirth' ? (
          <EditProfileItem>
            <form action="">
              <input type="date" id="birthday" name="birthday" />
              <FormBottom>
                <p></p>
                <ActionButtons>
                  <CancelButton>{t(...messages.btnCancel())}</CancelButton>
                  <PrimaryActionButton className="btn btn-primary">
                    {t(...messages.btnSave())}
                  </PrimaryActionButton>
                </ActionButtons>
              </FormBottom>
            </form>
          </EditProfileItem>
        ) : (
          <ProfileItem>
            <div>
              <p>Date of Birth</p>
              <p></p>
            </div>
            <div>
              <img
                onClick={() => itemToEdit('dateOfBirth')}
                src={edit}
                alt="add"
              />
            </div>
          </ProfileItem>
        )}
      </div>

      <div>
        {editItem === 'phone' ? (
          <EditProfileItem>
            <form action="">
              <input
                placeholder="Phone number"
                type="text"
                id="phone"
                name="phone"
              />
              <FormBottom>
                <p>{t(...messages.willTextCode())}</p>
                <ActionButtons>
                  <CancelButton>{t(...messages.btnCancel())}</CancelButton>
                  <PrimaryActionButton className="btn btn-primary">
                    {t(...messages.btnTextMe())}
                  </PrimaryActionButton>
                </ActionButtons>
              </FormBottom>
            </form>
          </EditProfileItem>
        ) : (
          <ProfileItem>
            <div>
              <p>Phone numbers</p>
              <p></p>
            </div>
            <div>
              <img onClick={() => itemToEdit('phone')} src={edit} alt="add" />
            </div>
          </ProfileItem>
        )}
      </div>

      <div className="continue" onClick={() => changeView(3)}>
        Continue
      </div>
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
  margin-left: 6rem;
  padding: 2.4rem;
  `};

  .continue {
    color: #c00ab5;
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    text-align: right;
  }
`;

const ProfileItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  p:nth-child(1) {
    color: ${p => p.theme.color.colorTextLightGray};
    font-size: 14px;
    margin-bottom: 0.6rem;
  }

  p:nth-child(2) {
    color: ${p => p.theme.color.colorTextBold};
    font-size: 15px;
    overflow: ellipsis;
    //white-space: nowrap;
  }

  p:nth-child(3) {
    color: ${p => p.theme.color.colorTextLightGray};
    font-size: 15px;
  }

  span {
    color: #c00ab5;
  }

  img {
    width: 32px;
    height: 32px;
  }
`;
const EditProfileItem = styled.div`
  margin: 8px 0;

  form {
    input {
      background: #f7f7fd;
      border-radius: 4px;
      border: none;
      display: block;
      margin-bottom: 1.4rem;
      width: 100%;
      outline: none;
      padding: 1.1rem 0.7rem;
    }

    input:focus {
      outline: none;
    }
  }
`;
const FormBottom = styled.div`
  ${customMedia.greaterThan('medium')`
  display: flex;
  justify-content: space-between;

  p {
    width: 50%
  }
  `};
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  ${customMedia.lessThan('medium')`
    margin-top: 0.8rem;
  `};
`;

const PrimaryActionButton = styled(Button)`
  height: 34px;
  //width: 80px;
`;

const CancelButton = styled(Button)`
  //margin: 8px 0;
  border: none;
  color: ${p => p.theme.color.colorTextBold};
  background-color: ${p => p.theme.color.colorBackground};
  height: 34px;
  // width: 140px;
`;
