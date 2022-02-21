import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import EmptyBook from './EmptyBook';
import AddressList from './AddressList';
import { CreateAddressBook } from './CreateAddressBook';
import { messageSelector } from '../../slice/selectors';
import Notifications from 'app/components/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { useAddressSlice } from '../../slice';
import { userSelector } from '../../slice/selectors';
import { loadingSelector } from '../../slice/selectors';
import { addressListSelector } from '../../slice/selectors';
import { Loader } from 'app/components/Loader';
export default function Address() {
  const dispatch = useDispatch();
  const { actions } = useAddressSlice();
  const [viewPage, SetViewPage] = useState(1);
  const message = useSelector(messageSelector);
  const user = useSelector(userSelector);
  const addressList = useSelector(addressListSelector);
  const loading = useSelector(loadingSelector);

  const changeView = page => {
    SetViewPage(page);
  };

  useEffect(() => {
    const getAddressList = async () => {
      await dispatch(actions.getAddressList());
    };
    getAddressList();
  }, [actions, dispatch]);

  if (loading) return <Loader />;

  return (
    <Container>
      {viewPage === 1 ? (
        addressList.length >= 1 ? (
          <AddressList user={user} changeView={changeView} />
        ) : (
          <EmptyBook changeView={changeView} />
        )
      ) : viewPage === 2 ? (
        <CreateAddressBook changeView={changeView} />
      ) : null}
      {message ? (
        <Notifications
          type={message.includes('successfully') ? 'success' : 'error'}
          message={message}
        />
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
  ${customMedia.greaterThan('medium')`
  //${p => p.theme.direction['margin-left']}: 3rem;
  margin: 3rem auto;
  `};
`;
