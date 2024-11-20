"use client";

import React, { useState } from 'react';
import styles from './AddCategoryInput.module.css'; // Assurez-vous d'importer vos styles

export default function AddCategoryInput({ label, description, icon: Icon }) {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setSelected(!selected);
    };

    return (
        <div
            className={`${selected ? styles.isSelected : ''} ${styles.itemContainer}`}
            onClick={handleClick} // Corrected to call handleClick
        >
            <Icon size={17} />
            <div >
                <h6 >
                    {label}
                </h6>
            </div>
        </div>

    );
}