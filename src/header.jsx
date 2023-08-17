import React, { useState } from 'react';
import { LoginOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './header.css'

const Header = () => {
const items = [
  {
    label: 'Главная', 
  },
  {
    label: 'Данные', 
  },
  {
    label: 'Население', 
    children: [
      {
        label: 'Территориальное расселение', 
      },
      {
        label:'Ценностная модель населения',
      },
    ],
  },
  {
    label: 'Контекст',
    children:  [
      {
        label: 'Сводка обеспеченности территорий',
      },
      {
        label: 'Городские ценности',
      },
      {
        label: 'Индексы качества городской среды',
      },
      {
        label: 'Матрица коллокаций городских сервисов',
      },
    ],
  },
  {
    label: 'Сервисы',
    children: [
      {
        label: 'Маркет-плейс решений умного города',
      },
      {
        label: 'Тематические маршруты по Санкт-Петербургу',
      },
      {
        label: 'Платформа геолоцированных социологических опросов',
      },
      {
        label: 'Сервис экспорта и обработки ГИС данных',
      },
    ],
  },
  {
    label: 'О платформе',
  },
  {
    label: 'Санкт-Петербург',
    icon: <EnvironmentOutlined className='geolocation' />,
  },
  {
    label: 'Войти',
    icon: <LoginOutlined />,
  },
];
const [current, setCurrent] = useState('mail');
const onClick = (e) => {
  console.log('click ', e);
  setCurrent(e.key);
};
  return (
      <Menu onClick={onClick}
      className="container"
      selectedKeys={[current]}
      mode="horizontal"
      items={items}   
      />
  );
};
export default Header;