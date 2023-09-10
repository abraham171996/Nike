import React from 'react'
import BannerImage from "../../../assets/images/BannerImage.png"
import styles from '../../../pages/Home/home.module.css'
import Title from '../../../features/Atoms/Title/Title'
import Subtitle from '../../../features/Atoms/SubTitle/SubTitle'
const HelloSection = () => {
  return (
    <section id='hello'>
       <div className="container">
       <div className={styles.hello_title}>
            <Title>Hello Nike App</Title>
            <Subtitle>Download the app to access everything Nike. <a href=""> Get Your Great</a></Subtitle>
        </div>
        <figure className={styles.hello_img}>
            <img src={BannerImage} alt="" />
        </figure>
       </div>
    </section>
  )
}

export default HelloSection