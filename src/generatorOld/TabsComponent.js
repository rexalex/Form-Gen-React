import { Tabs } from 'antd';
import React from 'react';
import FormGenerator from './FormGeneratorOld';
import TableComponent from '../widgets/TableComponent';

const onChange = (key) => {
  console.log(key);
};
const TabsComponent = () => (
  <Tabs
    defaultActiveKey="1"
    onChange={onChange}
    items={[
      {
        label: `Tab 1`,
        key: '1',
        children: (<>
          <FormGenerator />
        </>
        ),
      },
      {
        label: `Tab 2`,
        key: '2',
        children: '123',
      },
    ]}
  />
);
export default TabsComponent;