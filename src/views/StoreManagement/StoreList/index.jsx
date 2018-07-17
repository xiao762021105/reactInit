import React,{Component} from 'react';
import SmTable from './Table';
import {getLanguageData} from 'Tools/i18n.js';
import style from './index.scss';

const smText = getLanguageData('storelist');

class StoreList extends Component {
  render() {
    return (
      <div className={style.pageStoreManagement}>
        <h2 className={style.title}>{smText.title}</h2>
        <div className={style.addBtn}>
          <span>{smText.addStore}</span>
        </div>
        <SmTable />
      </div>
    )
  }
}

export default StoreList;