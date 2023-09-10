import React from 'react'
import styles from '../../../pages/Home/home.module.css'
import DontMissImg from '../../../assets/images/dontMiss.png'
import Title from '../../../features/Atoms/Title/Title'
const DontMiss = () => {
  return (
    <section id='dontMiss'>
        <div className="container">
            <div className={styles.dontMiss_wrapper}>
            <div className={styles.dontMiss_title}>
                <Title>Don't Miss</Title>
            </div>
            <figure>
                <img src={DontMissImg} alt="" />
            </figure>
            </div>
        </div>
    </section>
  )
}

export default DontMiss