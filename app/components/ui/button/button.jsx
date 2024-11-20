import React from 'react'
import styles from './button.module.css'

export default function Button(
    {
        label,
        outline,
        icon: Icon,
        width = '100%',
        onClick
    }
) {
    return (

        <button className={`
            ${styles.button} 
            ${outline ? styles.secondaryButton : ''}`}
            style={{ width: width }}
            onClick={onClick}
        >
            {Icon && (
                <Icon className={styles.buttonIcon} />
            )}
            {label}
        </button>


    )
}
