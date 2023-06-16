import React from "react";
import styles from "./CSS/cat.module.css";

export const Cat = () => {
  return (
    <div className={styles.cat}>
      <div className={styles.head}>
        <div className={styles.ears}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
        <div className={styles.eyes}></div>
        <div className={styles.pupils}></div>
        <div className={styles.light}></div>
        <div className={styles.mouth}></div>
      </div>
      <div className={styles.body}></div>
      <div className={styles.tail}></div>
    </div>
  );
};
