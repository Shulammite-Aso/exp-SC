import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { useTranslation } from 'react-i18next';
import { MainWrapper } from './layouts/MainWrapper';
import { MainRoutes } from './routes/MainRoutes';
import { useDispatch } from 'react-redux';
// import { authSelector } from './pages/auth/slice/selectors';
import { useAuthSlice } from './pages/auth/slice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export function App() {
  const { i18n } = useTranslation();
  const { actions } = useAuthSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getAuthState());
  }, [dispatch, actions]);
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - AltMall"
        defaultTitle="AltMall"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="An AltMall application" />
      </Helmet>
      <MainWrapper>
        <main>
          <MainRoutes />
        </main>
      </MainWrapper>
      <GlobalStyle />
    </BrowserRouter>
  );
}
