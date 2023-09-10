import React from 'react'
import {SiJordan} from "react-icons/si"
import styles from "../../../../features/Layout/Header/hader.module.css"
import SubHeaderList from '../../../../components/SubHeaderList/SubHeaderList';
const SubHeader = () => {
    const subHeaderList = ['Find a Store', 'Help', 'Join Us', 'Sign In'];
  
    return (
      <>
        <figure>
          <SiJordan />
        </figure>
        <div className={styles.skip_content}>
          <a href="#">Skip to main content</a>
        </div>
        <ul className={styles.subHeader_lists}>
          {subHeaderList.map((list, index) => (
            <SubHeaderList key={index} list={list} />
          ))}
        </ul>
      </>
    );
  };
  
 
export default SubHeader