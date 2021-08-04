import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Avatar } from 'antd';
import { v4 } from 'uuid'
import {
  LogoutOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons'

import styles from './userProfile.module.scss'
import { IUser } from '../../../Interfaces/UserInterfaces';

interface Props {
  user: IUser | null,
  dropdownPlacement: 'bottomLeft' | 'topLeft' | 'topCenter'
  | 'topRight' | 'bottomCenter' | 'bottomRight' | undefined,
  signOutStart: () => void,
}

const UserProfile: React.FC<Props> = (props) => {
  return (
    <div className={styles.userProfile}>
      <Dropdown
        overlay={
          <Menu className={styles.dropdownList}>
            <Menu.Item
              key={v4()}
              icon={<LogoutOutlined />}
              onClick={props.signOutStart}
            >
              Log out
            </Menu.Item>
          </Menu>
        }
        placement={props.dropdownPlacement}
        trigger={['click']}
      >
        <div className={styles.userProfileWrapper}>
          <h3 className={styles.userName}>
            {props.user!.displayName}
          </h3>

          <div className={styles.userAvatar}>
            <Avatar
              alt="Avatar"
              size={32}
              src={props.user!.photoURL}
              icon={<UserOutlined />}
            />

            <DownOutlined
              style={{
                color: 'blue',
                marginLeft: .3 + 'rem',
                fontSize: 10
              }}
            />
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

export default UserProfile
