import React from 'react';
import styles from '../../pages/Home/home.module.css';

const EssentialsCard = ({ image, label }) => {
  return (
    <div className={styles.card}>
      <figure>
        <img src={image} alt="" />
      </figure>
      <a href="">{label}</a>
    </div>
  );
};

export default EssentialsCard;
