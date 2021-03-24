import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.textWarpper}>
        <p className={styles.mainHeading}>Balance</p>
        <p className={styles.subHeading}>213 920 $</p>
      </div>
      <div className={styles.textWarpper}>
        <p className={styles.mainHeading}>Payout</p>
        <p className={styles.subHeading}> 159 465$</p>
      </div>
    </div>
  );
};

export default Header;
