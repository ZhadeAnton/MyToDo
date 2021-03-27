import React from 'react';
import {Menu, Dropdown} from 'antd';
import {Avatar} from 'antd';
import {LogoutOutlined, UserOutlined} from '@ant-design/icons'

import styles from './user.module.scss'
import {IUser} from '../../redux/user/userInterfaces';
import CustomLink from '../navigationLink/NavigationLink';

interface Props {
  user?: IUser | undefined,
  signOut: () => void
}

const UserAvatar: React.FC<Props> = ({signOut, user}) => {
  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>
        User info
      </Menu.Item>
      <Menu.Item icon={<UserOutlined />}>
        Help
      </Menu.Item>
      <Menu.Item onClick={signOut}
        icon={<LogoutOutlined />}>Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      {
      user
      ? <Dropdown overlay={menu} placement="bottomLeft">
        <div className={styles.avatar}>
          <div className={styles.userInfo}>
            <div>{user.displayName}</div>
          </div>
          <div className={styles.image}>
            <Avatar
              alt="user"
              size={40}
              src={user?.photoURL}
              aria-label="info"
              icon={<UserOutlined />}
            />
          </div>
        </div>
      </Dropdown>
      : <CustomLink to={'login'}>Sign in / Sign up</CustomLink>
      }
    </>
  );
}

export default UserAvatar
