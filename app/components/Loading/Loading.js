import React from 'react'
import styles from './Loading.css'

const Loading = () => (
  <section className={styles.container}>
    <div className={styles.svgContainer}>
      <svg className={styles.svg} viewBox={'25 25 50 50'}>
        <circle className={styles.path} cx={50} cy={50} r={20} fill={'none'}
          strokeWidth={2} strokeMiterlimit={10}
        />
      </svg>
    </div>
  </section>
)

export default Loading
