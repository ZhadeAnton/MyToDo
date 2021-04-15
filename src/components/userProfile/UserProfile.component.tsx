import React from 'react';
import {Menu, Dropdown} from 'antd';
import {Avatar} from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
  DownOutlined,
  LoginOutlined
} from '@ant-design/icons'

import styles from './userProfile.module.scss'
import CustomLink from '../custom/customLink/CustomLink';
import {
  UserProfileProps
} from '../../containers/UserProfileContainer.container';

const UserProfile: React.FC<UserProfileProps> = ({signOut, user}) => {
  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>
        User info
      </Menu.Item>
      <Menu.Item icon={<UserOutlined />}>
        Help
      </Menu.Item>
      <Menu.Item
        icon={<LoginOutlined />}>
        <CustomLink to={'/login'}>Login page</CustomLink>
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
      ? <Dropdown
        overlay={menu}
        placement="bottomLeft"
        trigger={['click']}
      >
        <div className={styles.topProfile}>
          <div className={styles.profileName}>{user.displayName}</div>
          <div className={styles.profileImage}>
            <Avatar
              alt="user"
              size={40}
              src={user?.photoURL}
              aria-label="info"
              icon={<UserOutlined />}
            />
            <DownOutlined
              style={{
                color: 'blue',
                fontSize: 12
              }}
            />
          </div>
        </div>
      </Dropdown>
      : <CustomLink to={'login'}>Sign in / Sign up</CustomLink>
      }
    </>
  );
}

export default UserProfile
