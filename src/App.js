import React from 'react';
import { Layout, Menu } from 'antd';
import Content from './content';
import Header from './header';
import Footer from './footer';

const App = () => {

  return (
    <Layout className="layout">
        <Header>
          <Menu/>
        </Header>
        <Content>
        </Content>
      <Footer>
      </Footer>
    </Layout>
  );
};
export default App;