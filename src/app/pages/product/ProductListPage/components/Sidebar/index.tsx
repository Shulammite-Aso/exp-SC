import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { customMedia } from 'styles/media';
import { messages } from './messages';
import { Col, Input } from 'reactstrap';
import Collapse from './components/Collapse';
import { DoubleSliderType } from './components/DoubleSliderType';
import { Search } from './components/Search';
import StarRating from './components/StarRating';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { brandSelector } from 'app/pages/product/slice/selectors';
import { useProductSlice } from 'app/pages/product/slice';
import { StyleConstants } from 'styles/StyleConstants';

export function SideBar({ setChildFilterObject, filterObject }) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([30000, 250000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [selectedDiscounts, setSelectedDiscounts] = useState<number[]>([]);
  const { actions } = useProductSlice();
  const dispatch = useDispatch();
  const brandList = useSelector(brandSelector);

  const handleSelectBrands = (id: string) => {
    const currentIndex = selectedBrands.indexOf(id);
    const newChecked = [...selectedBrands];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSelectedBrands(newChecked);
    setChildFilterObject({ ...filterObject, brandArr: newChecked });
  };

  const handleSelectRatings = (rate: number) => {
    const currentIndex = selectedRatings.indexOf(rate);
    const newChecked = [...selectedRatings];

    if (currentIndex === -1) {
      newChecked.push(rate);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSelectedRatings(newChecked);
    setChildFilterObject({ ...filterObject, rateArr: newChecked });
  };

  const handleSelectDiscounts = (percentage: number) => {
    const currentIndex = selectedDiscounts.indexOf(percentage);
    const newChecked = [...selectedDiscounts];

    if (currentIndex === -1) {
      newChecked.push(percentage);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    newChecked.sort((a, b) => b - a);
    setSelectedDiscounts(newChecked);
    setChildFilterObject({ ...filterObject, discountArr: newChecked });
  };

  const searchHandler = (form: { search: string }) => {
    setSearchTerm(form.search);
  };

  const handleSelectPriceRange = value => {
    setPriceRange(value);
  };

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
    const filterProductsParams = {
      page: 1,
      limit: 25,
      filterObject,
    };
    dispatch(actions.fetchProductsByFilter(filterProductsParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterObject]);

  useEffect(() => {
    const formattedPriceRange = { min: priceRange[0], max: priceRange[1] };
    setChildFilterObject({ ...filterObject, priceObj: formattedPriceRange });
    dispatch(
      actions.fetchProductsByFilter({
        page: 1,
        limit: 25,
        filterObject,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions, dispatch, priceRange]);

  // const brands = productList!
  //   .map(product => product.brand)
  //   .filter(
  //     (value, index, self) =>
  //       index ===
  //       self.findIndex(t => t.place === value.place && t.name === value.name),
  //   );

  const filteredBrands =
    searchTerm === ''
      ? brandList
      : brandList?.filter(brand =>
          brand.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );

  return (
    <Wrapper>
      <Col>
        <Collapse title="Brand" defaultCollapse={true} defaultStatus="opened">
          <Search
            placeholder={t(...messages.placeholder())}
            submitAction={searchHandler}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <List>
            {filteredBrands!.map(brand => (
              <ListItem key={uuid()}>
                <CustomInput
                  type="checkbox"
                  name={brand}
                  checked={
                    selectedBrands.indexOf(brand.id) === -1 ? false : true
                  }
                  onChange={() => handleSelectBrands(brand.id)}
                />
                <Text>{brand.name}</Text>
              </ListItem>
            ))}
          </List>
        </Collapse>
        <Collapse title="Price" defaultCollapse={true} defaultStatus="opened">
          <DoubleSliderType
            onChange={(value: number[]) => handleSelectPriceRange(value)}
          />
        </Collapse>
        <Collapse
          title="Discount"
          defaultCollapse={false}
          defaultStatus="closed"
        >
          <List>
            {DiscountList.map(discount => (
              <ListItem>
                <CustomInput
                  type="checkbox"
                  name={discount.text}
                  checked={
                    selectedDiscounts.indexOf(discount.discountPercentage) ===
                    -1
                      ? false
                      : true
                  }
                  onChange={() =>
                    handleSelectDiscounts(discount.discountPercentage)
                  }
                />
                <Text>{discount.text}</Text>
              </ListItem>
            ))}
          </List>
        </Collapse>
        <Collapse
          title="Product rating"
          defaultCollapse={true}
          defaultStatus="opened"
        >
          <List>
            {MockList.map(item => (
              <ListItem key={uuid()}>
                <CustomInput
                  type="checkbox"
                  name={item.text}
                  checked={
                    selectedRatings.indexOf(item.rate) === -1 ? false : true
                  }
                  onChange={() => handleSelectRatings(item.rate)}
                />
                <StarRating rating={item.rate} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <Collapse
          title="Vendor rating"
          defaultCollapse={false}
          defaultStatus="closed"
        >
          <List>
            {MockList.map(item => (
              <ListItem key={uuid()}>
                <CustomInput
                  type="checkbox"
                  name={item.text}
                  checked={
                    selectedRatings.indexOf(item.rate) === -1 ? false : true
                  }
                  onChange={() => handleSelectRatings(item.rate)}
                />
                <StarRating rating={item.rate} />
              </ListItem>
            ))}
          </List>
        </Collapse>
        <Collapse
          title="Category related"
          defaultCollapse={false}
          defaultStatus="closed"
        >
          <List>
            {CategoryRelated.map(item => (
              <ListItem key={uuid()}>
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Collapse>
        <Collapse
          title="Specification"
          defaultCollapse={false}
          defaultStatus="closed"
        >
          <List>
            {MockList.map(item => (
              <ListItem key={uuid()}>
                <Text>{item.text}</Text>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </Col>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 15px 30px;
  width: 100%;
  color: ${p => p.theme.color.colorText};
  border-top: 0.5px solid rgba(0, 0, 0, 0.02);
  border-right: 0.5px solid rgba(0, 0, 0, 0.02);
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.02);
  ${customMedia.lessThan('medium')`
    padding: 15px 20px;
  `}
`;
const List = styled.ul`
  list-style: none;
  margin: 15px auto;
`;
const ListItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
`;
const Text = styled.span`
  margin-bottom: -3px;
`;
const CustomInput = styled(Input)`
  width: 18px;
  height: 18px;
  margin-right: 15px;
  border: solid 1px ${p => p.theme.color.colorText};
  border-radius: 2px;
  overflow: hidden;
  display: block;
  &:checked,
  &::before {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${StyleConstants.COLOR_ACCENT};
    border: solid 1px ${StyleConstants.COLOR_ACCENT};
    border-radius: 4px;
    transition: all 0.5s;
  }
`;
const MockList = [
  { rate: 5, text: 'Item 1' },
  { rate: 4, text: 'Item2' },
  { rate: 3, text: 'Item 3' },
  { rate: 2, text: 'Item 4' },
  { rate: 1, text: 'Item 5' },
  { rate: 0, text: 'Item 6' },
];
const DiscountList = [
  { discountPercentage: 50, text: '50% or more' },
  { discountPercentage: 40, text: '40% or more' },
  { discountPercentage: 30, text: '30% or more' },
  { discountPercentage: 20, text: '20% or more' },
  { discountPercentage: 10, text: '10% or more' },
];

const CategoryRelated = [
  'Audio & Video',
  'Accessories',
  'Batteries',
  'Cables',
  'Microphones',
  'Mounts',
  'Power Protection',
  'Others',
];
