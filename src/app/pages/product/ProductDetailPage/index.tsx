/**
 *
 * ProductDetailPage
 *
 */
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/Header';
import { ProductDetail } from './components/ProductDetail';
import { Col, Row } from 'reactstrap';
import ProductTab from './components/ProductTabs/ProductTabs';
import { ProductVisited } from './components/ProductVisited';
import { ProductBought } from './components/ProductBought';
import { useDispatch, useSelector } from 'react-redux';
import { productSelector } from '../slice/selectors';
import { Loader } from 'app/components/Loader';
import { useParams } from 'react-router-dom';
import { useProductSlice } from '../slice';

interface Props {}
export interface Address {
  city: string;
  state: string;
}

interface ProductPageUrlParams {
  productId: string;
}

export function ProductDetailPage(props: Props) {
  const { productId } = useParams<ProductPageUrlParams>();
  const dispatch = useDispatch();
  const { actions } = useProductSlice();
  const [shippingAddress, setShippingAddress] = useState<Address>({
    state: '',
    city: '',
  });
  const productDetails = useSelector(productSelector);

  useEffect(() => {
    dispatch(actions.getProduct({ id: productId }));
  }, [actions, dispatch, productId]);

  useEffect(() => {
    console.log('Details of selected product: ', productDetails);
  }, [productDetails]);

  const handleShippingSubmit = (key: string, value: string) => {
    setShippingAddress({ ...shippingAddress, [key]: value });
    console.log('shippingAddress: ', shippingAddress);
  };

  if (
    productDetails === undefined ||
    Object.keys(productDetails).length === 0
  ) {
    return <Loader />;
  }
  return (
    <>
      <Helmet>
        <title>Product Detail Page</title>
        <meta name="description" content="A AltMall Product Detail" />
      </Helmet>
      <Row>
        <Col md={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <ProductDetail
          detail={productDetails}
          handleFormChange={handleShippingSubmit}
        />
      </Row>
      <Row>
        <ProductTab detail={productDetails} />
      </Row>
      <Row>
        <ProductVisited />
      </Row>
      <Row>
        <ProductBought />
      </Row>
    </>
  );
}
