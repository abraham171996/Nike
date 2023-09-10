import React from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import styles from '../../pages/Home/home.module.css';

const SliderContent = () => {
  return (
    <div className={styles.slider_content}>
      <div className={styles.left}>
        <h4>Best of Air Max</h4>
      </div>
      <div className={styles.right}>
        <p>Shop</p>
        <div className={styles.slider_icons}>
          <figure>
            <MdOutlineArrowBackIos />
          </figure>
          <figure>
            <MdOutlineArrowForwardIos />
          </figure>
        </div>
      </div>
    </div>
  );
};
// sds
export default SliderContent;
