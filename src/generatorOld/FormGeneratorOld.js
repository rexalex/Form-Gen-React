import { Button, Checkbox, Form, Input } from 'antd';
import { Switch } from 'antd';
import React, { useState } from 'react';
import TableComponent from '../widgets/TableComponent';
import { useSelector, useDispatch } from 'react-redux'
import { toggleComunitar } from '../store/formSlice'

const FormGenerator = ({children}) => {
  const isComunitar = useSelector((state) => state.form.isComunitar);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const toggle = () => {
    dispatch(toggleComunitar(!isComunitar))
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <TableComponent />

      <Form.Item
        label="Comunitar"
        name="comunitar"
        rules={[
          {
            required: true,
            message: 'Please select comunitar!',
          },
        ]}
      >
        <Switch onClick={toggle} />
      </Form.Item>

      {isComunitar && (<Form.Item
        label="Detail 1 yes"
        name="detail1yes"
      >
        <Input />
      </Form.Item>)}
      {isComunitar && (
        <Form.Item
          label="Detail 2 yes"
          name="detail2yes"
        >
          <Input />
        </Form.Item>)}

      {!isComunitar && (
        <Form.Item
          label="Detail 1 no"
          name="detailsNo"
        >
          <Input />
        </Form.Item>)}

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form >
  );
};
export default FormGenerator;