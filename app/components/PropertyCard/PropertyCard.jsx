// import { useState } from 'react';
// import Button from '../ui/button/button';
// import styles from './PropertyCard.module.css';
// import Image from 'next/image';
// import { FaHeart } from 'react-icons/fa';

// function formatPrice(price) {
//     return new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "XOF",
//     }).format(price);
// }

// export default function PropertyCard({
//     title,
//     type,
//     price,
//     location,
//     images,
//     rating,
//     features,
// }) {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [isLiked, setIsLiked] = useState(false);

//     return (
//         <div className={`${styles.propertyCard} group`}>
//             <div className={styles.propertyImageWrapper}>
//                 <Image
//                     src={images[currentImageIndex]}
//                     alt={title}
//                     className={styles.propertyImage}
//                     width={300}
//                     height={200}
//                 />
//                 <button onClick={() => setIsLiked(!isLiked)} className={styles.likeButton}>
//                     <FaHeart
//                         className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}
//                         size={20}
//                     />
//                 </button>
//             </div>

//             <div className={styles.propertyDetails}>
//                 <h3 className={styles.propertyTitle}>{title}</h3>
//                 <div className={styles.propertyRating}>
//                     <span>{rating.toFixed(1)}</span>
//                     <span>★</span>
//                 </div>

//                 <p className={styles.propertyLocation}>{location}</p>
//                 <p className={styles.propertyType}>{type}</p>
//                 <div className={styles.propertyFeatures}>
//                     {features.map((feature, index) => (
//                         <span key={index} className={styles.featureTag}>
//                             {feature}
//                         </span>
//                     ))}
//                 </div>
//                 <div className={styles.propertyFooter}>
//                     <span className={styles.propertyPrice}>{formatPrice(price)}</span>
//                     <Button label='Details' />
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client"; // Assurez-vous que ce composant est un composant client

import { useState } from 'react';
import Button from '../ui/button/button';
import styles from './PropertyCard.module.css';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';

function formatPrice(price) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "XOF",
    }).format(price);
}

export default function PropertyCard({
    title,
    type,
    price,
    location,
    images,
    rating,
    features,
}) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    // Vérifiez si images est un tableau valide
    const currentImage = Array.isArray(images) && images.length > 0 ? images[currentImageIndex] : '';

    return (
        <div className={`${styles.propertyCard} group`}>
            <div className={styles.propertyImageWrapper}>
                <Image
                    src={currentImage}
                    alt={title}
                    className={styles.propertyImage}
                    width={300}
                    height={200}
                />
                <button onClick={() => setIsLiked(!isLiked)} className={styles.likeButton}>
                    <FaHeart
                        className={isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                        size={20}
                    />
                </button>
            </div>

            <div className={styles.propertyDetails}>
                <h3 className={styles.propertyTitle}>{title}</h3>
                <div className={styles.propertyRating}>
                    <span>{rating.toFixed(1)}</span>
                    <span>★</span>
                </div>

                <p className={styles.propertyLocation}>{location}</p>
                <p className={styles.propertyType}>{type}</p>
                <div className={styles.propertyFeatures}>
                    {features.map((feature, index) => (
                        <span key={index} className={styles.featureTag}>
                            {feature}
                        </span>
                    ))}
                </div>
                <div className={styles.propertyFooter}>
                    <span className={styles.propertyPrice}>{formatPrice(price)}</span>
                    <Button label='Details' />
                </div>
            </div>
        </div>
    );
}