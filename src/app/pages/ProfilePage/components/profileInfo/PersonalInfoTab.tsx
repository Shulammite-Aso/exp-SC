import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Button } from 'app/components/Button/Button';
import { EnterPassword } from './PopUpModals';
import { EnterVerificationCode } from './PopUpModals';
import edit from '../../assets/edit-icon.svg';
import add from '../../assets/plus-icon.svg';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useProfilePageSlice } from '../../slice';
import { loadingSelector } from '../../slice/selectors';
import { messageSelector } from '../../slice/selectors';
import { userSelector } from '../../slice/selectors';
import { passwordVerificationSelector } from '../../slice/selectors';
import { tokenSelector } from '../../slice/selectors';
import Notifications from 'app/components/Notification';
import { Loader } from 'app/components/Loader';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  birthday: string | number | Date;
  phone: string;
  two_factor_authentication: boolean;
};

export const PersonalInfoTab = memo(() => {
  const { t } = useTranslation();

  const [editItem, setEditItem] = useState('');
  const [showEnterPassword, setShowEnterPassword] = useState(false);
  const [showEnterCode, setShowEnterCode] = useState(false);
  const [password, setPassword] = useState('');
  const [editedData, setEditedData] = useState<any>();
  const [verificationCode, setVerificationCode] = useState();
  const [email, setEmail] = useState('');
  const [twoFactor, setTwoFactor] = useState<boolean>(false);

  const itemToEdit = item => {
    setEditItem(item);
  };

  const { actions } = useProfilePageSlice();
  const userCustomer = useSelector(userSelector);
  const loading = useSelector(loadingSelector);
  const message = useSelector(messageSelector);
  const isPasswordVerified = useSelector(passwordVerificationSelector);
  const token = useSelector(tokenSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getuser());
  }, [actions, dispatch]);

  useEffect(() => {
    if (isPasswordVerified === true) {
      dispatch(actions.updateProfile(editedData));
    }
  }, [actions, dispatch, editItem, editedData, isPasswordVerified]);

  const handleFactorChange = () => {
    setTwoFactor(!twoFactor);
    const formData = {
      two_factor_authentication: !twoFactor,
    };
    setShowEnterPassword(!showEnterPassword);
    setEditedData(formData);
  };

  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      birthday: '',
      phone: '',
      two_factor_authentication: false,
    },
    mode: 'all',
  });

  const onNameSubmit: SubmitHandler<FormValues> = form => {
    const formData = {
      first_name: form.first_name,
      last_name: form.last_name,
    };
    setShowEnterPassword(!showEnterPassword);
    setEditedData(formData);
  };

  const onErrors: SubmitErrorHandler<FormValues> = errors => {
    console.warn('errors >>>', errors);
  };

  // handle email verification
  const onEmailSubmit: SubmitHandler<FormValues> = form => {
    const formData = {
      email: form.email,
    };
    setEmail(form.email);
    dispatch(actions.sendOTP(formData));
  };

  // handle otp onchange
  const handleOTPOnchange = e => {
    setVerificationCode(e.target.value);
  };
  // handle email verification2
  const verifyOTP = e => {
    e.preventDefault();
    const formData = {
      email: email,
      otp: verificationCode,
      token: token,
    };
    dispatch(actions.verifyOTP(formData));
    setShowEnterCode(false);
  };

  const onDOBSubmit: SubmitHandler<FormValues> = form => {
    const formData = {
      dob: form.birthday,
    };
    setShowEnterPassword(!showEnterPassword);
    setEditedData(formData);
    // console.log('Updated DOB:', formData);
  };

  const onPhoneNumberSubmit: SubmitHandler<FormValues> = form => {
    const formData = {
      phone: form.phone,
    };
    setShowEnterPassword(!showEnterPassword);
    setEditedData(formData);
  };

  // get user Password
  const handleUserPassordOnchange = e => {
    setPassword(e.target.value);
  };

  // handle Password Verification
  const handlePasswordVerification = e => {
    e.preventDefault();
    const verificationDetails = {
      password: password,
    };
    dispatch(actions.verifyPassword(verificationDetails));
    setShowEnterPassword(false);
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div>
        {editItem === 'fullname' ? (
          <EditProfileItem>
            <form onSubmit={handleSubmit(onNameSubmit, onErrors)}>
              <input
                {...register('first_name')}
                placeholder="First name"
                type="text"
                id="first_name"
                name="first_name"
              />
              <input
                {...register('last_name')}
                placeholder="Last name"
                type="text"
                id="last_name"
                name="last_name"
              />
              <FormBottom>
                <p></p>
                <ActionButtons>
                  <CancelButton onClick={() => setEditItem('cancel')}>
                    {t(...messages.btnCancel())}
                  </CancelButton>
                  <PrimaryActionButton
                    type="submit"
                    className="btn btn-primary"
                  >
                    {t(...messages.btnSave())}
                  </PrimaryActionButton>
                </ActionButtons>
              </FormBottom>
            </form>
          </EditProfileItem>
        ) : (
          userCustomer && (
            <ProfileItem>
              <div>
                <p>{t(...messages.fullname())}</p>
                <p>
                  {' '}
                  {userCustomer.first_name} {} {userCustomer.last_name}
                </p>
              </div>
              <div>
                <img
                  onClick={() => itemToEdit('fullname')}
                  src={edit}
                  alt="edit"
                />
              </div>
            </ProfileItem>
          )
        )}
      </div>

      <div>
        {editItem === 'email' ? (
          <EditProfileItem>
            <form onSubmit={handleSubmit(onEmailSubmit, onErrors)}>
              <input
                {...register('email')}
                placeholder="Email"
                type="email"
                id="email"
                name="email"
              />
              <FormBottom>
                <p>{t(...messages.willEmailCode())}</p>

                <ActionButtons>
                  <CancelButton onClick={() => setEditItem('cancel')}>
                    {t(...messages.btnCancel())}
                  </CancelButton>
                  <PrimaryActionButton
                    onClick={e => {
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
          userCustomer && (
            <ProfileItem>
              <div>
                <p>{t(...messages.email())}</p>
                <p>{userCustomer.email ? userCustomer.email : 'Email'}</p>
                <p>
                  For extra security <span>verify now</span>
                </p>
              </div>
              <div>
                <img
                  onClick={() => itemToEdit('email')}
                  src={userCustomer.email ? edit : add}
                  alt="edit"
                />
              </div>
            </ProfileItem>
          )
        )}
      </div>

      <div>
        {editItem === 'dateOfBirth' ? (
          <EditProfileItem>
            <form onSubmit={handleSubmit(onDOBSubmit, onErrors)}>
              <input
                {...register('birthday')}
                type="date"
                id="birthday"
                name="birthday"
              />
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
          userCustomer && (
            <ProfileItem>
              <div>
                <p>Date of Birth</p>
                <p>{userCustomer.dob ? userCustomer.dob : 'Date of birth'}</p>
              </div>
              <div>
                <img
                  onClick={() => itemToEdit('dateOfBirth')}
                  src={userCustomer.dob ? edit : add}
                  alt="add"
                />
              </div>
            </ProfileItem>
          )
        )}
      </div>

      <div>
        {editItem === 'phone' ? (
          <EditProfileItem>
            <form onSubmit={handleSubmit(onPhoneNumberSubmit, onErrors)}>
              <input
                {...register('phone')}
                placeholder="Phone number"
                type="text"
                id="phone"
                name="phone"
              />
              <FormBottom>
                <p>{t(...messages.willTextCode())}</p>
                <ActionButtons>
                  <CancelButton onClick={() => setEditItem('cancel')}>
                    {t(...messages.btnCancel())}
                  </CancelButton>
                  <PrimaryActionButton className="btn btn-primary">
                    {t(...messages.btnTextMe())}
                  </PrimaryActionButton>
                </ActionButtons>
              </FormBottom>
            </form>
          </EditProfileItem>
        ) : (
          userCustomer && (
            <ProfileItem>
              <div>
                <p>Phone numbers</p>
                <p>
                  {userCustomer.phone ? userCustomer.phone : 'Phone Number'}
                </p>
              </div>
              <div>
                <img
                  onClick={() => itemToEdit('phone')}
                  src={userCustomer.phone ? edit : add}
                  alt="add"
                />
              </div>
            </ProfileItem>
          )
        )}
      </div>

      <div>
        {userCustomer && (
          <ProfileItem>
            <p>2FA</p>

            <Toggle
              {...register('two_factor_authentication')}
              icons={false}
              className="custom-classname"
              defaultChecked={
                userCustomer.two_factor_authentication ? true : false
              }
              onChange={handleFactorChange}
              name="two_factor_authentication"
              value={userCustomer.two_factor_authentication ? true : false}
            />
          </ProfileItem>
        )}
      </div>
      {showEnterPassword ? (
        <EnterPassword
          handleUserPassordOnchange={handleUserPassordOnchange}
          handlePasswordVerification={handlePasswordVerification}
          setShowEnterPassword={setShowEnterPassword}
          showEnterPassword={showEnterPassword}
        />
      ) : null}
      {showEnterCode ? (
        <EnterVerificationCode
          handleOTPOnchange={handleOTPOnchange}
          verifyOTP={verifyOTP}
          onEmailSubmit={onEmailSubmit}
        />
      ) : null}
      {message && (
        <Notifications
          type={message.includes('uccess') ? 'success' : 'error'}
          message={message}
        />
      )}
    </>
  );
});

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
