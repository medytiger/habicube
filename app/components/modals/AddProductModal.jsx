// "use client";

// import React, { useEffect, useMemo, useState } from 'react';
// import styles from './modal.module.css';
// import Modals from './Modals';
// import { useGlobalContext } from '@/app/hooks/Context';
// import Heading from './Heading';
// import Button from '../ui/button/button';
// import { categories } from '../ClientMenu/ClientMenu';
// import AddCategoryInput from '../ui/addCategoryInput/addCategoryInput';
// import Pays from '../ui/Pays/Pays';
// import dynamic from 'next/dynamic';
// import Counters from '../ui/counters/counters';
// import { IoCloudUploadOutline } from "react-icons/io5";
// import { IoIosLink } from "react-icons/io";
// import Input from '../ui/inputs/input';



// export default function AddProductModal() {
//     const { isAddProductModalOpen, closeAddProductModal } = useGlobalContext();
//     const [isLoading, setIsLoading] = useState(false);
//     const [isEntering, setIsEntering] = useState(false);
//     const [isFocused, setIsFocused] = useState(false);
//     const [homeData, setHomeData] = useState({
//         categorie: "",
//         pays: null, // Initialement vide, contiendra les informations sur le pays
//         ville: "",
//         typePropriete: "",
//         titre: "",
//         surface: 0.0,
//         pieces: 1,
//         nombreChambres: 0,
//         nombreSalon: 0,
//         nombreSallesDeBain: 0,
//         nouvelleConstruction: 0,
//         commoditesIncluses: [],
//         etatDuBien: "",
//         description: "",
//         prix: 0.0,
//         disponibilite: true,
//         contactProprietaire: {
//             nom: "",
//             email: "",
//             telephone: ""
//         },
//         images: [],
//         video: [],
//         dateAjout: "",
//         historique: []
//     });

//     const handleBlur = (e) => {
//         setIsFocused(false);
//     };

//     const STEPS = {
//         CATEGORIE: 0,
//         PLACEMENT: 1,
//         INFO: 2,
//         VISUEL: 3,
//         DESCRIPTION: 4,
//         PRIX: 5
//     };

//     const [step, setStep] = useState(STEPS.CATEGORIE);
//     const [prevStep, setPrevStep] = useState(0);

//     useEffect(() => {
//         if (step > prevStep) {
//             setIsEntering(true);
//         } else {
//             setIsEntering(false);
//         }
//     }, [step, prevStep]);

//     const onBack = () => {
//         setPrevStep(step);
//         setStep((value) => Math.max(value - 1, 0));
//     };

//     const onNext = () => {
//         setPrevStep(step);
//         setStep((value) => Math.min(value + 1, 5));
//     };

//     const actionLabel = useMemo(() => {
//         if (step === STEPS.PRIX) {
//             return "Enregistrer";
//         }
//         return "Suivant";
//     }, [step]);

//     const secondaryActionLabel = useMemo(() => {
//         if (step === STEPS.CATEGORIE) {
//             return undefined;
//         }
//         return "Précédent";
//     }, [step]);

//     // Utilisation dynamique du composant Map pour éviter les problèmes SSR
//     const Map = useMemo(() => dynamic(() => import('../ui/Map/Map'), {
//         ssr: false,
//     }), [homeData.pays]);

//     // Fonction appelée lors de la sélection d'un pays dans le composant Pays
//     const handleCountryChange = (selectedCountry) => {
//         setHomeData((prev) => ({
//             ...prev,
//             pays: selectedCountry // Mettre à jour le pays sélectionné avec toutes ses informations
//         }));
//     };


//     // Fonction pour mettre à jour les "pieces" dans homeData
//     const handlePiecesChange = (newPieces) => {
//         setHomeData(prevData => ({
//             ...prevData,
//             pieces: newPieces
//         }));
//     };


//     let bodyContent = (
//         <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
//             <Heading
//                 title="Laquelle de ces catégories décrit le mieux votre propriété ?"
//                 subtitle="Sélectionnez la catégorie"
//                 center='flex-start'
//             />
//             <div className={styles.categoryGrid}>
//                 {categories.map((category) => (
//                     <div key={category.label}>
//                         <AddCategoryInput
//                             label={category.label}
//                             icon={category.icon}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );

//     if (step === STEPS.PLACEMENT) {
//         bodyContent = (
//             <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
//                 <Heading
//                     title="Placement de votre propriété"
//                     subtitle="Sélectionnez l'emplacement"
//                     center='flex-start'
//                 />
//                 <div className={styles.PlaceContent}>
//                     {/* Le composant Pays met à jour les informations sur le pays */}
//                     <Pays
//                         value={homeData.pays ? homeData.pays.value : null}
//                         onChange={handleCountryChange} // Mise à jour lors de la sélection d'un pays
//                     />
//                     {/* Le composant Map affiche les coordonnées du pays sélectionné */}
//                     <Map
//                         center={homeData.pays?.latlng || [51.505, -0.09]} // Par défaut, Londres
//                     />

