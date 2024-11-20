"use client"

import React from 'react'
import style from './Avatar.module.css'
import Image from 'next/image'

export default function Avatar() {
    return (
        <Image
            height="25"
            width="25"
            alt='User avatar image'
            src="/avatar.png"
        />
    )
}
