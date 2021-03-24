import React from "react";
import styles from "./Sidebar.module.scss";
import logo from "../../assets/images/Glyph.png";
import { RadioButtonUnchecked } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className={styles.bg}>
      <img
        src={logo}
        alt="#"
        className={styles.logo}
        onMouseOver={(e) => (e.currentTarget.src = logo)}
        onMouseOut={(e) => (e.currentTarget.src = logo)}
      />

      <RadioButtonUnchecked className={styles.icon} />
      <RadioButtonUnchecked className={styles.icon} />
      <RadioButtonUnchecked className={styles.icon} />
      <RadioButtonUnchecked className={styles.icon} />
      <RadioButtonUnchecked className={styles.icon} />
      <RadioButtonUnchecked className={styles.icon} />
      <RadioButtonUnchecked className={styles.icon} />
      <RadioButtonUnchecked className={styles.icon} />
    </div>
  );
};

export default Sidebar;
