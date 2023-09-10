import React from 'react'
import styles from '../../../pages/Home/home.module.css'
import FeaturImg from '../../../assets/images/feature.png'
import Title from '../../../features/Atoms/Title/Title'
const FeatureSection = () => {
  return (
    <section id='feature'>
        <div className="container">
          <div className={styles.feature_wrapper}>
          <div className={styles.feature_title}>
                <Title>Featured</Title>
            </div>
            <figure >
                    <img src={FeaturImg} alt="" />
            </figure>
          </div>
        </div>
    </section>
  )
}

export default FeatureSection