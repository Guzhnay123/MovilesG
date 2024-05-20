import React from 'react';
import { List, Avatar, Typography } from 'antd';

const { Title } = Typography;

const users = [
  {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name: 'María García',
    email: 'maria.garcia@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    name: 'Carlos Martínez',
    email: 'carlos.martinez@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    name: 'Ana López',
    email: 'ana.lopez@example.com',
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
  }
];

const UserList: React.FC = () => {
  return (
    <div>
      <Title level={2}>Lista de Usuarios</Title>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={user => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={user.avatar} />}
              title={user.name}
              description={user.email}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default UserList;
