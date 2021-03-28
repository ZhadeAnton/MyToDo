import React, {useState} from 'react'
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import styles from './signUp.module.scss'

interface Props {
  signUp(displayName: string, email: string, password: string): void
}

const SignUp: React.FC<Props> =
({signUp}) => {
  const [userData, setUserData] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const {displayName, email, password, confirmPassword} = userData

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target

    setUserData({...userData, [name]: value})
  }

  const handleSubmit =
  async (event: React.FormEvent) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      return
    }

    signUp(displayName, email, password)
  }

  const clear = () => {
    setUserData({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <div className={styles.signUp}>
      <Form
        name="register"
        size='large'
        onFinish={clear}
        preserve={false}
      >
        <Form.Item
          name="displayName"
          rules={[{
            required: true,
            message: 'Please input your name!'
          }]}
        >
          <Input
            name="displayName"
            placeholder="Name"
            prefix={<UserOutlined />}
            allowClear
            onChange={handleChange}
            value={displayName}
            autoFocus
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[{
            required: true,
            message: 'Please input your email!',
            type: 'email'
          }]}
        >
          <Input
            name="email"
            placeholder="Email"
            prefix={'@'}
            allowClear
            onChange={handleChange}
            value={email}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{
            required: true,
            message: 'Please input your password!'
          }]}
        >
          <Input.Password
            name="password"
            placeholder="Password"
            prefix={<LockOutlined />}
            onChange={handleChange}
            value={password}
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({getFieldValue}) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                    new Error('The two passwords that you entered do not match!'
                    ));
              },
            }),
          ]}
        >
          <Input.Password
            name="confirmPassword"
            placeholder="Password"
            prefix={<LockOutlined />}
            onChange={handleChange}
            value={confirmPassword}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
            className={styles.submitBtn}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SignUp
