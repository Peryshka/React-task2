import React from 'react';
import styles from './style.module.css';

const InfoList = (props) => {
  //get values from parent component through props
  return (
    <div className={styles['wrap']}>
      <p>{props.key}</p>
      <p>{props.title}</p>
      <p>{props.body}</p>
    </div>
  )
  //The end of get values from parent component through props
}
export default InfoList;

