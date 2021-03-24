import React from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    submitText: string;
}

const Button: React.FC<ButtonProps> = ({onClick, submitText}) => {
    return (
        <button className={styles.btnstyle} onClick={(e) => onClick(e)}> {submitText}</button>
    )
}

export default Button
