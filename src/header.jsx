import React, { useState } from 'react';
// import {
//   AppstoreOutlined,
//   ContainerOutlined,
//  // DesktopOutlined,
//   MailOutlined,
// //   MenuFoldOutlined,
// //   MenuUnfoldOutlined,

// } from '@ant-design/icons';
import { Menu } from 'antd';
function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type,
  };
}
const items = [
  getItem('Главная', '1'),
  getItem('Данные', '2'),
  getItem('Население', 'sub1',  [
    getItem('Территориальное расселение', '4'),
    getItem('Ценностная модель населения', '5'),
  ]),
  getItem('Контекст', 'sub2',  [
    getItem('Сводка обеспеченности территорий', '7'),
    getItem('Городские ценности', '8'),
    getItem('Индексы качества городской среды', '9'),
    getItem('Матрица коллокаций городских сервисов', '10'),
    
  ]),
  getItem('Сервисы', 'sub3',  [
    getItem('Маркет-плейс решений умного города', '12'),
    getItem('Тематические маршруты по Санкт-Петербургу', '13'),
    getItem('Платформа геолоцированных социологических опросов', '14'),
    getItem('Сервис экспорта и обработки ГИС данных', '15')
 ]),
  getItem('Option 3', '3'),
];
const App = () => {
 const [collapsed, setCollapsed] = useState(false);
   const toggleCollapsed = () => {
     setCollapsed(!collapsed);
   };
  return (
    <div
      style={{
        width: 1000,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <Menu
        defaultSelectedKeys={['2']}
        defaultOpenKeys={['sub1']}
        mode="horizontal"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      />
    </div>
  );
};
export default App;