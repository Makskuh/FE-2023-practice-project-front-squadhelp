import React from 'react';
import styles from './Select.module.scss';
function SelectPricing({ value, handleChange, selectPricingArr }) {
  const options = selectPricingArr.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <label className={styles.label}>
      Pricing for
      <select name="selectPricing" onChange={handleChange} value={value}>
        {options}
      </select>
    </label>
  );
}

export default SelectPricing;
