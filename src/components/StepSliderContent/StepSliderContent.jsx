import React from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import SwiperSilder from '../Swiper/SwiperSlider';
import styles from '../../pages/Home/home.module.css';

const StepSliderContent = ({ title }) => {
  return (
    <div className={styles.Stepcards} style={{ width: '50%' }}>
      <div className={styles.content}>
        <h4>{title}</h4>
        <div className={styles.icons}>
          <figure>
            <MdOutlineArrowBackIos />
          </figure>
          <figure>
            <MdOutlineArrowForwardIos />
          </figure>
        </div>
      </div>
      <SwiperSilder num={2} />
    </div>
  );
};

export default StepSliderContent;
