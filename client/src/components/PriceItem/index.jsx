import React from 'react';
import styles from './PriceItem.module.scss';
let i = 0;
function PriceItem({ priceObj }) {
  const { MAIN, LI_EL } = priceObj;
  const liItem = LI_EL.map((value) => {
    return <li key={i++} className={styles.liItem}>{value}</li>;
  });
  return (
    <div className={styles.divBox}>
      <div className={styles.mainWrapper}>
        <h2 className={styles.title}>{MAIN[0]}</h2>
        <p className={styles.underTitle}>{MAIN[1]}</p>
        <span className={styles.cost}>$US{MAIN[2]}</span>
      </div>
      <ul>{liItem}</ul>
      <button>START</button>
    </div>
  );
}

export default PriceItem;
