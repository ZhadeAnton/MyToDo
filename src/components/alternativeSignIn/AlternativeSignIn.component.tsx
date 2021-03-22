import React from 'react'

import styles from './alternative.module.scss'
import CustomButton from '../UI/CustomButton/CustomButton.component'

type Props = {
  signInWithGoogle: () => void
}

const AlternativeSignIn: React.FC<Props> = ({signInWithGoogle}) => {
  return (
    <div className={styles.alternativeSignIn}>
      <div className={styles.orSeparator}>
        <span className={styles.orSideLine}></span>
        <p>or</p>
        <span className={styles.orSideLine}></span>
      </div>

      <div className={styles.buttonsGroup}>
        <CustomButton
          onClick={() => signInWithGoogle()}>
            +Google
        </CustomButton>

        <CustomButton
          onClick={() => signInWithGoogle()}>
            +Facebook
        </CustomButton>
      </div>
    </div>
  )
}

export default AlternativeSignIn