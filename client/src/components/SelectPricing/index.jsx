import React from 'react';
import styles from './Select.module.scss';
function SelectPricing({ value, handleChange, selectPricingArr }) {
  const options = selectPricingArr.map((option) => (
    <option key={option} value={option} className={styles.option}>
      {option}
    </option>
  ));

  return (  
    <div className={styles.pricingWrapper}>
    <label className={styles.label}>Pricing for</label>
    <div className={styles.wrapper}>
        <select name="selectPricing" onChange={handleChange} value={value} className={styles.select} >
          {options} </select>
    </div>
    </div>
  );
}

export default SelectPricing;
