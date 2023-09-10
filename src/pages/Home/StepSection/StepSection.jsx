import React from 'react';
import styles from '../../../pages/Home/home.module.css';
import StepTitle from '../../../components/StepTitle/StepTitle';
import StepSliderContent from '../../../components/StepSliderContent/StepSliderContent';

const StepSection = () => {
  return (
    <section id='step'>
      <div className='container'>
        <div className={styles.step_wrapper}>
          <StepTitle />
          <div className={styles.step_bottom}>
            <h3>Gear Up</h3>
            <div className={styles.stepSlider}>
              <StepSliderContent title="Shop Men's" />
              <StepSliderContent title="Shop Women's" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepSection;
