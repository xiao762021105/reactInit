import { Menu, Icon } from 'antd';
import React,{Component} from 'react';
import {getLanguageData} from 'Tools/i18n.js';
import './nav.css';

const SubMenu = Menu.SubMenu;
const navConfig = require('./navconfig.json');
const navText = getLanguageData('nav');
const navStyle = {
  boxShadow: "1px 0px 3px rgba(33,34,35,0.24)"
}

class Nav extends React.Component {
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className="nav-menu">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={navStyle}
        >
          {
            navConfig.map((item,index) => {
              if(item.children) {
                const submenu = item.children.map((item,index) => (<Menu.Item key={item.key}><a href={item.path}>{navText[item.key]}</a></Menu.Item>))
                return (
                  <SubMenu key={item.key} title={navText[item.key]}>
                    {submenu}
                  </SubMenu>
                )
              } else {
                return (
                  <Menu.Item key={item.key}>
                    <a href={item.path}>{navText[item.key]}</a>
                  </Menu.Item>
                )   
              } 
            }) 
          }
        </Menu>
      </div>
    );
  }
}

export default Nav