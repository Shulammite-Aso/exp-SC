import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
//import camera from '../../assets/camera.png';
import share from '../../assets/share.svg';
import { ItemCard } from './ItemCard';
import EmptyWishlist from './EmptyWishlist';
import { H3 } from 'app/components/Typography/H3/H3';
import { useWishlistSlice } from 'app/pages/WishlistPage/slice/index';
import { wishlistIdSelector } from '../../slice/selectors';
import { wishlistSelector } from '../../slice/selectors';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

export default function Wishlist() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const wishlistProducts = useSelector(wishlistSelector);
  const wishlistID = useSelector(wishlistIdSelector);
  const { actions } = useWishlistSlice();

  interface Product {
    image: string;
    name: string;
    price: string;
    id: string;
  }

  const [sortCriteria, setSortCriteria] = useState('Newest_to_oldest');
  const [productsToDisplay, setProductsToDisplay] = useState<Product[]>([]);
  //TODO: Use 'productsToDisplay' to populate the UI when the endpoint's return value is fixed

  const sortList = e => {
    e.target.value === 'Oldest_to_newest'
      ? setSortCriteria('Oldest_to_newest')
      : setSortCriteria('Newest_to_oldest');
  };

  useEffect(() => {
    dispatch(actions.getItemsInWishlist());
    console.log('returned items:', wishlistProducts);
  }, [dispatch, actions, wishlistProducts]);

  useEffect(() => {
    console.log('returned items two:', wishlistProducts);
    setProductsToDisplay(wishlistProducts);
  }, [wishlistProducts]);

  const handleDeleteFromWishlist = product => {
    dispatch(actions.removeItemFromWishlist(product.product._id));
    dispatch(actions.getItemsInWishlist());
  };

  const deleteWishlistInstance = () => {
    dispatch(actions.removeAllItemFromWishlist(wishlistID));
  };

  // const products = [
  //   {
  //     image: camera,
  //     name: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm',
  //     price: 'N 648, 230',
  //     id: '61711777962427a9616d2f13',
  //   },

  //   {
  //     image: camera,
  //     name: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
  //     price: 'N 648, 220',
  //     id: '2',
  //   },

  //   {
  //     image: camera,
  //     name: 'Canon EOS 5D Mark IV DSLR Camera With 24-105mm F/4L II Lens',
  //     price: 'N 648, 220',
  //     id: '3',
  //   },
  // ];
  return (
    <Container>
      <WishlistdHeader>
        <Left>
          <div>
            <Heading>{t(...messages.title())}</Heading>
            <img src={share} alt="" />
          </div>
          <p>{productsToDisplay.length + ' items'}</p>
        </Left>
        <Right>
          <label htmlFor="sortBy">Sort By:</label>
          <div>
            <select name="sortBy" id="sortBy" onChange={sortList}>
              <option value="Newest_to_oldest">Newest to Oldest</option>
              <option value="Oldest_to_newest">oldest to Newest</option>
            </select>
          </div>
        </Right>
      </WishlistdHeader>

      {productsToDisplay.length !== 0 ? (
        sortCriteria === 'Oldest_to_newest' ? (
          <>
            {productsToDisplay.reverse().map(product => (
              <ItemCard
                product={product}
                handleDeleteFromWishlist={handleDeleteFromWishlist}
                key={parseInt(product.id)}
              />
            ))}
            <RemoveAllFromWishlist onClick={deleteWishlistInstance}>
              Empty Wishlist
            </RemoveAllFromWishlist>
          </>
        ) : (
          <>
            {productsToDisplay.map(product => (
              <ItemCard
                product={product}
                handleDeleteFromWishlist={handleDeleteFromWishlist}
                key={parseInt(product.id)}
              />
            ))}
            <RemoveAllFromWishlist onClick={deleteWishlistInstance}>
              Empty Wishlist
            </RemoveAllFromWishlist>
          </>
        )
      ) : (
        <EmptyWishlist />
      )}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 3rem;
  ${customMedia.greaterThan('medium')`
  ${p => p.theme.direction['margin-left']}: 3rem;
  `};
`;

const WishlistdHeader = styled.div`
  margin-bottom: 2rem;

  ${customMedia.greaterThan('medium')`
  display: flex;
  justify-content: space-between;
  `};
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 24px;
  }

  p {
    color: ${p => p.theme.color.colorTextBold};
    font-size: 16px;
  }

  ${customMedia.lessThan('medium')`
    margin-bottom: 1.5rem;
  `};
`;

const Right = styled.div`
  label,
  div {
    display: inline;
  }

  label {
    color: ${p => p.theme.color.colorTextBlack};
    font-weight: bold;
    font-size: 16px;
    ${p => p.theme.direction['margin-right']}: 0.7rem;
  }

  div {
    border: 1px solid #f4f4f4;
    border-radius: 8px;
    padding: 10px 15px;
    select {
      border: none;
      background-color: ${p => p.theme.color.colorBackground};
    }
  }
`;

const Heading = styled(H3)`
  color: ${p => p.theme.color.colorTextBold};
  display: inline-block;
  font-weight: bold;
  ${p => p.theme.direction['margin-right']}: 0.7rem;
`;

const RemoveAllFromWishlist = styled.button`
  background-color: ${p => p.theme.color.colorBackground} !important;
  //display: inline-block;
  border: none;
  color: #f93232;
  margin: 2rem auto;
  width: 150px;
  //padding: 0 1rem;
`;
