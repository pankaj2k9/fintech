import React from 'react'
import styles from './FilterSearch.module.scss';

interface FilterSearchProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    level: string;
    submitText: string;
    value: string;
    placeholder: string;
}

const FilterSearch: React.FC<FilterSearchProps> =({onChange, onSubmit, level, value, placeholder, submitText})=> {
    return (
        <div className={styles.container}>
            <h3 className={styles.level}>{level}</h3>
            <input
            className={styles.input}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e)} />
            <button className={styles.btn} onClick={(e) => onSubmit(e)}>{submitText}</button>
        </div>
    )
}

export default FilterSearch
