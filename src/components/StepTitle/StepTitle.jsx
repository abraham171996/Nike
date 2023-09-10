import React from 'react';
import Title from '../../features/Atoms/Title/Title';
import Subtitle from '../../features/Atoms/SubTitle/SubTitle';
import Button from '../../features/Atoms/Button/Button';
import styles from '../../pages/Home/home.module.css';
const StepTitle = () => {
  return (
    <div className={styles.step_title}>
      <Title>STEP INTO WHAT FEELS GOOD</Title>
      <Subtitle>Cause everyone should know the feeling of running in that perfect pair.</Subtitle>
      <Button>Find Your Shoe</Button>
    </div>
  );
};

export default StepTitle;