//                     <Input label={'ville'} />
//                     <Input label={'commune'} />
//                     <Input label={'quartier'} />
//                     <Input label={'nomRue'} />
//                     <Input label={'codePostal'} />
//                 </div>
//             </div>
//         );
//     }

//     if (step === STEPS.INFO) {
//         bodyContent = (
//             <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
//                 <Heading
//                     title="Informations sur votre propriété"
//                     subtitle="Veuillez fournir les détails"
//                     center='flex-start'
//                 />
//                 <div className={styles.bodyItem}>
//                     <Counters
//                         title='Nombre de pièces'
//                         subtitle='Votre propriété contient combien de pièces'
//                         value={homeData.pieces}
//                         onChange={handlePiecesChange}  // Correction ici pour passer la bonne fonction
//                     />
//                     <hr className={styles.space} />
//                     <Counters
//                         title='Nombre de salons'
//                         subtitle='Votre propriété contient combien de salons'
//                         value={homeData.pieces}
//                         onChange={handlePiecesChange}  // Correction ici pour passer la bonne fonction
//                     />
//                     <hr className={styles.space} />
//                     <Counters
//                         title='Nombre de chambre'
//                         subtitle='Votre propriété contient combien de chambre'
//                         value={homeData.pieces}
//                         onChange={handlePiecesChange}  // Correction ici pour passer la bonne fonction
//                     />
//                     <hr className={styles.space} />
//                     <Counters
//                         title="Nombre de salle d'eau"
//                         subtitle="Votre propriété contient combien de salle d'eau"
//                         value={homeData.nombreSallesDeBain}
//                         onChange={handlePiecesChange}  // Correction ici pour passer la bonne fonction
//                     />
//                     <hr className={styles.space} />
//                     <Counters
//                         title="Nombre de personnes"
//                         subtitle="Votre propriété peut accueillir combien de personnes ?"
//                         value={homeData.nombreSallesDeBain}
//                         onChange={handlePiecesChange}  // Correction ici pour passer la bonne fonction
//                     />
//                 </div>
//             </div>
//         );
//     }

//     if (step === STEPS.VISUEL) {
//         bodyContent = (
//             <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
//                 <Heading
//                     title="Visuels de votre propriété"
//                     subtitle="Ajoutez des images et vidéos"
//                     center='flex-start'
//                 />
//                 <div className={styles.fileContainer}>
//                     <div className={styles.filesInput} >
//                         <input type="file" name="" id="" />
//                         <IoCloudUploadOutline className={styles.uploadIcon} />
//                     </div>

//                     <div className={styles.imageByUrl}>
//                         <IoIosLink className={styles.imageByUrlIcon} />
//                         <input
//                             type="url"
//                             name=""
//                             id=""
//                             placeholder='Ajouter une image ou une vidéo à travers un lien.'
//                             className={isFocused ? 'focus' : ''}
//                             onFocus={() => setIsFocused(true)}
//                             onBlur={() => setIsFocused(false)} />
//                     </div>
//                     <div className={styles.previewContainer}>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                         <div className={styles.img}></div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     if (step === STEPS.DESCRIPTION) {
//         bodyContent = (
//             <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
//                 <Heading
//                     title="Description de votre propriété"
//                     subtitle="Décrivez votre bien"
//                     center='flex-start'
//                 />
//                 <div className={styles.descriptionContent}>

//                     <Input label={'titre'} />
//                     <Input label={'standing'} />
//                     <Input label={'typePlacement'} />

//                     <textarea
//                         placeholder="description"
//                         className={`${styles.textarea} ${isFocused ? styles.focus : ''}`}
//                         onFocus={() => setIsFocused(true)}
//                         onBlur={handleBlur}
//                     />


//                     <Input label={'superficie'} />
//                     <Input label={'commodites'} />

//                 </div>
//             </div>
//         );
//     }

//     if (step === STEPS.PRIX) {
//         bodyContent = (
//             <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
//                 <Heading
//                     title="Prix de votre propriété"
//                     subtitle="Indiquez le prix souhaité"
//                     center='flex-start'
//                 />
//                 <div className={styles.prixContent}>
//                     <Input label={'conditions'} />
//                     <Input label={'duree'} />
//                     <Input label={'prix'} />
//                 </div>
//             </div>
//         );
//     }

//     const footerContent = (
//         <div className={styles.footerButtonContainer}>
//             {step !== STEPS.CATEGORIE && (
//                 <Button
//                     outline
//                     label="Précédent"
//                     onClick={onBack}
//                 />
//             )}
//             {step !== STEPS.PRIX && (

