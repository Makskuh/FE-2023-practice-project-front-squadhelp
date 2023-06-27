import React from 'react'
import PriceItem from '../PriceItem';
import CONSTANTS from '../../constants';
import { ReactPropTypes } from 'react';
import styles from './PriceElements.module.scss'

function PriceComponent(props) {

  return (
    <section className={styles.sectionWrapper}>
      <PriceItem priceObj={CONSTANTS.PRICING_BRONZE} />
      <PriceItem priceObj={CONSTANTS.PRICING_GOLD} />
      <PriceItem priceObj={CONSTANTS.PRICING_PLATINUM} />
      <PriceItem priceObj={CONSTANTS.PRICING_MANAGED} />
    </section>
  )
}



export default PriceComponent;
