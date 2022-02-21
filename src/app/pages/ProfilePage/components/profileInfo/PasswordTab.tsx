import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { Button } from 'app/components/Button/Button';
import hiddenPassword from '../../assets/hidden-password.svg';
import edit from '../../assets/edit-icon.svg';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import { useProfilePageSlice } from '../../slice';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from '../../slice/selectors';
import { loadingSelector } from '../../slice/selectors';
import { messageSelector } from '../../slice/selectors';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import Notifications from 'app/components/Notification';
import { Loader } from 'app/components/Loader';

type FormValues = {
  password: string;
  newPassword: string;
};

export function PasswordTab() {
  const { t } = useTranslation();

  const [editItem, setEditItem] = useState('');

  const itemToEdit = item => {
    setEditItem(item);
  };

  const [showPassword, setShowPassword] = useState(false);
  const { actions } = useProfilePageSlice();
  const user = useSelector(profileSelector);
  const loading = useSelector(loadingSelector);
  const message = useSelector(messageSelector);

  const dispatch = useDispatch();

  const handlePasswordReset = formData => {
    console.log(message);
    console.log(loading);
    const data = dispatch(actions.changePassword(formData));
    console.log('Updated>>>', data);
    setEditItem('');
  };

  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      password: '',
      newPassword: '',
    },
    mode: 'all',
  });

  const onSubmit: SubmitHandler<FormValues> = form => {
    const formData = {
      ...user?.user,
      password: form.password,
      newPassword: form.newPassword,
    };

    handlePasswordReset(formData);
  };

  const onErrors: SubmitErrorHandler<FormValues> = errors => {
    console.warn('errors >>>', errors);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        {editItem === 'fullname' ? (
          <EditProfileItem>
            <form onSubmit={handleSubmit(onSubmit, onErrors)}>
              <div className="input_container">
                <input
                  {...register('password')}
                  placeholder="Current Password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                />

                <div
                  className="hide_or_show"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img src={hiddenPassword} alt="hide or show password" />
                </div>
              </div>
              <div className="input_container">
                <input
                  {...register('newPassword')}
                  placeholder="New Password"
                  type={showPassword ? 'text' : 'password'}
                  name="newPassword"
                  id="password"
                />

                <div
                  className="hide_or_show"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <img src={hiddenPassword} alt="hide or show password" />
                </div>
              </div>

              <FormBottom>
                <p></p>
                <ActionButtons>
                  <CancelButton onClick={() => setEditItem('cancel')}>
                    {t(...messages.btnCancel())}
                  </CancelButton>
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
              <p>Password</p>
              <p>.......</p>
            </div>
            <div>
              <img
                onClick={() => itemToEdit('fullname')}
                src={edit}
                alt="edit"
              />
            </div>
            {message ? (
              <Notifications
                type={message.includes('successfully') ? 'success' : 'error'}
                message={message}
              />
            ) : (
              <></>
            )}
          </ProfileItem>
        )}
      </div>
    </>
  );
}

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
  }

  p:nth-child(3) {
    color: ${p => p.theme.color.colorTextLightGray};
    font-size: 15px;
  }

  span {
    color: #c00ab5;
  }

  img {
    cursor: pointer;
    width: 32px;
    height: 32px;
  }
`;
const EditProfileItem = styled.div`
  margin: 8px 0;

  form {
    .input_container {
      width: 100%;
      input {
        background: #f7f7fd;
        border-radius: 4px;
        border: none;
        //display: inline-block;
        margin-bottom: 1.4rem;
        outline: none;
        padding: 1.1rem 0.7rem;
        width: 88%;
      }

      input:focus {
        outline: none;
      }

      .hide_or_show {
        background: #f7f7fd;
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        display: inline-block;
        padding: 0.91rem 0.7rem;
        cursor: pointer;
      }
    }
  }
`;
const FormBottom = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    width: 50%;
  }
`;

const ActionButtons = styled.div`
  display: flex;
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
