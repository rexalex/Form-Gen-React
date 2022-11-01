import { Checkbox, Input, InputNumber, Form } from 'antd';
import TableComponent from './TableComponent';
import MyTableComponent from './MyTableComponent';
import MySwitch from './MySwitch';
import MySelect from './MySelect';

const withField = (inputType) => (props) => {
  const Element = inputType;

  return (
  <Form.Item
    {...props}
  >
    <Element {...props}/>
  </Form.Item>
)}

const CheckboxField = withField(Checkbox);
const InputField = withField(Input);
const InputNumberField = withField(InputNumber);
const TextAreaField = withField(Input.TextArea);

export {
  CheckboxField,
  InputField,
  MySwitch,
  InputNumberField,
  MySelect,
  TableComponent,
  MyTableComponent,
  TextAreaField,
};