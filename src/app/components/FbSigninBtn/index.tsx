import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
// import GoogleLogin, {
//   GoogleLoginResponse,
//   GoogleLoginResponseOffline,
// } from 'react-google-login';
import FacebookLogin, {
  ReactFacebookFailureResponse,
  ReactFacebookLoginInfo,
} from 'react-facebook-login/dist/facebook-login-render-props';

// import { messages } from './messages';
import { ReactComponent as FBIcon } from '../../assets/icons/facebook.svg';
import { OAuthBtn } from '../OAuthBtn/OAuthBtn';
interface Props {
  handleSuccess: (
    response: ReactFacebookLoginInfo | ReactFacebookFailureResponse,
  ) => Promise<void>;
  handleError: (error: any) => void;
  buttonText: string;
}

export const FBSigninBtn = memo(
  ({ handleSuccess, handleError, buttonText }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t, i18n } = useTranslation();

    const responseSuccess = async (
      response: ReactFacebookLoginInfo | ReactFacebookFailureResponse,
    ) => {
      if (response.status) {
        handleError('An error occured using facebook login please try again');
      } else {
        //   {
        //     "name": "Damilare Oyerinde Damee",
        //     "email": "drewillshine@yahoo.com",
        //     "picture": {
        //         "data": {
        //             "height": 50,
        //             "is_silhouette": false,
        //             "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3304354912912197&height=50&width=50&ext=1636223923&hash=AeTM1rWSPMeh_o0Di8A",
        //             "width": 50
        //         }
        //     },
        //     "first_name": "Damilare",
        //     "last_name": "Damee",
        //     "id": "3304354912912197",
        //     "accessToken": "EAAC8ceHkPeYBAEfUSgZACa0n9nh1sQwyBdtfW0e18Y3Bx5WFuZCMzl9VJ8a6ViHAKjBJLZA4ZAy6SeoJ94xUMZAFUQJ2TsFV80DnTN3t4F6HgTeFGtCRllM8icHdEd6GDSufSsXZBfNVRN7SN8hnzxVgRP2dKadsXcU4IZBUhne1NAeRbDQyTMQnhUnsbwZAh5ZBsLgVtEntOZC3rlFEE0mq9a",
        //     "userID": "3304354912912197",
        //     "expiresIn": 4878,
        //     "signedRequest": "GHWsOPcDhn5BqzDApOAbRhSMLNDu3jXJ5QlRiEaxjis.eyJ1c2VyX2lkIjoiMzMwNDM1NDkxMjkxMjE5NyIsImNvZGUiOiJBUURXU0d5LU5PY1JlU3dFVkpSdW5ieHRJYzFxZHFuXzlpVzdiUHFyNmJOZGNEZzZsWWFjeDdvM1ZuSW1kdERBUW5jVjdaVDNMeDE2eVQyaWN5bmFRcEEyUGlEeUZSZF81bjVKMzZJdGVxUVlSS2lQY0pZZkZpX0tsTlE4QldGSjhibkFkQ0lxeWZ1OV9pNkg2aWpFanZHQVM5bGZQNlJiMUdxSDJ2Vm9OeDhZOXVPMzFuZzRQaFlHUDZQTFNqd0pMaUIwVjdJMS1uWThiWHFoOE9FeTc1V3V2dFh0MXJhTU1aOGRDaE16ZU4xT01xTVlySWhiYVJqSE1Ia2tNWGVMbHF5aVBsTXQyNVhhWmV1VVZSOFhKMUZCcDdncXlWYlVYcGdRMHlsZGVYaUR3bFExamdHTFdNQkZKNkh3ODEtOXFvbm9rSlRVeUtjWFNCN0p2dmRYd294ZyIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjMzNjMxOTIyfQ",
        //     "graphDomain": "facebook",
        //     "data_access_expiration_time": 1641407922
        // }
        // =++++++++++++++++++++++++++
        // const {
        //   email,
        //   first_name,
        //   last_name,
        //   name,
        //   id,
        //   picture: {
        //     data: { url },
        //   },
        // } = response;
        // const userData = {
        //   formattedFirstName: first_name,
        //   formattedLastName: last_name,
        //   formattedfullNames: name,
        //   oauthId: id,
        //   email: email,
        //   oauthAvatar: url,
        //   oauthType: 'facebook',
        // };

        await handleSuccess(response);
      }
    };

    const responseError = (response: ReactFacebookFailureResponse) => {
      handleError(response);
    };

    return (
      <FacebookLogin
        appId={'207197307157990'}
        fields="name,email,picture,first_name,last_name"
        scope="public_profile"
        render={renderProps => (
          <OAuthBtn
            onClick={renderProps.onClick}
            type="button"
            className="btn btn-outline-secondary"
          >
            <FBIcon /> <span>{buttonText ? buttonText : 'Signin'}</span>
          </OAuthBtn>
        )}
        callback={responseSuccess}
        onFailure={responseError}
      />
    );
  },
);
