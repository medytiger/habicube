'use client'
import React from 'react'
import styles from './logo.module.css'
import Image from 'next/image'

export default function logo() {
    return (

        <Image
            className={`${styles.logo}`}
            alt='Logo'
            src='/LOGO.png'
            width="30"
            height="35"
        />
    )
}
