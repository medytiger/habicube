"use client"

import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '@/app/hooks/Context';
import style from './HomeMain.module.css';

export default function HomeMain() {
    const [usersEmail, setUsersEmail] = useState(null);


    return (
        <div className={style.HomeMainContainer}>
            Hi
        </div>
    );
}