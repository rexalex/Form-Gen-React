import { Switch, Form } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleComunitar } from '../store/formSlice'


const MySwitch = (props) => {
  const isComunitar = useSelector((state) => state.form.isComunitar);
  const dispatch = useDispatch();

  const toggle = () => {
    console.log('toggle', isComunitar)
    dispatch(toggleComunitar(!isComunitar))
  };

  return (
    <Form.Item
      {...props}
    >
      <Switch onClick={toggle} />
    </Form.Item>
  )
};
export default MySwitch;
