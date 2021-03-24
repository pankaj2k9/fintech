import React, { useState } from "react";
import styles from "./PromoCode.module.scss";
import copyIcon from "../../../assets/images/copy.png";

interface PromoCodeProps {
  level: string;
  value: string;
  placeholder: string;
}

const PromoCode: React.FC<PromoCodeProps> = ({ level, value, placeholder }) => {
  const [tempValue, setTempValue] = useState(value);

  const onCopy = (copyValue: string) => {
    const tempInput = document.createElement("input");
    tempInput.value = tempValue;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.level}>{level}</h3>
      <div className={styles.warpper}>
        <input
          className={styles.input}
          value={tempValue}
          placeholder={placeholder}
          onChange={(e) => setTempValue(e.target.value)}
        />
        <img
          className={styles.icon}
          onClick={() => onCopy(value)}
          src={copyIcon}
          alt="#"
        />
      </div>
    </div>
  );
};

export default PromoCode;
