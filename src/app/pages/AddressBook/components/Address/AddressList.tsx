import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import { Button } from 'app/components/Button/Button';
import { H2 } from 'app/components/Typography/H2/H2';
import { StyleConstants } from 'styles/StyleConstants';
import { useDispatch } from 'react-redux';
import { useAddressSlice } from '../../slice';

type AddressListProps = {
  changeView: (e: number) => void;
  user: any;
};

export default function AddressList({ changeView, user }: AddressListProps) {
  const dispatch = useDispatch();
  const { actions } = useAddressSlice();
  const [editableCustomerAddress, setEditableCustomerAddress] = useState<
    any | null
  >(null);
  const [radioIsChecked, setRadioIsChecked] = useState<number>();

  const makeEditable = (address: any) => {
    setEditableCustomerAddress(address);
  };

  // cancel editing
  const cancelPersonalInfoEdit = () => {
    setEditableCustomerAddress(null);
  };

  const saveEditedAddress = async id => {
    const savedAddress = {
      address: editableCustomerAddress.address,
    };
    const savedAddressDetails = {
      requestPayload: savedAddress,
      id,
    };
    const data = await dispatch(actions.editAddress(savedAddressDetails));
    console.log('this data ==> ', data);
  };

  // make default
  const selectAddress = id => {
    setRadioIsChecked(id);
  };

  // handle edit onchange
  const handleAddressChange = (id, updatedField): void => {
    setEditableCustomerAddress({
      ...editableCustomerAddress,
      ...updatedField,
    });
  };

  // delete address
  const handleDeleteAddress = async id => {
    const deletedAddress = await dispatch(actions.deleteAddress(id));
    console.log(deletedAddress);
  };
  return (
    <Container>
      <Heading> Address Book</Heading>
      {user?.address_list.map(savedAddress => {
        const isBeingEdited = savedAddress._id === editableCustomerAddress?._id;
        return (
          <Card key={savedAddress._id}>
            <div className="saved-address-container">
              <CardHeading>
                <div
                  onClick={() => selectAddress(savedAddress._id)}
                  className={
                    radioIsChecked === savedAddress._id
                      ? 'checked-radio'
                      : 'radio-check'
                  }
                ></div>
                <p>Make Default Address</p>
              </CardHeading>
              <p className="customerName">
                {user.first_name} {user.last_name}
              </p>
              <textarea
                rows={4}
                value={
                  isBeingEdited
                    ? editableCustomerAddress.address
                    : savedAddress.address
                }
                name="address"
                disabled={!isBeingEdited}
                onChange={e =>
                  handleAddressChange(savedAddress.id, {
                    address: e.target.value,
                  })
                }
              />
              <textarea
                rows={4}
                disabled={!isBeingEdited}
                value={
                  isBeingEdited
                    ? editableCustomerAddress.phone
                    : savedAddress.phone
                }
                name="phone"
                onChange={e =>
                  handleAddressChange(savedAddress.id, {
                    phone: e.target.value,
                  })
                }
              />
            </div>
            <div className="edit-cta-container">
              <Button
                className={!isBeingEdited ? 'edit-btn' : 'edit'}
                onClick={() => makeEditable(savedAddress)}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 12,
                  }}
                >
                  Edit
                </span>
              </Button>
              <Button
                className={!isBeingEdited ? 'save' : 'save-btn'}
                onClick={() => saveEditedAddress(savedAddress._id)}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 12,
                  }}
                >
                  Save
                </span>
              </Button>
              <Button
                className={!isBeingEdited ? 'cancel' : 'cancel-btn'}
                onClick={() => cancelPersonalInfoEdit()}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 12,
                  }}
                >
                  Cancel
                </span>
              </Button>
              <Button
                className="delete"
                onClick={() => handleDeleteAddress(savedAddress._id)}
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 12,
                  }}
                >
                  Delete
                </span>
              </Button>
            </div>
          </Card>
        );
      })}

      <div>
        <ActionButton
          className="btn-outline-primary"
          onClick={() => changeView(2)}
        >
          + Add Address
        </ActionButton>
      </div>
    </Container>
  );
}

const Container = styled.div`
  color: ${p => p.theme.color.colorTextBold};
  text-align: center;
  background-color: ${p => p.theme.color.colorEmptyStateBackground};
  /* border-radius: 30px; */
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  margin: 0 auto 3rem;
  padding: 37px 49px;
  width: 590px;
  max-width: 638px;
  ${customMedia.lessThan('xsm')`
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  width: 100%;
  `};

  ${customMedia.lessThan('small')`
   padding-bottom: 4rem;
  padding-left: 4rem;
  padding-right: 4rem;
  width: 100%;
  `};
`;
const Card = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 20px 0;
  ${customMedia.lessThan('xsm')`
  flex-direction: column;
  `};

  ${customMedia.lessThan('small')`
 flex-direction: column;
  `};
  .customerName {
    font-weight: 700;
    color: ${p => p.theme.color.colorTextLightGray};
    font-size: 15px;
  }
  .saved-address-container {
    display: flex;
    flex-direction: column;
    width: 342px;
    height: 202px;
    text-align: start;
    background: #f6f5ff;
    box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
    border-radius: 8px;
    line-height: 2;
    padding: 20px 30px;
    textarea {
      resize: none;
      background-color: transparent;
      border: 1px solid transparent;
      width: 100%;
      padding: 10px 0;
      margin-right: 10px;
      /* height: 50px; */
    }
  }
  .edit-cta-container {
    display: flex;
    flex-direction: column;
    .edit-btn,
    .cancel-btn,
    .save-btn,
    .delete {
      display: inline;
      border: transparent;
      color: ${StyleConstants.COLOR_ACCENT};
      background-color: transparent;
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: transparent;
        color: #f6f5ff;
      }
    }
    .edit {
      display: none;
    }
    .save {
      display: none;
    }
    .cancel {
      display: none;
    }
    ${customMedia.lessThan('xsm')`
  flex-direction: row;
  `};

    ${customMedia.lessThan('small')`
 flex-direction: row;
  `};
  }
`;

const Heading = styled(H2)`
  color: ${p => p.theme.color.colorTextBold};
  font-weight: bold;
  margin-bottom: 50px;
  ${customMedia.lessThan('xsm')`
 font-size: 20px;
  `};

  ${customMedia.lessThan('small')`
 font-size: 20px;
  `};
`;
const CardHeading = styled.div`
  display: flex;
  .radio-check,
  .checked-radio {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 12px;
    border: 1px solid ${p => p.theme.color.colorTextLightGray};
  }
  .checked-radio {
    background-color: ${StyleConstants.COLOR_ACCENT};
    border: 1px solid ${StyleConstants.COLOR_ACCENT};
  }
  p {
    color: #212121;
  }
`;

const ActionButton = styled(Button)`
  margin: 0 auto !important;
  background-color: ${p => p.theme.color.colorBackgroundBody};
  border: transparent;
  color: ${StyleConstants.COLOR_ACCENT};
`;
