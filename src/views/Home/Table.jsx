import React,{Component} from 'react';
import * as echarts from 'echarts/lib/echarts';
import style from './index.scss';
// 引入折线图。
import 'echarts/lib/chart/line';
// 引入提示框组件、标题组件、工具箱组件。
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/toolbox';
import {getLanguageData} from 'Tools/i18n.js';

const homeText = getLanguageData('home');

class Table extends Component{
  componentDidMount = () => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echartsMain'));
    // 绘制图表
    myChart.setOption({
      title: {text: ''},
      tooltip: {},
      toolbox: {
        feature: {
          dataView: {},
          saveAsImage: {
          pixelRatio: 2
        },
        restore: {}
        }
      },
      xAxis: {},
      yAxis: {},
      series: [{
        type: 'line',
        smooth: true,
        data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
      }]
    });
  }
  
  render() {
    return (
      <div style={{marginTop: '60px'}} className={style.echartTable}>
        <div id='echartsMain' style={{margin: "0 auto",width: "1000px",height: "315px"}}/>
        <div className={style.btnArea}>
          <span className={style.select}>{homeText.recent7Days}</span>
          <span>{homeText.recent30Days}</span>
        </div>
      </div>
    )
  }

}

export default Table;

