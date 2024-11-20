"use client";

import React, { useState } from 'react';
import { BiDollar } from 'react-icons/bi';
import styles from './input.module.css';


export default function Input({
    id,
    label,
    hideLabel = false,
    type = "text",
    value,
    onChange,
    formatPrice = false,
    placeholder,
    register,
    required,
    validate,
    icon,
    errors
}) {
    const [isFocused, setIsFocused] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    const handleBlur = (e) => {
        setIsFocused(false);
        setIsEmpty(e.target.value === '');
    };

    return (
        <div className={`
            ${styles.inputContent} 
            ${isFocused ? styles.focus : ''} 
            ${hideLabel ? styles.searchInput : ''}
        `}
        >
            {formatPrice && (
                <BiDollar className={styles.biDollar} />
            )}
            <input
                className={`${styles.inputStyle} ${hideLabel ? styles.hidePadding : ''}`}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder} // Vous pouvez ajouter un texte de placeholder ici si nécessaire
                type={type}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
            />
            <label
                className={`${styles.label} ${isFocused || !isEmpty ? styles.labelActive : ''} ${hideLabel ? styles.hideLabel : ''} `}
                htmlFor={id}
            >
                {label}
            </label>

            {icon &&
                <span className={`${styles.inputIcon}`}>
                    {icon}
                </span>
            }
            {errors && <p className={styles.error}>{errors}</p>}
        </div>
    );
}