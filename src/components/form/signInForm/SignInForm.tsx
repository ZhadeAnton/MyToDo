import React, {useState} from 'react'
import {
  Form,
  Input,
  Button,
} from 'antd';
import {LockOutlined} from '@ant-design/icons';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

import styles from './signInForm.module.scss'
import { IFnSignInWithEmail } from '../../../Interfaces/UserInterfaces';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';

interface Props {
  signInWithEmail: IFnSignInWithEmail,
}

const SignInForm: React.FC<Props> = (props) => {
  const dimension = useWindowDimensions()
  const inputSize: SizeType = dimension.width < 992 ? 'middle' : 'large'

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = userData

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setUserData({...userData, [name]: value})
  }

  const handleSubmit = (event: React.FormEvent) => {
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
    <Form
      name='sign-in'
      size={inputSize}
      onFinish={clear}
      preserve={false}
      className={styles.signInForm}
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
          autoComplete="on"
          name="email"
          prefix={'@'}
          placeholder="Email"
          onChange={handleChange}
          value={email}
          allowClear
          autoFocus
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{
          required: true,
          message: 'Please input your password!',
        }]}
      >
        <Input.Password
          name="password"
          placeholder="Password"
          prefix={<LockOutlined />}
          onChange={handleChange}
          value={password}
          autoComplete='current-password'
        />
      </Form.Item>

      <Form.Item>
        {
          userData.email && userData.password !== ''
          ?
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleSubmit}
              className={styles.submitBtn}
            >
            Log in
            </Button>
        :
          <Button
            type="primary"
            htmlType="submit"
            onClick={handleSubmit}
            className={styles.submitBtn}
            disabled
          >
          Log in
          </Button>
        }
      </Form.Item>
    </Form>
  )
}

export default SignInForm
