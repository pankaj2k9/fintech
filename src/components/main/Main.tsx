import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import FilterSearch from "../common/FilterSearch/FilterSearch";
import BonusItem from "../common/BonusItem/BonusItem";
import { Bonus } from "../../types/index";

const data: Bonus[] = [
  {
    id: 1,
    title: "Sitecostructor.io",
    description: "Description",
    promocode: "itpromocodes",
    activated: false,
  },
  {
    id: 2,
    title: "Appvision.com",
    description: "Description",
    promocode: "itpromocodes",
    activated: false,
  },
  {
    id: 3,
    title: "Analytics.com",
    description: "Description",
    promocode: "itpromocodes",
    activated: false,
  },
  {
    id: 4,
    title: "Logotype",
    description: "Description",
    promocode: "itpromocodes",
    activated: false,
  },
];

const Main = () => {
  const [filteredText, setFilteredText] = useState("");

  const [datas, setData] = useState(data);

  useEffect(() => {
    setData(data);
  }, []);

  const onFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredText(e.target.value);
    const updateData = datas.filter((singleData) =>
      singleData.title.includes(e.target.value)
    );
    setData(updateData);
  };

  const onResetHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFilteredText("");
    setData(data);
  };

  const onChangeActivate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    selectedData: Bonus
  ) => {
    const updatedLists = datas.map((data) =>
      data.id === selectedData.id
        ? { ...data, activated: !data.activated }
        : data
    );
    setData(updatedLists);
  };

  return (
    <div className={styles.bg}>
      <div className={styles.searchBar}>
        <h1 className={styles.heading}>Services</h1>
        <FilterSearch
          onChange={onFilterHandler}
          onSubmit={onResetHandler}
          level="Filter"
          submitText="Reset"
          placeholder="Search...."
          value={filteredText}
        />
      </div>
      {datas &&
        datas.length > 0 &&
        datas.map((singleData, index) => {
          return (
            <BonusItem
              data={singleData}
              key={singleData.id}
              onChangeActivate={onChangeActivate}
            />
          );
        })}
    </div>
  );
};

export default Main;
