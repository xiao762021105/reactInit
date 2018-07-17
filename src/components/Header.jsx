import React,{Component} from 'react';
import style from './header.scss';
import {getLanguageData} from 'Tools/i18n.js'

const Head = (props) => {
  const headerText = getLanguageData('common');
  const title = props.title || "";
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src={require('../common/img/logo_icashcow.png')} alt="cashcow"/>
      </div>
      <div className={style.userinfo}>
        <a className={`${style.fl} ${style.merBtn}`} href="#">{headerText.merBackEnd}</a>
        <div className={style.fl} >
          <span className={style.avatar}>
            <img src={require('../common/img/yonghu.png')} alt="用戶頭像"/>
          </span>
          <span className={style.welecome}>{`${headerText.user}${headerText.welecomeText}`}</span>
          <span>{headerText.exit}</span>
          <span> | </span>
          <span className={style.password}>{headerText.password}</span>
        </div>
      </div>
    </header>
  )
}

export default Head;