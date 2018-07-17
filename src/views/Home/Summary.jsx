import React from 'react';
import style from './index.scss';
import {getLanguageData} from 'Tools/i18n.js';

const homeText = getLanguageData('home');

const Card = (props) => (
  <div className={`${style.card} ${style[props.className]}`} style={props.style}>
    <p className={style.number}>{ props.number || homeText.defaultNumber }</p>
    <p className={style.title}>{ props.title || homeText.defaultTitle }</p>
  </div>
)

const Summary = () => {
  const priceCardConfig = {
    number: "NT$10,000",
    title: homeText.priceTitle,
    className: 'select',
  }
  const tradeNumberConfig = {
    number: "100",
    title: homeText.tradeNumberTitle,
    className: '',
  }
  return (
    <div className={style.summary}>
      <Card {...priceCardConfig} />  
      <Card {...tradeNumberConfig} />
    </div>
  )
}

export default Summary;