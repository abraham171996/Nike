import React from 'react';
import styles from '../../pages/Home/home.module.css';
const Category = ({ title, items }) => {
  return (
    <div className={styles.category}>
      <h4>{title}</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
