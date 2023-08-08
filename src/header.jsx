import React, { useState } from 'react';
import { LoginOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const items = [
  {
    label: 'Главная', 
    key: '1',
  },
  {
    label: 'Данные', 
    key: '2',
  },
  {
    label: 'Население', 
    key: 'sub1', 
    children: [
      {
        label: 'Территориальное расселение', 
        key: '4',
      },
      {
        label:'Ценностная модель населения',
        key: '5',
      },
    ],
  },
  {
    label: 'Контекст',
    key: 'sub2',
    children:  [
      {
        label: 'Сводка обеспеченности территорий',
        key: '7',
      },
      {
        label: 'Городские ценности',
        key: '8',
      },
      {
        label: 'Индексы качества городской среды',
        key: '9',
      },
      {
        label: 'Матрица коллокаций городских сервисов',
        key: '10',
      },
    ],
  },
  {
    label: 'Сервисы',
    key: 'sub3',
    children: [
      {
        label: 'Маркет-плейс решений умного города',
        key: '12',
      },
      {
        label: 'Тематические маршруты по Санкт-Петербургу',
        key: '13',
      },
      {
        label: 'Платформа геолоцированных социологических опросов',
        key: '14',
      },
      {
        label: 'Сервис экспорта и обработки ГИС данных',
        key: '15'
      },
    ],
  },
  {
    label: 'Санкт-Петербург',
    key: '16',
    icon: <EnvironmentOutlined />,
  },
  {
    label: 'Войти',
    key: '17',
    icon: <LoginOutlined />,
  },
];
const Header = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return (
      <div>
        <Menu onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          
        />
      </div>
    );
};
export default Header;