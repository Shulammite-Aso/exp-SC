import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

// import { messages } from './messages';
import { ReactComponent as GoogleIcon } from '../../assets/icons/google.svg';
import { OAuthBtn } from '../OAuthBtn/OAuthBtn';
interface Props {
  handleSuccess: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline,
  ) => Promise<void>;
  handleError: (error: any) => void;
  buttonText: string;
}

export const GoogleSigninBtn = memo(
  ({ handleSuccess, handleError, buttonText }: Props) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t, i18n } = useTranslation();

    const responseSuccess = async (
      response: GoogleLoginResponse | GoogleLoginResponseOffline,
    ) => {
      //   {
      //     "ya": "106439436040381084364",
      //     "$b": {
      //         "token_type": "Bearer",
      //         "access_token": "ya29.a0ARrdaM9md3H0_cX8sjDCeJOGyCyxNzRK_ci4DFG3wdGodyuWzTRn2lhE083Q8AGt_PBhUAcVqrqpt-l9vPFzpI50uy0vQSqv8oirF4Znr9PhmrfwwrpgAK3CBYZ-NbvPOpA_U4jbFWTrGluEr-k6iso1c-Sq",
      //         "scope": "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
      //         "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cAde5pwgZ4czHd4IR--glQWxu-9_A4TWwDlmA5aNIOepyNWSGcduGWvKmZj5suq86d2ZGFqw",
      //         "expires_in": 3599,
      //         "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0MTk2YWVlMTE5ZmUyMTU5M2Q0OGJmY2ZiNWJmMDAxNzdkZDRhNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ4NTc5MDQxNDczLTdhZ2V0OXNyZjZnZGtyaTFzcmtoMWpuMG5sOW83bHM4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ4NTc5MDQxNDczLTdhZ2V0OXNyZjZnZGtyaTFzcmtoMWpuMG5sOW83bHM4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2NDM5NDM2MDQwMzgxMDg0MzY0IiwiZW1haWwiOiJkYW1lZWltcGFjdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjBpVTVEYWdFdDE0TXhORW9jQ2E3dlEiLCJuYW1lIjoiSGFtZWVkIERhbWVlIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdobFh5NFo4aW1HcUtDN1BKankyODR6QUJPR0U0dDJOdGZBTklQRWl3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkhhbWVlZCIsImZhbWlseV9uYW1lIjoiRGFtZWUiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTYzMzYzMjExMSwiZXhwIjoxNjMzNjM1NzExLCJqdGkiOiIwNzE4ZDdiMDA4OWIyZTEyOGFmMjZlZmUyMWNlMDRjMGE0NmQ4YWM0In0.GO8-obYvnZkGsitlQL_NcOvwSd5abBjDwFWtnqRWbEVQGYkDs8Xl3kCK7VVMhhSFTynztFbCgcPCK5W_el8F7rulSOzFQQjkvWbwbtfIwmOUgdrB6zpfjJnRxcT2oghGxuA16KKwr68GbNS0hzLRHZIXjY511J232d4CM0hCwcYScrxmEcpggi0IhmMSFLCdzG48WOcj4awRQVFXsduciahJQYtDTr7BBxWWy-9m-lKff2T6xsSys73aBoCi_usuNP4dHRPY4x_wdyL7AGs_U1UtN8wYZn6bXZu-VVt1TG0eo5DnrukKac2uCbDaxyKsGU1nCUSbEqJ6ttmKjIlZlw",
      //         "session_state": {
      //             "extraQueryParams": {
      //                 "authuser": "0"
      //             }
      //         },
      //         "first_issued_at": 1633632108623,
      //         "expires_at": 1633635707623,
      //         "idpId": "google"
      //     },
      //     "dt": {
      //         "fT": "106439436040381084364",
      //         "Se": "Hameed Damee",
      //         "uU": "Hameed",
      //         "LS": "Damee",
      //         "PJ": "https://lh3.googleusercontent.com/a-/AOh14GhlXy4Z8imGqKC7PJjy284zABOGE4t2NtfANIPEiw=s96-c",
      //         "Ot": "dameeimpact@gmail.com"
      //     },
      //     "googleId": "106439436040381084364",
      //     "tokenObj": {
      //         "token_type": "Bearer",
      //         "access_token": "ya29.a0ARrdaM9md3H0_cX8sjDCeJOGyCyxNzRK_ci4DFG3wdGodyuWzTRn2lhE083Q8AGt_PBhUAcVqrqpt-l9vPFzpI50uy0vQSqv8oirF4Znr9PhmrfwwrpgAK3CBYZ-NbvPOpA_U4jbFWTrGluEr-k6iso1c-Sq",
      //         "scope": "email profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
      //         "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cAde5pwgZ4czHd4IR--glQWxu-9_A4TWwDlmA5aNIOepyNWSGcduGWvKmZj5suq86d2ZGFqw",
      //         "expires_in": 3599,
      //         "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0MTk2YWVlMTE5ZmUyMTU5M2Q0OGJmY2ZiNWJmMDAxNzdkZDRhNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ4NTc5MDQxNDczLTdhZ2V0OXNyZjZnZGtyaTFzcmtoMWpuMG5sOW83bHM4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ4NTc5MDQxNDczLTdhZ2V0OXNyZjZnZGtyaTFzcmtoMWpuMG5sOW83bHM4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2NDM5NDM2MDQwMzgxMDg0MzY0IiwiZW1haWwiOiJkYW1lZWltcGFjdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjBpVTVEYWdFdDE0TXhORW9jQ2E3dlEiLCJuYW1lIjoiSGFtZWVkIERhbWVlIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdobFh5NFo4aW1HcUtDN1BKankyODR6QUJPR0U0dDJOdGZBTklQRWl3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkhhbWVlZCIsImZhbWlseV9uYW1lIjoiRGFtZWUiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTYzMzYzMjExMSwiZXhwIjoxNjMzNjM1NzExLCJqdGkiOiIwNzE4ZDdiMDA4OWIyZTEyOGFmMjZlZmUyMWNlMDRjMGE0NmQ4YWM0In0.GO8-obYvnZkGsitlQL_NcOvwSd5abBjDwFWtnqRWbEVQGYkDs8Xl3kCK7VVMhhSFTynztFbCgcPCK5W_el8F7rulSOzFQQjkvWbwbtfIwmOUgdrB6zpfjJnRxcT2oghGxuA16KKwr68GbNS0hzLRHZIXjY511J232d4CM0hCwcYScrxmEcpggi0IhmMSFLCdzG48WOcj4awRQVFXsduciahJQYtDTr7BBxWWy-9m-lKff2T6xsSys73aBoCi_usuNP4dHRPY4x_wdyL7AGs_U1UtN8wYZn6bXZu-VVt1TG0eo5DnrukKac2uCbDaxyKsGU1nCUSbEqJ6ttmKjIlZlw",
      //         "session_state": {
      //             "extraQueryParams": {
      //                 "authuser": "0"
      //             }
      //         },
      //         "first_issued_at": 1633632108623,
      //         "expires_at": 1633635707623,
      //         "idpId": "google"
      //     },
      //     "tokenId": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY0MTk2YWVlMTE5ZmUyMTU5M2Q0OGJmY2ZiNWJmMDAxNzdkZDRhNGQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODQ4NTc5MDQxNDczLTdhZ2V0OXNyZjZnZGtyaTFzcmtoMWpuMG5sOW83bHM4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODQ4NTc5MDQxNDczLTdhZ2V0OXNyZjZnZGtyaTFzcmtoMWpuMG5sOW83bHM4LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2NDM5NDM2MDQwMzgxMDg0MzY0IiwiZW1haWwiOiJkYW1lZWltcGFjdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjBpVTVEYWdFdDE0TXhORW9jQ2E3dlEiLCJuYW1lIjoiSGFtZWVkIERhbWVlIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdobFh5NFo4aW1HcUtDN1BKankyODR6QUJPR0U0dDJOdGZBTklQRWl3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkhhbWVlZCIsImZhbWlseV9uYW1lIjoiRGFtZWUiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTYzMzYzMjExMSwiZXhwIjoxNjMzNjM1NzExLCJqdGkiOiIwNzE4ZDdiMDA4OWIyZTEyOGFmMjZlZmUyMWNlMDRjMGE0NmQ4YWM0In0.GO8-obYvnZkGsitlQL_NcOvwSd5abBjDwFWtnqRWbEVQGYkDs8Xl3kCK7VVMhhSFTynztFbCgcPCK5W_el8F7rulSOzFQQjkvWbwbtfIwmOUgdrB6zpfjJnRxcT2oghGxuA16KKwr68GbNS0hzLRHZIXjY511J232d4CM0hCwcYScrxmEcpggi0IhmMSFLCdzG48WOcj4awRQVFXsduciahJQYtDTr7BBxWWy-9m-lKff2T6xsSys73aBoCi_usuNP4dHRPY4x_wdyL7AGs_U1UtN8wYZn6bXZu-VVt1TG0eo5DnrukKac2uCbDaxyKsGU1nCUSbEqJ6ttmKjIlZlw",
      //     "accessToken": "ya29.a0ARrdaM9md3H0_cX8sjDCeJOGyCyxNzRK_ci4DFG3wdGodyuWzTRn2lhE083Q8AGt_PBhUAcVqrqpt-l9vPFzpI50uy0vQSqv8oirF4Znr9PhmrfwwrpgAK3CBYZ-NbvPOpA_U4jbFWTrGluEr-k6iso1c-Sq",
      //     "profileObj": {
      //         "googleId": "106439436040381084364",
      //         "imageUrl": "https://lh3.googleusercontent.com/a-/AOh14GhlXy4Z8imGqKC7PJjy284zABOGE4t2NtfANIPEiw=s96-c",
      //         "email": "dameeimpact@gmail.com",
      //         "name": "Hameed Damee",
      //         "givenName": "Hameed",
      //         "familyName": "Damee"
      //     }
      // }
      // const {
      //   profileObj: { email, familyName, givenName, name, googleId, imageUrl },
      // } = response;
      // const userData = {
      //   formattedFirstName: givenName,
      //   formattedLastName: familyName,
      //   formattedfullNames: name,
      //   oauthId: googleId,
      //   email: email,
      //   oauthAvatar: imageUrl,
      //   oauthType: 'google',
      // };

      await handleSuccess(response);
    };

    const responseError = error => {
      handleError(error);
    };

    return (
      <GoogleLogin
        clientId={
          '848579041473-7aget9srf6gdkri1srkh1jn0nl9o7ls8.apps.googleusercontent.com'
        }
        render={renderProps => (
          <OAuthBtn
            onClick={renderProps.onClick}
            type="button"
            className="btn btn-outline-secondary"
          >
            <GoogleIcon /> <span>{buttonText ? buttonText : 'Signin'}</span>
          </OAuthBtn>
        )}
        onSuccess={responseSuccess}
        onFailure={responseError}
        cookiePolicy="single_host_origin"
      />
    );
  },
);
