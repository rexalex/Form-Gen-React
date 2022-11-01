import { Select, Form } from 'antd';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateOptions } from '../store/formSlice'

const { Option } = Select;

const MySelect = ({ name }) => {
  const options = useSelector((state) => state.form.options);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(updateOptions(value))
  };

  return (
    <Form.Item
      name={name}
    >
      <Select
        style={{
          width: 120,
        }}
        onChange={handleChange}
      >
        {options.map(option => <Option value={option.value}>{option.name}</Option>)}
      </Select>
    </Form.Item>
  )
};
export default MySelect;