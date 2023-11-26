import React from 'react';
import {useState} from 'react';
import styles from './Toggle.module.css';


function ToggleSwitchChangeBg() {
  const [isNight, setIsNight] = useState(false);
  function handleNight() {
    setIsNight(!isNight);
  }
  return(
    <div className={styles.wrapToggle}>
      <h1>{isNight ? 'Night Mode' : 'Day Mode'}</h1>
      <h2>Switch the background: </h2>
     <label className={styles.switch} >
       <input type="checkbox" onChange={handleNight} checked={isNight} className={styles.inp} />
       <span className={styles["slider"]}></span>
     </label>
    </div>
  )
};

export default ToggleSwitchChangeBg;