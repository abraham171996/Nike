import React from 'react';
import styles from '../../../pages/Home/home.module.css';
import AirMaxContent from '../../../components/AirMaxContent/AirMaxContent';
import SliderContent from '../../../components/SliderContent/SliderContent';
import SwiperSilder from '../../../components/Swiper/SwiperSlider';

const AirMax = () => {
  return (
    <section id='airmax'>
      <div className='container'>
        <div className={styles.airmax_wrapper}>
          <AirMaxContent />
          <div className={styles.airmax_bottom}>
            <SliderContent />
            <div className={styles.airmax_slider}>
              <SwiperSilder num={3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirMax;
