import React from 'react';
import Title from '../../features/Atoms/Title/Title';
import Subtitle from '../../features/Atoms/SubTitle/SubTitle';
import Button from '../../features/Atoms/Button/Button';
import styles from '../../pages/Home/home.module.css';

const EssentialsTitle = () => {
  return (
    <div className={styles.essentials_title}>
      <Title>FLIGHT ESSENTIALS</Title>
      <Subtitle>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</Subtitle>
      <Button>Shop</Button>
    </div>
  );
};

export default EssentialsTitle;
