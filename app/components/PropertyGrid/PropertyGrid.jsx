// import PropertyCard from '../PropertyCard/PropertyCard';

// const properties = [
//     // Maison 1
//     {
//         title: 'Villa de Luxe à Paris',
//         type: 'Maison',
//         price: 350000,
//         location: 'Paris, France',
//         images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80'],
//         rating: 4.9,
//         features: ['5 Chambres', '4 Salles de bain', '2 Garages'],
//     },
//     // Maison 2
//     {
//         title: 'Maison Moderne pour Famille',
//         type: 'Maison',
//         price: 220000,
//         location: 'Lagos, Nigéria',
//         images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80'],
//         rating: 4.7,
//         features: ['4 Chambres', '3 Salles de bain', '1 Garage'],
//     },
//     // Voiture 1
//     {
//         title: 'Voiture de Sport Ferrari 488',
//         type: 'Voiture',
//         price: 200000,
//         location: 'Abidjan, Côte d\'Ivoire',
//         images: ['https://images.unsplash.com/photo-1600607687126-c2813205203e?auto=format&fit=crop&q=80'],
//         rating: 4.8,
//         features: ['Moteur V8', '2 Sièges', 'Cabriolet'],
//     },
//     // Voiture 2
//     {
//         title: 'SUV de Luxe Range Rover',
//         type: 'Voiture',
//         price: 95000,
//         location: 'Accra, Ghana',
//         images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80'],
//         rating: 4.6,
//         features: ['4x4', '7 Sièges', 'Intérieur en Cuir'],
//     },
//     // Parcelle 1
//     {
//         title: 'Terrain Privilégié à Dakar',
//         type: 'Parcelle',
//         price: 150000,
//         location: 'Dakar, Sénégal',
//         images: ['https://images.unsplash.com/photo-1600607687126-c2813205203e?auto=format&fit=crop&q=80'],
//         rating: 4.5,
//         features: ['1000 m²', 'Zone Urbaine', 'Accès Routier'],
//     },
//     // Parcelle 2
//     {
//         title: 'Terrain d\'Investissement à Accra',
//         type: 'Parcelle',
//         price: 120000,
//         location: 'Accra, Ghana',
//         images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80'],
//         rating: 4.7,
//         features: ['2000 m²', 'Zone en Développement', 'Approvisionnement en Eau'],
//     },
// ];



// export default function PropertyGrid() {
//     return (
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '16px' }}>
//             {properties.map((property, index) => (
//                 <PropertyCard key={index} {...property} />
//             ))}
//         </div>
//     );
// }

"use client"; // Assurez-vous que ce composant est un composant client

import PropertyCard from '../PropertyCard/PropertyCard';

// Liste des propriétés
const properties = [
    // Maison 1
    {
        title: 'Villa de Luxe à Paris',
        type: 'Maison',
        price: 350000,
        location: 'Paris, France',
        images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80'], // Lien valide
        rating: 4.9,
        features: ['5 Chambres', '4 Salles de bain', '2 Garages'],
    },
    // Maison 2
    {
        title: 'Maison Moderne pour Famille',
        type: 'Maison',
        price: 220000,
        location: 'Lagos, Nigéria',
        images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80'], // Lien valide
        rating: 4.7,
        features: ['4 Chambres', '3 Salles de bain', '1 Garage'],
    },
    // Voiture 1
    {
        title: 'Voiture de Sport Ferrari 488',
        type: 'Voiture',
        price: 200000,
        location: "Abidjan, Côte d'Ivoire",
        images: ['https://unsplash.com/fr/photos/ferrari-458-italia-rouge-sur-chaussee-grise-uPrFF1Qat2s'], // Lien valide
        rating: 4.8,
        features: ['Moteur V8', '2 Sièges', 'Cabriolet'],
    },
    // Voiture 2
    {
        title: 'SUV de Luxe Range Rover',
        type: 'Voiture',
        price: 95000,
        location: 'Accra, Ghana',
        images: ['https://unsplash.com/fr/photos/vehicule-rouge-stationne-pres-de-limmeuble-pendant-la-journee-Q6in2x_pQtU'], // Lien valide
        rating: 4.6,
        features: ['4x4', '7 Sièges', 'Intérieur en Cuir'],
    },
    // Parcelle 1
    {
        title: 'Terrain Privilégié à Dakar',
        type: 'Parcelle',
        price: 150000,
        location: 'Dakar, Sénégal',
        images: ['https://unsplash.com/fr/photos/un-paysage-avec-des-arbres-et-de-lherbe-Kcs5MzjsBE8'], // Lien valide
        rating: 4.5,
        features: ['1000 m²', 'Zone Urbaine', 'Accès Routier'],
    },
    // Parcelle 2
    {
        title: "Terrain d'Investissement à Accra",
        type: 'Parcelle',
        price: 120000,
        location: 'Accra, Ghana',
        images: ['https://unsplash.com/fr/photos/une-vue-aerienne-dune-campagne-verdoyante-T0OlSw9LZXU'], // Lien valide
        rating: 4.7,
        features: ['2000 m²', 'Zone en Développement', 'Approvisionnement en Eau'],
    },
];

// Composant PropertyGrid
export default function PropertyGrid() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', padding: '16px' }}>
            {properties.map((property) => (
                <PropertyCard key={property.title} {...property} />
            ))}
        </div>
    );
}