//                 <Button
//                     label="Suivant"
//                     onClick={onNext}
//                 />

//             )}
//             {step == STEPS.PRIX && (
//                 <>
//                     <Button
//                         label="Enregistrer"
//                         type="submit"
//                     />
//                 </>
//             )}
//         </div>
//     );


//     return (

//         <Modals
//             disabled={isLoading}
//             isOpen={isAddProductModalOpen}
//             title="Ajoutez votre propriété"
//             itemWidth="400px"
//             itemHeight="630px"
//             onSubmit={onNext}
//             onClose={closeAddProductModal}
//             actionLabel={actionLabel}
//             secondaryAction={step === STEPS.CATEGORIE ? undefined : onBack}
//             secondaryActionLabel={secondaryActionLabel}
//             body={bodyContent}
//             footer={footerContent}
//         />
//     );
// }

"use client"; // Assurez-vous que ce composant est un composant client

import React, { useEffect, useMemo, useState } from 'react';
import styles from './modal.module.css';
import Modals from './Modals';
import { useGlobalContext } from '@/app/hooks/Context';
import Heading from './Heading';
import Button from '../ui/button/button';
import { categories } from '../ClientMenu/ClientMenu';
import AddCategoryInput from '../ui/addCategoryInput/addCategoryInput';
import Pays from '../ui/Pays/Pays';
import dynamic from 'next/dynamic';
import Counters from '../ui/counters/counters';
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import Input from '../ui/inputs/input';

// Utilisation dynamique du composant Map pour éviter les problèmes SSR
const Map = dynamic(() => import('../ui/Map/Map'), { ssr: false });

