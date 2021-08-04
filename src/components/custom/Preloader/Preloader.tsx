
import React from 'react'

import styles from './preloader.module.scss'
import cubePreloader from '../../../assets/SVG/cube.svg'

export default function Preloader() {
  return (
    <div className={styles.preloaderWrapper}>
      <img
        className='preloader'
        src={cubePreloader}
        alt="loading"
      />
    </div>
  )
}
