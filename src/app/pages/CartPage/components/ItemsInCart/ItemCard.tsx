import React from 'react';
import styled from 'styled-components/macro';
import { customMedia } from 'styles/media';
import save from '../../assets/save.svg';
import remove from '../../assets/remove.svg';
import soldOut from '../../assets/sold-out.png';

interface Prop {
  product: any;
  key: number;
  handleDeleteFromCart: any;
}

export function ItemCard({ product, key, handleDeleteFromCart }: Prop) {
  const mql = window.matchMedia('(max-width: 835px)');
  const mobileDevice = mql.matches;

  // Store the quantity of items in localStorage.
  // Since localStorage accepts only strings, we first parse the value of quantity to string in order to store, and back to number in order to perform calculations.

  const [quantity, setQuantity] = React.useState(
    localStorage.getItem('productQuantity' + product.id) || '1',
  );

  React.useEffect(() => {
    localStorage.setItem('productQuantity' + product.id, quantity.toString());
  }, [quantity, product.id]);

  const changeQuantity = direction => {
    const increasedQuantity = parseInt(quantity) + 1;
    const decreasedQuantity = parseInt(quantity) - 1;
    direction === 'increase'
      ? setQuantity(increasedQuantity.toString())
      : setQuantity(decreasedQuantity.toString());
  };

  return (
    <Card>
      {mobileDevice ? (
        <>
          <div>
            <img
              className="product_image"
              src={product.product.images[0]}
              alt={product.product.name}
            />
          </div>
          <div>
            <DetailSummary>
              <div className="right">
                <p className="seller">{'Seller: ' + product.product.vendor}</p>
                <p className="product_name">{product.product.name}</p>
              </div>

              {!product.product.enabled ? (
                <>
                  {product.product.discount_price ? (
                    <Section className="quantity">
                      <div>
                        <span className="approved_price">
                          <span>&#8358; </span>
                          {product.product.discount_price.toLocaleString(
                            'en-US',
                          )}
                        </span>
                        <span className="cancelled_price">
                          <span>&#8358; </span>
                          {product.product.price.toLocaleString('en-US')}
                        </span>
                      </div>

                      <p className="savings">
                        Savings:
                        <span> &#8358; </span>
                        {(
                          product.product.price - product.product.discount_price
                        ).toLocaleString('en-US')}
                      </p>
                    </Section>
                  ) : (
                    <Section>
                      <p className="approved_price not_discounted_price">
                        <span>&#8358; </span>
                        {product.product.price.toLocaleString('en-US')}
                      </p>
                    </Section>
                  )}

                  <Section>
                    <small>Sub total:</small>
                    <p className="total_price">
                      <span>&#8358; </span>
                      {(
                        parseInt(quantity) * product.product.price
                      ).toLocaleString('en-US')}
                    </p>
                  </Section>

                  <Section className="quantity_container">
                    <Quantity
                      className="decrease_btn"
                      onClick={() => {
                        changeQuantity('decrease');
                      }}
                    >
                      -
                    </Quantity>
                    <Quantity>{quantity}</Quantity>
                    <Quantity
                      className="increase_btn"
                      onClick={() => {
                        changeQuantity('increase');
                      }}
                    >
                      +
                    </Quantity>
                  </Section>
                </>
              ) : (
                <Section className="sold_out">
                  <img src={soldOut} alt="sold out" />
                </Section>
              )}

              <div>
                <img className="action_icons" src={save} alt="save" />
                <img
                  className="action_icons"
                  src={remove}
                  onClick={() => handleDeleteFromCart(product)}
                  alt="remove"
                />
              </div>
            </DetailSummary>
          </div>
        </>
      ) : (
        <>
          <DetailSummary>
            <div>
              <img
                className="product_image"
                src={product.product.images[0]}
                alt={product.product.name}
              />
            </div>
            <div className="right">
              <p className="seller">{'Seller: ' + product.product.vendor}</p>
              <p className="product_name">{product.product.name}</p>
              <div>
                <img className="action_icons" src={save} alt="save" />
                <img
                  className="action_icons"
                  src={remove}
                  onClick={() => handleDeleteFromCart(product)}
                  alt="remove"
                />
              </div>
            </div>
          </DetailSummary>

          {!product.product.enabled ? (
            <>
              <Section>
                <Quantity
                  className="decrease_btn"
                  onClick={() => {
                    changeQuantity('decrease');
                  }}
                >
                  -
                </Quantity>
                <Quantity>{quantity}</Quantity>
                <Quantity
                  className="increase_btn"
                  onClick={() => {
                    changeQuantity('increase');
                  }}
                >
                  +
                </Quantity>
              </Section>

              {product.product.discount_price ? (
                <Section className="quantity">
                  <p className="approved_price">
                    <span>&#8358; </span>
                    {product.product.discount_price.toLocaleString('en-US')}
                  </p>
                  <p className="cancelled_price">
                    <span>&#8358; </span>
                    {product.product.price.toLocaleString('en-US')}
                  </p>
                  <p className="savings">
                    Savings:
                    <span> &#8358; </span>
                    {(
                      product.product.price - product.product.discount_price
                    ).toLocaleString('en-US')}
                  </p>
                </Section>
              ) : (
                <Section>
                  <p className="approved_price">
                    <span>&#8358; </span>
                    {product.product.price.toLocaleString('en-US')}
                  </p>
                </Section>
              )}

              <Section>
                <p className="total_price">
                  <span>&#8358; </span>
                  {(parseInt(quantity) * product.product.price).toLocaleString(
                    'en-US',
                  )}
                </p>
              </Section>
            </>
          ) : (
            <Section>
              <img src={soldOut} alt="sold out" />
            </Section>
          )}
        </>
      )}
    </Card>
  );
}

