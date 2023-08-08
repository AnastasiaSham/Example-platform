import React from 'react';
import { Layout, Menu } from 'antd';
import Content from './content';
import Header from './header';

const { Footer } = Layout;
const App = () => {

  return (
    <Layout className="layout">
      <Layout.Header>
        <Header
        
        >
          <Menu/>
        </Header>
      </Layout.Header>
      <Layout.Content>
        <Content

        >
        </Content>
      </Layout.Content>
      <Layout.Footer>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
      </Layout.Footer>
    </Layout>
  );
};
export default App;