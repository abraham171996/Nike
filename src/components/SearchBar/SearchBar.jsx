import React from 'react';
import { CiSearch } from 'react-icons/ci';
import styles from '../../../src/features/Layout/Header/hader.module.css'; // Define your CSS module styles here

const SearchBar = () => {
  return (
    <div className={styles.inpt}>
      <input type="text" placeholder='Search' />
      <CiSearch />
    </div>
  );
};

export default SearchBar;
