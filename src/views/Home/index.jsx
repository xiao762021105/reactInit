import React,{Component} from 'react';
import { DatePicker,Select,Button } from 'antd';
import Summary from './Summary';
import Table from './Table';
import {getLanguageData} from 'Tools/i18n.js';
import style from './index.scss';

const { RangePicker } = DatePicker;
const ButtonGroup = Button.Group;
const Option = Select.Option;
const homeText = getLanguageData('home');
const slectConfig = {
  defaultValue: "all",
  style: {width: 175,marginRight: "24px"},

}

class Home extends Component{
  constructor() {
    super();
    this.__handleDateChange = this.__handleDateChange.bind(this);
  }

  __handleDateChange(date, dateString) {
    console.log(date, dateString);
  }

  render() {
    return (
      <div className={style.pageHome}>
        <div className={style.operatArea}>
          <div className={style.queryForm}>
            <span className={style.label}>{homeText.dataSummary}</span>
            <RangePicker placeholder={[homeText.startDatePicker,homeText.endDatePicker]} onChange={this.__handleDateChange} />
            <span className={style.label} style={{marginLeft: "30px"}}>{homeText.paymentChannel}</span>
            <Select {...slectConfig}>
              <Option value={"all"}>{homeText.all}</Option>
            </Select>
            <Button type="primary">{homeText.query}</Button>
          </div>
          <div className={style.btnBlock}>
            <ButtonGroup>
              <Button>{homeText.transactionReport}</Button>
              <Button>{homeText.retailReport}</Button>
              <Button>{homeText.cateringReport}</Button>
            </ButtonGroup>
          </div>
        </div>
        <div>
          <Summary />
        </div>
        <Table />
      </div>
    )
  }
}

export default Home;
