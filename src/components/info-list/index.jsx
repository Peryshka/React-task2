import React from 'react';
import styles from './style.module.css';

const InfoList = (props) => {
  return(
    <div className={styles['wrap']}>
      <p>{props.key}</p>
      <p>{props.title}</p>
      <p>{props.body}</p>


    </div>
  )
}
export default InfoList;