import React from 'react';
import Button from '../../features/Atoms/Button/Button';
import styles from '../../pages/Home/home.module.css';
import Subtitle from '../../features/Atoms/SubTitle/SubTitle';
import Title from '../../features/Atoms/Title/Title';

const AirMaxContent = () => {
  return (
    <div className={styles.airmax_top}>
      <Subtitle>First Look</Subtitle>
      <Title>Nike Air Max Pulse</Title>
      <span>
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
        —designed to push you past your limits and help you go to the max.
      </span>
      <div className={styles.airmax_btns}>
        <Button>Notify Me</Button>
        <Button>Shop Air Max</Button>
      </div>
    </div>
  );
};

export default AirMaxContent;
