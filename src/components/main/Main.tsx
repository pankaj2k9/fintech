import React from "react";
import  styles from './Main.module.scss'
import FilterSearch from '../common/FilterSearch/FilterSearch'

const Main = () => {
    const onFilterHandler = () => {

    }

    const onResetHandler = () => {

    }

    return (
        <div className={styles.bg}>
            <div className={styles.searchBar}>
                <h1 className={styles.heading}>Services</h1>
                 <FilterSearch 
                    onChange={onFilterHandler}
                    onSubmit={onResetHandler}
                    level='Filter'
                    submitText="Reset"
                 />
            </div>
        </div>
    )
}

export default Main