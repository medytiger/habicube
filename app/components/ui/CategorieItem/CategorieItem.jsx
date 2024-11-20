"use client"

import React, { useState } from 'react';
import styles from './CategorieItem.module.css';

export default function CategorieItem({ label, description, icon: Icon }) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    };

    return (
        <div
            className={`${selected ? styles.isSelected : ''} ${styles.itemContainer}`}
            onClick={handleClick}
        >
            <Icon size={17} />
            <div className={styles.categorieItem}>
                <h6 className={styles.boxTitle}>
                    {label}
                </h6>
            </div>
        </div>
    );
}