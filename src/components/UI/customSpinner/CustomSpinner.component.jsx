import React from 'react';
import styles from './customSpinner.module.scss'

const WithSpinner =
// eslint-disable-next-line react/display-name
(WrappedComponent) => ({isLoading, ...otherProps}) => {
  return isLoading ? (
    <div className={styles.overlay}>
      <div className={styles.spinner}>
      </div>
    </div>
  ) : (
  <WrappedComponent {...otherProps}/>
  )
}

export default WithSpinner
