import React from 'react';
import styles from '../../../pages/Home/home.module.css';
import EssentialsTitle from '../../../components/EssentialsTitle/EssentialsTitle';
import EssentialsHeading from '../../../components/EssentialsHeading/EssentialsHeading';
import EssentialsCard from '../../../components/EssentialsCard/EssentialsCard';
import Es1 from '../../../assets/images/es1.png';
import Es2 from '../../../assets/images/es2.png';
import Es3 from '../../../assets/images/es3.png';

const Essentials = () => {
  return (
    <section id='essentials'>
      <div className="container">
        <div className={styles.essentials_wrapper}>
          <EssentialsTitle />
          <div className={styles.essentials_bottom}>
            <EssentialsHeading />
            <div className={styles.essentials_cards}>
              <EssentialsCard image={Es1} label="Men's" />
              <EssentialsCard image={Es2} label="Women's" />
              <EssentialsCard image={Es3} label="Kids'" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essentials;
