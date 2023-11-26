import React from 'react';
import styles from './Toggle.module.css';


function ToggleSwitchChangeBg({value, onChange}) {
  return(
    <div className={styles.wrapToggle}>
      <h2>Switch the background: </h2>
     <label className={styles.switch} >
       <input type="checkbox" onChange={onChange} checked={value} className={styles.inp} />
       <span className={styles["slider"]}></span>
     </label>
    </div>
  )
};

export default ToggleSwitchChangeBg;