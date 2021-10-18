import React from 'react';
import styles from './Dialogs.module.scss';


const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog + '' + styles.active}>User 1</div>
        <div className={styles.dialog}>User 2</div>
        <div className={styles.dialog}>User 3</div>
        <div className={styles.dialog}>User 4</div>
        <div className={styles.dialog}>User 5</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>Hello, how are you?</div>
        <div className={styles.message}>Tomorrow at 9.</div>
        <div className={styles.message}>Welcome to our shop.</div>
      </div>
    </div>
  );
};

export default Dialogs;