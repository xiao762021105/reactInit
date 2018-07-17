import React,{Component} from 'react';
import { Select,Input } from 'antd';
import RmTable from './Table';
import {getLanguageData} from 'Tools/i18n.js';
import style from './index.scss';

const rmText = getLanguageData('rolemanagement');
const Option = Select.Option;
const Search = Input.Search;

class RoleManagement extends Component {
  render() {
    return (
      <div className={style.pageRoleManagement}>
        <h2 className={style.title}>{rmText.title}</h2>
        <div className={style.queryAea}>
          <div className={style.leftArea}>
            <span className={style.addBtn}>{rmText.add}</span>
            <span className={style.label}>{rmText.typeLabel}</span>
            <Select style={{ width: 120 }}>
              <Option value="all">{rmText.all}</Option>
            </Select>
          </div>
          <div className={style.rightArea}>
            <Search
              placeholder={rmText.searchText}
              enterButton={<span>{rmText.serach}</span>}
              style={{ width: 200 ,height: "30px",lineHeight: "30px"}}
              onSearch={value => console.log(value)}
            />
          </div>
          
        </div>
        <RmTable />
      </div>
    )
  }
}

export default RoleManagement;