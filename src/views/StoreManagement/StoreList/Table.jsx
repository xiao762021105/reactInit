import React,{Component} from 'react';
import { Table,Divider } from 'antd';
import {getLanguageData} from 'Tools/i18n.js';

const smText = getLanguageData('storelist');

const SmTable = (props) => {
  const columns = [
    {
      title: smText['orderNumber'],
      dataIndex: 'dataIndex',
      key: 'sm-orderNumber',
      render: orderNumber => <span>orderNumber</span>,
    },
    {
      title: smText['storeName'],
      dataIndex: 'storeName',
      key: 'sm-storeName',
      render: storeName => <span>storeName</span>,
    },
    {
      title: smText['storeAddress'],
      dataIndex: 'storeAddress',
      key: 'sm-storeAddress',
      render: storeAddress => <span>storeAddress</span>,
    },
    {
      title: smText['contact'],
      dataIndex: 'contact',
      key: 'sm-contact',
      render: storeAddress => <span>contact</span>,
    },
    {
      title: smText['contactNumber'],
      dataIndex: 'contactNumber',
      key: 'sm-contactNumber',
      render: contactNumber => <span>contactNumber</span>,
    },
    {
      title: smText['storeAccessories'],
      dataIndex: 'storeAccessories',
      key: 'sm-storeAccessories',
      render: storeAddress => <a href="#">storeAccessories</a>,
    },
    {
      title: smText['membershipLevel'],
      dataIndex: 'membershipLevel',
      key: 'sm-membershipLevel',
      render: membershipLevel => <a href="#">membershipLevel</a>,
    },
    {
      title: smText['expireDate'],
      dataIndex: 'expireDate',
      key: 'sm-expireDate',
      render: expireDate => <a href="#">expireDate</a>,
    },
    {
      title: smText['additionalPackage'],
      dataIndex: 'additionalPackage',
      key: 'sm-additionalPackage',
      render: additionalPackage => <a href="#">additionalPackage</a>,
    },
    {
      title: smText['status'],
      dataIndex: 'status',
      key: 'sm-status',
      render: status => <a href="#">status</a>,
    },
    {
      title: smText['operating'],
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => (
        <span>
          <a href="#">查看</a>
          <Divider />
          <a href="#">刪除</a>
        </span>
      )
    },
  ];
  const dataSource = [];
  return <Table dataSource={dataSource} columns={columns} />
}

export default SmTable;