import React from 'react';
import styles from './style.module.css';
//get values from parent component through props
const InfoList = (props) => {
  return (
    <ul className={styles['wrap']}>
      <li key={props.id} className={styles.list}>
        <h3>{props.title}</h3>
        <button onClick={props.onClick} className={styles.deleteBtn}>Delete</button>
      </li>
    </ul>
  )
}
//The end of get values from parent component through props
export default InfoList;



