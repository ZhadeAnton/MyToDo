import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Avatar } from 'antd';
import { NavLink } from 'react-router-dom'
import {
  LogoutOutlined,
  UserOutlined,
  DownOutlined,
  AuditOutlined
} from '@ant-design/icons'

import styles from './userProfile.module.scss'
import { IUser } from '../../../Redux/User/userInterfaces';

interface Props {
  user: IUser | null,
  dropdownPlacement: 'bottomLeft' | 'topLeft' | 'topCenter'
  | 'topRight' | 'bottomCenter' | 'bottomRight' | undefined,
  signOutStart: () => void,
}

const UserProfile: React.FC<Props> = (props) => {
  const menu = (
    <Menu className={styles.dropdownList}>
      <Menu.Item icon={<AuditOutlined />}>
        <NavLink to='/login'>
          Login page
        </NavLink>
      </Menu.Item>

      <Menu.Item onClick={props.signOutStart}
        icon={<LogoutOutlined />}>
          Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Dropdown
        overlay={menu}
        placement={props.dropdownPlacement}
        trigger={['click']}
      >
        <div className={styles.userProfile}>
          <h3>
            {props.user!.displayName}
          </h3>

          <div className={styles.userAvatar}>
            <Avatar
              alt="user`s avatar"
              size={40}
              src={props.user!.photoURL}
              icon={<UserOutlined />}
            />
            <DownOutlined
              style={{
                color: 'blue',
                marginLeft: .25 + 'rem',
                fontSize: 13
              }}
            />
          </div>
        </div>
      </Dropdown>
    </>
  );
}

export default UserProfile
