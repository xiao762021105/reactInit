import React,{Component} from 'react';
import { Table,Divider } from 'antd';
import {getLanguageData} from 'Tools/i18n.js';

const rmText = getLanguageData('rolemanagement');

const RmTable = (props) => {
  const columns = [
    {
      title: rmText['orderNo'],
      dataIndex: 'dataIndex',
      key: 'rm-orderNo',
      render: orderNo => <span>orderNo</span>,
    },
    {
      title: rmText['roleType'],
      dataIndex: 'roleType',
      key: 'rm-roleType',
      render: roleType => <span>roleType</span>,
    },
    {
      title: rmText['userName'],
      dataIndex: 'userName',
      key: 'rm-userName',
      render: userName => <span>userName</span>,
    },
    {
      title: rmText['roleName'],
      dataIndex: 'roleName',
      key: 'rm-roleName',
      render: roleName => <span>roleName</span>,
    },
    {
      title: rmText['role'],
      dataIndex: 'role',
      key: 'rm-role',
      render: role => <span>role</span>,
    },
    {
      title: rmText['visibleBusiness'],
      dataIndex: 'visibleBusiness',
      key: 'rm-visibleBusiness',
      render: storeAddress => <a href="#">visibleBusiness</a>,
    },
    {
      title: rmText['ownStore'],
      dataIndex: 'ownStore',
      key: 'rm-ownStore',
      render: ownStore => <a href="#">ownStore</a>,
    },
    {
      title: rmText['contact'],
      dataIndex: 'contact',
      key: 'rm-contact',
      render: contact => <a href="#">contact</a>,
    },
    {
      title: rmText['operation'],
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => (
        <span>
          <a href="#">編輯</a>
          <Divider />
          <a href="#">刪除</a>
          <Divider />
          <a href="#">修改密碼</a>
        </span>
      )
    },
  ];
  const dataSource = [];
  return <Table dataSource={dataSource} columns={columns} />
}

export default RmTable;