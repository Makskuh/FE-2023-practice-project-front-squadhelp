import React, { useState } from 'react';
import styles from './PriceItem.module.scss';
import PriceLi from './PriceLi';
import { isArray } from 'lodash';

let i = 0;

function PriceItem({ priceObj }) {
  const {
    MAIN: [title, textunder, cost],
    LI_EL,
  } = priceObj;

  const liItems = LI_EL.map((value) => {
    if (isArray(value)) {
      return value.map((subLi) => (
        <PriceLi key={i++} value={subLi} stylesLi={styles.liSubItem} />
      ));
    }
    return <PriceLi key={i++} value={value} stylesLi={styles.liItem} />;
  });

  return (
    <div className={styles.divBox}>
      <div className={styles.mainWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.underTitle}>{textunder}</p>
        <span className={styles.cost}>$US{cost}</span>
      </div>
      <ul>{liItems}</ul>
      <button className={styles.btn}>START</button>
    </div>
  );
}

export default PriceItem;
