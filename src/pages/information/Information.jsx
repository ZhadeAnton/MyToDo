import React from 'react'
import {Menu, Dropdown, Button} from 'antd';
import 'antd/dist/antd.css'

const onClick = ({key}) => {
  message.info(`Click on item ${key}`);
};

const Information = () => {
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <Button>bottomLeft</Button>
    </Dropdown>
  )
}

export default Information
