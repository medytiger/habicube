// import React from 'react';
// import countries from 'world-countries';
// import Select from 'react-select';
// import styles from './Pays.module.css';

// export default function Pays({ value, onChange = () => { } }) {
//     const formattedCountries = countries.map((country) => ({
//         value: country.cca2, // Code alpha-2 du pays
//         label: country.translations.fra.common, // Nom commun du pays
//         flag: country.flag, // Drapeau du pays
//         latlng: country.latlng, // Latitude et longitude
//         region: country.region // Région du pays
//     }));

//     return (
//         <div className={styles.paysContainer}>
//             <Select
//                 className={styles.selectContainer}
//                 placeholder="Sélectionnez un pays"
//                 options={formattedCountries}
//                 value={formattedCountries.find(option => option.value === value)}
//                 onChange={(selectedOption) => {
//                     if (typeof onChange === 'function') {
//                         onChange(selectedOption ? selectedOption : null); // Passez l'objet `selectedOption` complet
//                     }
//                 }}
//                 isClearable
//                 formatOptionLabel={(option) => (
//                     <div className={styles.countryData}>
//                         <span>{option.label}</span>
//                         <span className={styles.region}>{option.region}</span>
//                     </div>
//                 )}
//                 theme={(theme) => ({
//                     ...theme,
//                     borderRadius: 4,
//                     colors: {
//                         ...theme.colors,
//                         primary: '#ff8cae',
//                         primary25: '#ffd6e9e3'
//                     }
//                 })}
//             />
//         </div>
//     );
// }


import React from 'react';
import countries from 'world-countries';
import Select from 'react-select';
import styles from './Pays.module.css';

export default function Pays({ value, onChange = () => { } }) {
    // Formatez les pays
    const formattedCountries = countries.map((country) => ({
        value: country.cca2,
        label: country.translations.fra.common,
        flag: country.flag,
        latlng: country.latlng,
        region: country.region
    }));

    return (
        <div className={styles.paysContainer}>
            <Select
                className={styles.selectContainer}
                placeholder="Sélectionnez un pays"
                options={formattedCountries}
                value={formattedCountries.find(option => option.value === value)}
                onChange={(selectedOption) => {
                    if (typeof onChange === 'function') {
                        onChange(selectedOption ? selectedOption : null);
                    }
                }}
                isClearable
                formatOptionLabel={(option) => (
                    <div className={styles.countryData}>
                        <span>{option.label}</span>
                        <span className={styles.region}>{option.region}</span>
                    </div>
                )}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                        ...theme.colors,
                        primary: '#ff8cae',
                        primary25: '#ffd6e9e3'
                    }
                })}
            />
        </div>
    );
}