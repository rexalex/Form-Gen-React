import { Layout, Menu } from 'antd';
import React from 'react';
import TabsComponent from './generatorOld/TabsComponent'
import TabsGenerator from './generator/TabsGenerator';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={
          [{
            key: 1,
            label: `Romania`,
          },
        ]
        }
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
        margin: '16px 0',
      }}
    >
      <div className="site-layout-content">
        {/* <TabsComponent /> */}
        <TabsGenerator />
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
);
export default App;