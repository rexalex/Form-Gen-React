import React, { useState } from 'react';
import { Button, Form } from 'antd';
import * as Widgets from '../widgets';
import { useSelector, useDispatch } from 'react-redux'
import { updateValues } from '../store/formSlice'

const FormGenerator = ({ children, formName }) => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(updateValues({[formName]: values}))
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
      autoComplete="off"
    >
      {children.map(child => {
        const Component = Widgets[child.type];
        return child.isVisible(form) && <Component {...child}/>
      })}

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