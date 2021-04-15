import React from 'react'
import {Row, Col, Divider} from 'antd';
import CustomLink
  from '../../components/custom/customLink/CustomLink';

import styles from './footer.module.scss'

const SectionFooter = () => {
  return (
    <footer>
      <Divider orientation="left">About Any.do</Divider>
      <Row className={styles.footer}>
        <Col span={6}>
          <ul>
            <li><CustomLink to='/'>About Any.do</CustomLink></li>
            <li><CustomLink to='/'>Tips</CustomLink></li>
          </ul>
        </Col>
        <Col span={6}>
          <ul>
            <li><CustomLink to='/'>Contact us</CustomLink></li>
            <li><CustomLink to='/'>Support center</CustomLink></li>
            <li><CustomLink to='/'>Ambassadors</CustomLink></li>
          </ul>
        </Col>
        <Col span={6}>
          <ul>
            <li><CustomLink to='/'>Press</CustomLink></li>
            <li><CustomLink to='/'>WhatsApp</CustomLink></li>
            <li><CustomLink to='/'>Home</CustomLink></li>
          </ul>
        </Col>
        <Col span={6}>
          <ul>
            <li><CustomLink to='/'>Privacy</CustomLink></li>
            <li><CustomLink to='/'>Terms of Service</CustomLink></li>
          </ul>
        </Col>
      </Row>
    </footer>
  )
}

export default SectionFooter
