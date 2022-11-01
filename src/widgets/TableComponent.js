
import { Table, InputNumber, Input, Form, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import MySelect from './MySelect';
import React, { useState } from 'react';

const data = [
  {
    key: '1',
    action: true,
    details: 'John Brown',
    area: 32,
    region: null,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    details: 'Jim Green',
    action: true,
    area: 42,
    region: null,
    address: 'London No. 1 Lake Park',
  },
  {
  },
];

const TableComponent = () => {
  const [options, setOptions] = useState([
    { value: 'jack', name: 'Jack' },
    { value: 'lucy', name: 'Lucy' },
    { value: 'yiminghe', name: 'Yiminghe' },
  ]);
  const [tableData, setData] = useState(data);

  const columns = [
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (value, _, index) => {
        console.log({ value, _, index })
        const onClick = (e) => {
          setData([...tableData, {}])
        };
        return !value && (<Button shape="circle" icon={<PlusOutlined />}
          onClick={onClick} />)
      },
    },
    {
      title: 'Select Region',
      dataIndex: 'region',
      key: 'region',
      render: (value, _, index) => {
        console.log({ value, _, index })
        return (
          <>
            <MySelect index={index} options={options} setOptions={setOptions} />
          </>
        )
      }
    },
    {
      title: 'Area',
      dataIndex: 'area',
      key: 'area',
      render: (value, _, index) => {
        return (
          <Form.Item
            name={`area${index}`}
          >
            <InputNumber value={value} min={0}/>
          </Form.Item>)
      },
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      render: (value, _, index) => {
        return (
          <Form.Item
            name={`address${index}`}
          >
            <Input value={value} />
          </Form.Item>)
      },
    },
    {
      title: 'Details',
      dataIndex: 'details',
      key: 'details',
      render: (value, _, index) => {
        return (
          <Form.Item
            name={`details${index}`}
          >
            <Input.TextArea rows={4} placeholder="maxLength is 6" maxLength={6}/>
          </Form.Item>)
      },
    },
  ];

  return (<Table columns={columns} dataSource={tableData} />)
};
export default TableComponent;