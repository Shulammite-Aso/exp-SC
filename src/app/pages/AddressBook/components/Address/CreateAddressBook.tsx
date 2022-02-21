import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { AddressForm } from './AddressForm';
import { H3 } from 'app/components/Typography/H3/H3';
import add from '../../assets/plus-icon.svg';
import { states } from './StatesData';
import { useDispatch, useSelector } from 'react-redux';
import { useAddressSlice } from '../../slice';
import { loadingSelector } from '../../slice/selectors';
import { Loader } from 'app/components/Loader';

export function CreateAddressBook({ changeView }) {
  //const mql = window.matchMedia('(max-width: 411px)');
  //const mobileDevice = mql.matches;
  interface StateProps {
    id: number;
    name: string;
    lgas: string[];
  }
  const [editItem, setEditItem] = useState('');
  const [stateLGAs, setStateLGAs] = useState<StateProps>();
  const itemToEdit = item => {
    setEditItem(item);
  };
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const { actions } = useAddressSlice();

  interface Address {
    address: string;
    state: string;
    city: string;
  }

  const [shippingAddress, setShippingAddress] = useState<Address>({
    address: '',
    state: '',
    city: '',
  });

  const handleShippingSubmit = (key: string, value: string) => {
    setShippingAddress({ ...shippingAddress, [key]: value });
  };
  // handle select lga
  const handleCitySelect = selectedState => {
    const selectedStateLGAs = states.find(state => {
      return state.name === selectedState;
    });
    setStateLGAs(selectedStateLGAs);
  };

  // handle billing / shipping address submit
  const handleAdressSubmit = async e => {
    e.preventDefault();
    const addressBookData = { requestPayload: shippingAddress };
    const data = await dispatch(actions.addAddress(addressBookData));
    console.log('this data ==> ', data);
    changeView(1);
  };
  if (loading) return <Loader />;
  return (
    <Card>
      <Heading>Address Book</Heading>
      <div>
        {editItem === 'billingAddress' ? (
          <EditProfileItem>
            <AddressForm
              handleFormChange={handleShippingSubmit}
              handleAdressSubmit={handleAdressSubmit}
              handleCitySelect={handleCitySelect}
              setEditItem={setEditItem}
              stateLGAs={stateLGAs}
            />
          </EditProfileItem>
        ) : (
          <>
            <SavedAddress>
              <Address>
                <input type="radio" id="defaultAddress" />
                <label htmlFor="defaultAddress">Make Default Address</label>
                <p>23 Admiralty way, Slot, Ikorodu Garage. Lagos State.</p>
              </Address>
              <div>
                <p className="edit_address">Edit</p>
                <p className="delete_address">Delete</p>
              </div>
            </SavedAddress>
            <ProfileItem>
              <div>
                <p>Add Address</p>
                <p></p>
              </div>
              <div>
                <img
                  onClick={() => itemToEdit('billingAddress')}
                  src={add}
                  alt="add"
                />
              </div>
            </ProfileItem>
          </>
        )}
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
  padding: 1.7rem 0.7rem;

  ${customMedia.greaterThan('xsm')`
  
  padding: 2rem;
  `};

  ${customMedia.greaterThan('medium')`
  width: 600px;
  ${p => p.theme.direction['margin-left']}: 6rem;
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

const Heading = styled(H3)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SavedAddress = styled.div`
  display: none;
  justify-content: space-between;

  .edit_address {
    color: #c00ab5;
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
    margin: 1rem 0;
  }

  .delete_address {
    color: #f93232;
    cursor: pointer;
    font-size: 14px;
    line-height: 16px;
    margin: 1rem 0;
  }
`;

const Address = styled.div`
  background: rgba(246, 245, 255, 0.3);
  border-radius: 8px;
  padding: 1rem;
  width: 60%;

  label {
    ${p => p.theme.direction['margin-left']}: 6px;
  }

  p {
    color: ${p => p.theme.color.colorTextBold};
    font-size: 16px;
    line-height: 24px;
    margin-top: 1rem;
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