export default function AddProductModal() {
    const { isAddProductModalOpen, closeAddProductModal } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [isEntering, setIsEntering] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [homeData, setHomeData] = useState({
        categorie: "",
        pays: null,
        ville: "",
        typePropriete: "",
        titre: "",
        surface: 0.0,
        pieces: 1,
        nombreChambres: 0,
        nombreSalon: 0,
        nombreSallesDeBain: 0,
        nouvelleConstruction: 0,
        commoditesIncluses: [],
        etatDuBien: "",
        description: "",
        prix: 0.0,
        disponibilite: true,
        contactProprietaire: { nom: "", email: "", telephone: "" },
        images: [],
        video: [],
        dateAjout: "",
        historique: []
    });

    const STEPS = {
        CATEGORIE: 0,
        PLACEMENT: 1,
        INFO: 2,
        VISUEL: 3,
        DESCRIPTION: 4,
        PRIX: 5
    };

    const [step, setStep] = useState(STEPS.CATEGORIE);
    const [prevStep, setPrevStep] = useState(0);

    useEffect(() => {
        setIsEntering(step > prevStep);
    }, [step, prevStep]);

    const onBack = () => {
        setPrevStep(step);
        setStep((value) => Math.max(value - 1, 0));
    };

    const onNext = () => {
        setPrevStep(step);
        setStep((value) => Math.min(value + 1, STEPS.PRIX));
    };

    const actionLabel = useMemo(() => (step === STEPS.PRIX ? "Enregistrer" : "Suivant"), [step]);
    const secondaryActionLabel = useMemo(() => (step === STEPS.CATEGORIE ? undefined : "Précédent"), [step]);

    // Fonction appelée lors de la sélection d'un pays dans le composant Pays
    const handleCountryChange = (selectedCountry) => {
        setHomeData((prev) => ({
            ...prev,
            pays: selectedCountry // Mettre à jour le pays sélectionné avec toutes ses informations
        }));
    };

    // Fonction pour mettre à jour les "pieces" dans homeData
    const handlePiecesChange = (newPieces) => {
        setHomeData(prevData => ({ ...prevData, pieces: newPieces }));
    };

    let bodyContent;

    switch (step) {
        case STEPS.CATEGORIE:
            bodyContent = (
                <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
                    <Heading title="Laquelle de ces catégories décrit le mieux votre propriété ?" subtitle="Sélectionnez la catégorie" center='flex-start' />
                    <div className={styles.categoryGrid}>
                        {categories.map((category) => (
                            <div key={category.label}>
                                <AddCategoryInput label={category.label} icon={category.icon} />
                            </div>
                        ))}
                    </div>
                </div>
            );
            break;

        case STEPS.PLACEMENT:
            bodyContent = (
                <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
                    <Heading title="Placement de votre propriété" subtitle="Sélectionnez l'emplacement" center='flex-start' />
                    <div className={styles.PlaceContent}>
                        <Pays value={homeData.pays ? homeData.pays.value : null} onChange={handleCountryChange} />
                        <Map center={homeData.pays?.latlng || [51.505, -0.09]} />
                        <Input label={'ville'} />
                        <Input label={'commune'} />
                        <Input label={'quartier'} />
                        <Input label={'nomRue'} />
                        <Input label={'codePostal'} />
                    </div>
                </div>
            );
            break;

        case STEPS.INFO:
            bodyContent = (
                <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
                    <Heading title="Informations sur votre propriété" subtitle="Veuillez fournir les détails" center='flex-start' />
                    <div className={styles.bodyItem}>
                        <Counters title='Nombre de pièces' subtitle='Votre propriété contient combien de pièces' value={homeData.pieces} onChange={handlePiecesChange} />
                        <hr className={styles.space} />
                        <Counters title='Nombre de salons' subtitle='Votre propriété contient combien de salons' value={homeData.nombreSalon} onChange={(newValue) => setHomeData(prev => ({ ...prev, nombreSalon: newValue }))} />
                        <hr className={styles.space} />
                        <Counters title='Nombre de chambres' subtitle='Votre propriété contient combien de chambres' value={homeData.nombreChambres} onChange={(newValue) => setHomeData(prev => ({ ...prev, nombreChambres: newValue }))} />
                        <hr className={styles.space} />
                        <Counters title="Nombre de salles d'eau" subtitle="Votre propriété contient combien de salles d'eau" value={homeData.nombreSallesDeBain} onChange={(newValue) => setHomeData(prev => ({ ...prev, nombreSallesDeBain: newValue }))} />
                        <hr className={styles.space} />
                        <Counters title="Nombre de personnes" subtitle="Votre propriété peut accueillir combien de personnes ?" value={homeData.nombreSallesDeBain} onChange={(newValue) => setHomeData(prev => ({ ...prev, nombreSallesDeBain: newValue }))} />
                    </div>
                </div>
            );
            break;

        case STEPS.VISUEL:
            bodyContent = (
                <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
                    <Heading title="Visuels de votre propriété" subtitle="Ajoutez des images et vidéos" center='flex-start' />
                    <div className={styles.fileContainer}>
                        <div className={styles.filesInput}>
                            <input type="file" name="" id="" />
                            <IoCloudUploadOutline className={styles.uploadIcon} />
                        </div>
                        <div className={styles.imageByUrl}>
                            <IoIosLink className={styles.imageByUrlIcon} />
                            <input type="url" name="" id="" placeholder='Ajouter une image ou une vidéo à travers un lien.' className={isFocused ? 'focus' : ''} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                        </div>
                        {/* Prévisualisation des images */}
                        <div className={styles.previewContainer}>
                            {/* Ajoutez ici la logique pour afficher les images prévisualisées */}
                        </div>
                    </div>
                </div>
            );
            break;

        case STEPS.DESCRIPTION:
            bodyContent = (
                <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
                    <Heading title="Description de votre propriété" subtitle="Décrivez votre bien" center='flex-start' />
                    <div className={styles.descriptionContent}>
                        <Input label={'titre'} />
                        <Input label={'standing'} />
                        {/* Ajoutez d'autres champs nécessaires */}
                        <textarea placeholder="description" className={`${styles.textarea} ${isFocused ? styles.focus : ''}`} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}></textarea>
                    </div>
                </div>
            );
            break;

        case STEPS.PRIX:
            bodyContent = (
                <div className={`${styles.bodyContent} ${isEntering ? styles.slideEnter : styles.slideExit} ${isEntering ? styles.slideEnterActive : ''}`}>
                    <Heading title="Prix de votre propriété" subtitle="Indiquez le prix souhaité" center='flex-start' />
                    <div className={styles.prixContent}>
                        {/* Ajoutez ici les champs nécessaires pour le prix */}
                    </div>
                </div>
            );
            break;

        default:
            bodyContent = null;
            break;
    }

    const footerContent = (
        <div className={styles.footerButtonContainer}>
            {step !== STEPS.CATEGORIE && (
                <Button outline label="Précédent" onClick={onBack} />
            )}
            {step !== STEPS.PRIX && (
                <Button label="Suivant" onClick={onNext} />
            )}
            {step === STEPS.PRIX && (
                <>
                    <Button label="Enregistrer" type="submit" />
                </>
            )}
        </div>
    );

    return (
        <Modals
            disabled={isLoading}
            isOpen={isAddProductModalOpen}
            title="Ajoutez votre propriété"
            itemWidth="400px"
            itemHeight="630px"
            onSubmit={onNext}
            onClose={closeAddProductModal}
            actionLabel={actionLabel}
            secondaryAction={step === STEPS.CATEGORIE ? undefined : onBack}
            secondaryActionLabel={secondaryActionLabel}
            body={bodyContent}
            footer={footerContent}
        />
    );
}