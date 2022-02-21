import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';
import { Input } from 'reactstrap';

export const Checkbox = ({ brandId, handleBrandFilters }) => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleSelectBrands = (id: string) => {
    const currentIndex = selectedBrands.indexOf(id);
    const newChecked = [...selectedBrands];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setSelectedBrands(newChecked);
    handleBrandFilters(newChecked);
  };

  return (
    <CustomInput
      type="checkbox"
      name={brandId}
      checked={selectedBrands.indexOf(brandId) === -1 ? false : true}
      onChange={() => handleSelectBrands(brandId)}
    />
  );
};

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
    width: 100%;
    height: 100%;
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
