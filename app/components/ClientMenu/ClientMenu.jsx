"use client"

import React from 'react';
import styles from './ClientMenu.module.css';
import CategorieItem from '../ui/CategorieItem/CategorieItem';
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsPinMap } from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { TbBuildingWarehouse } from "react-icons/tb";
import { GiModernCity } from "react-icons/gi";
import { GiHouse } from "react-icons/gi";
import { PiBuildingOffice } from "react-icons/pi";




export const categories = [
    {
        label: 'Appartements',
        icon: HiOutlineHomeModern,
        description: 'Espaces de vie indépendants, généralement situés dans des immeubles, offrant confort et commodités.'
    },
    {
        label: 'Terrains',
        icon: BsPinMap,
        description: 'Parcelles de terre disponibles pour la construction, le développement ou l’agriculture.'
    },
    {
        label: 'Appartements meublés',
        icon: IoBedOutline,
        description: 'Appartements entièrement équipés avec meubles et équipements, idéaux pour les séjours de courte durée.'
    },
    {
        label: 'Entrepôts',
        icon: TbBuildingWarehouse,
        description: 'Espaces de stockage ou de distribution utilisés pour le stockage de marchandises et de produits.'
    },
    {
        label: 'Villas',
        icon: GiHouse,
        description: 'Propriétés spacieuses et luxueuses, souvent avec jardin, piscine et autres commodités.'
    },
    {
        label: 'Bureaux',
        icon: GiModernCity,
        description: 'Espaces dédiés au travail professionnel, adaptés aux entreprises et aux travailleurs indépendants.'
    },
    {
        label: "Chambres d'hôtes",
        icon: PiBuildingOffice,
        description: 'Hébergements privés offrant des chambres à louer, souvent avec petit-déjeuner inclus, pour une expérience conviviale.'
    }
];

export default function ClientMenu() {
    return (
        <div className={styles.clientMenu}>
            <div className={`${styles.itemContainer} container`}>
                {categories.map((item) => (
                    <CategorieItem
                        key={item.id} // Utilisez un identifiant unique si possible
                        label={item.label}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
}