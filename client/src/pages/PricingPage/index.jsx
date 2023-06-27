import React, { useState } from 'react';
import CONSTANTS from '../../constants';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SelectPricing from '../../components/SelectPricing';
import PriceComponent from '../../components/PriceElements';

function PricePage(props) {
  const [select, setSelect] = useState(CONSTANTS.SELECT_PRICING[0]);
  const handleChange = ({ target: { value } }) => {
    const newSelectvalue = value;
    setSelect(newSelectvalue);
  };
  return (
    <>
      <Header />
      <SelectPricing
        value={select}
        selectPricingArr={CONSTANTS.SELECT_PRICING}
        handleChange={handleChange}
      />
      <PriceComponent/>
      <Footer />
    </>
  );
}

export default PricePage;
