import React from "react";
import styles from "./BonusItem.module.scss";
import PromoCode from "../PromoCode/PromoCode";
import { Bonus } from "../../../types/index";
import Button from "../Button/Button";

interface BonusItemProps {
  onChangeActivate: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: Bonus
  ) => void;
  data: Bonus;
}

const BonusItem: React.FC<BonusItemProps> = ({ onChangeActivate, data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleDescWrap}>
        <h1 className={styles.heading}>{data.title}</h1>
        <p className={styles.subHeading}>{data.description}</p>
      </div>

      <div className={styles.promoWarp}>
        <PromoCode
          level="Promocode"
          placeholder="Search...."
          value={data.promocode}
        />
      </div>
      <div className={styles.btnWarp}>
        <Button
          onClick={(e) => onChangeActivate(e, data)}
          submitText={data.activated ? "Activated" : "Active Bonus"}
        />
      </div>
    </div>
  );
};

export default BonusItem;