const Card = styled.div`
  background-color: ${p => p.theme.color.colorBackgroundBody};
  box-shadow: 0px 4px 4px rgba(142, 141, 208, 0.16);
  display: flex;
  //justify-content: space-around;
  margin: 1rem;
  padding: 2rem 0;
  padding-left: 0.6rem;

  .quantity span {
  }
`;

const DetailSummary = styled.div`
  ${customMedia.greaterThan('mediumplus')`
 display: flex;
 justify-content: space-between;
 width: 40%;
  `};

  .quantity_container {
    margin: 0.7rem 0;
  }

  .sold_out {
    margin: 0.7rem 0 1rem 0;

    img {
      width: 181px;
    }
  }

  .product_image {
    width: 135.77px;
    height: 108.8px;
    ${p => p.theme.direction['margin-right']}: 1.3rem;
  }

  .seller {
    color: ${p => p.theme.color.colorTextLightGray};
    //color: #646777;
    font-size: 15.2561px;
    font-weight: 400px;
    line-height: 23px;
  }

  .product_name {
    color: ${p => p.theme.color.colorTextBlack};
    font-weight: bold;
    font-size: 15.1791px;
    line-height: 120%;
    padding: 1rem 0;
  }

  .action_icons {
    cursor: pointer;
    ${p => p.theme.direction['margin-right']}: 0.5rem;
    width: 41.01px;
    height: 41.01px;
  }
`;

const Quantity = styled.div`
  display: inline-block;
  border: 0.953508px solid #e4e4e4;
  padding: 2px 9px;

  ${customMedia.lessThan('mediumplus')`
  padding: 5px 14px;
  `};
`;

const Section = styled.div`
  ${customMedia.greaterThan('mediumplus')`
  padding: 0 1rem;
  margin: auto;
  text-align: center;
  `};

  .decrease_btn {
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    cursor: pointer;
  }

  .increase_btn {
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
  }

  ${customMedia.lessThan('mediumplus')`
  .approved_price {
    ${p => p.theme.direction['margin-right']}: 0.7rem;
  }

  .savings {
    margin: 0.8rem 0;
  }

  .not_discounted_price {
    margin-bottom: 0.8rem;
  }

  small {
    color: ${p => p.theme.color.colorTextLightGray};
  }
  `};

  .approved_price {
    color: ${p => p.theme.color.colorTextBlack};
    font-weight: bold;
    font-size: 24px;
    line-height: 120%;
  }

  .cancelled_price {
    color: ${p => p.theme.color.colorTextLightGray};
    font-weight: bold;
    font-size: 20px;
    line-height: 120%;
    padding: 11px 0;
    text-decoration: line-through;
  }

  .savings {
    color: #439f6e;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
  }

  .total_price {
    color: #c00ab5;
    font-weight: bold;
    font-size: 24px;
    line-height: 120%;
  }
`;
