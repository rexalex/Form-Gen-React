import { Tabs } from 'antd';
import React from 'react';
import tabs from '../config/tabs';
import FormGenerator from './FormGenerator';
// import FormGenerator from '../generatorOld/FormGeneratorOld';
// import TableComponent from './TableComponent';

const TabsComponent = () => (
  <Tabs
    defaultActiveKey="1"
    items={tabs.map(tab => (
      {
        ...tab,
        children: <FormGenerator formName={`tab-${tab.key}`} children={tab.children}/>
      }
    ))}
  />
);
export default TabsComponent;