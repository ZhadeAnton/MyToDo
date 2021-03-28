import React, {useState} from 'react'
import {
  Form,
  Input,
  Button,
  Checkbox
} from 'antd';
import {LockOutlined} from '@ant-design/icons';

import styles from './signIn.module.scss'
import
AlternativeSignInContainer
  from '../alternativeSignIn/AlternativeSignIn.container';

interface Props {
  signInWithEmail(email: string, password: string): void,
}

const SingIn: React.FC<Props> = ({signInWithEmail}) => {
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

    signInWithEmail(email, password)
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
        initialValues={{remember: true}}
        onFinish={clear}
        size='large'
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

      <AlternativeSignInContainer />
    </div>
  )
}

export default SingIn
