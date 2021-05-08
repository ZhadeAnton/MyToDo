import React, {useState} from 'react'
import {
  Form,
  Input,
  Button,
  Checkbox
} from 'antd';
import {LockOutlined} from '@ant-design/icons';

import styles from './signIn.module.scss'
import { LoginPageProps } from '../../../containers/LoginPageContainer';

interface Props {
  signInWithEmail: LoginPageProps['signInWithEmail'],
}

const SingIn: React.FC<Props> = (props) => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = userData

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    props.signInWithEmail(email, password)
  }

  const clear = () => {
    setUserData({
      email: '',
      password: ''
    })
  }

  return (
    <div className={styles.signIn}>
      <Form
        name='sign-in'
        initialValues={{remember: true}}
        onFinish={clear}
        size='large'
        preserve={false}
      >
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
            autoFocus
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

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
            className={styles.submitBtn}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SingIn
