
import { Table, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import * as Widgets from '../widgets'
import React, { useState } from 'react';
import { useSelector } from 'react-redux'

const MyTableComponent = ({ columns, dataSource }) => {
  const [tableData, setData] = useState(dataSource);
  const values = useSelector((state) => state.form.values);

  const addNewRow = (value, _, index) => {
    const onClick = (e) => {
      setData([...tableData, {}])
    };
    return !value && index === tableData.length - 1 && (<Button shape="circle" icon={<PlusOutlined />}
      onClick={onClick} />)
  };

  const actions = {
    addNewRow
  }

  const formattedColumns = columns.map(column => {
    const renderFromConfig = (value, _, index) => {
      const Element = Widgets[column.renderConfig.type]
      const rules = (column.rules || []).map(rule => {
        
        // console.log({column, rule})
        return rule.validator? {validator: rule.validator(values)} : rule
      })
      // console.log({column, rules}, column.title, {...column.renderConfig.rules}, {Element})
      return (
        Element ? <Element rules={rules} name={`${column.key}-${index}`} {...column.renderConfig.rules} /> : null
      )
    }
    const renderFromAction = actions[column.renderConfig?.action];
    const render = renderFromAction || renderFromConfig;

    return column.renderConfig ? { ...column, render } : column;
  })

  return (<Table columns={formattedColumns} dataSource={tableData} />)
};

export default MyTableComponent;
