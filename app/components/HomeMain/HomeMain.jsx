"use client"

import React, { useState } from 'react';
import { useGlobalContext } from '@/app/hooks/Context';
import style from './HomeMain.module.css';
import SearchFilterd from '../ui/SearchFilters/SearchFilters'
import PropertyGrid from '../PropertyGrid/PropertyGrid';

export default function HomeMain() {


    return (
        <div className={style.HomeMainContainer}>
            <SearchFilterd />
            <PropertyGrid />
        </div>
    );
}