import React, { useState } from 'react';
import Button from '../button/button';
import { PiSlidersHorizontal } from 'react-icons/pi';
import Input from '../inputs/input';
import style from './SearchFilters.module.css';

export default function SearchFilters() {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const categories = ['Tous', 'Appartements', 'Parcelles', 'Entrepôts', 'Villas', 'Bureaux', 'Chambres'];

    // Fonction pour gérer la sélection/désélection
    const toggleFilter = (filter) => {
        if (selectedFilters.includes(filter)) {
            setSelectedFilters(selectedFilters.filter((item) => item !== filter));
        } else {
            setSelectedFilters([...selectedFilters, filter]);
        }
    };

    return (
        <div className={`${style.searchFilters} container`}>
            <div className={style.searchFiltersContainer}>
                <div className={style.searchFiltersMain}>
                    <div className={style.searchInputWrapper}>
                        <Input
                            placeholder="Search by location, property type, or keywords..."
                            className={style.searchInput}
                        />
                    </div>
                    <PiSlidersHorizontal className={style.filterIcon} />
                    <Button
                        label="Recherchez"
                        width="130px"
                    />
                </div>

                <div className={style.searchFiltersTags}>
                    {categories.map((filter) => (
                        <button
                            key={filter}
                            className={`${style.tagButton} ${selectedFilters.includes(filter) ? style.selected : ''
                                }`}
                            onClick={() => toggleFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
