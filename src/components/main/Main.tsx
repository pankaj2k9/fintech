import React, { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import FilterSearch from "../common/FilterSearch/FilterSearch";
import BonusItem from "../common/BonusItem/BonusItem";
import { Bonus } from "../../types/index";


const Main = () => {
  const [filteredText, setFilteredText] = useState("");

  const [datas, setData] = useState<Bonus[]|any[] | any>([]);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = () => {
    fetch("https://605b9fe027f0050017c079b0.mockapi.io/api/v1/bonuses")
      .then(res => res.json())
      .then(
        (result) => {
          setLoading(true);
          setData(result)
        },
        (error) => {
          setError(error)
          setLoading(false);
        }
      )
  }

  // Filtering items every time change letter

  const onFilterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredText(e.target.value);
    const updateData = datas && datas.length > 0 && datas.filter((singleData : Bonus) =>
      singleData.title.includes(e.target.value)
    );
    if(e.target.value === "") {
      fetchData();
    }
    setData(updateData);
  };

 // Reseting item lists
 
  const onResetHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFilteredText("");
    fetchData();
  };

  // changing active mode for a specific item

  const onChangeActivate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    selectedData: Bonus
  ) => {
    const updatedLists = datas.map((data : Bonus) =>
      data.id === selectedData.id
        ? { ...data, activated: !data.activated }
        : data
    );
    setData(updatedLists);
  };

  if (error) {
    return <div>Error: {error?.message}</div>;
  } else if (!loading) {
    return <div>Loading...</div>;
  } else {
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
        datas.map((singleData: Bonus, index: number) => {
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
      }
};

export default Main;
