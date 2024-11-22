// "use client";

// import { ChevronLeft, ChevronRight } from 'react-icons/ai';
// import { useState, useEffect, useCallback } from 'react';
// import Button from '../ui/button/button';
// import './Caroussel.module.css';
// import Image from 'next/image';

// const CAROUSEL_ITEMS = [
//     {
//         image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
//         title: 'Luxury Homes',
//         description: 'Discover extraordinary properties in prime locations',
//         width: 800,  // Ajoutez la largeur ici
//         height: 600, // Ajoutez la hauteur ici
//     },
//     {
//         image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
//         title: 'Premium Cars',
//         description: 'Find your dream vehicle from our exclusive collection',
//         width: 800,  // Ajoutez la largeur ici
//         height: 600, // Ajoutez la hauteur ici
//     },
//     {
//         image: 'https://images.unsplash.com/photo-1600607687126-c2813205203e?auto=format&fit=crop&q=80',
//         title: 'Investment Land',
//         description: 'Secure your future with prime real estate investments',
//         width: 800,  // Ajoutez la largeur ici
//         height: 600, // Ajoutez la hauteur ici
//     },
// ];

// export default function HeroCarousel() {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [isTransitioning, setIsTransitioning] = useState(false);

//     const nextSlide = useCallback(() => {
//         if (!isTransitioning) {
//             setIsTransitioning(true);
//             setCurrentSlide((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
//         }
//     }, [isTransitioning]);

//     const prevSlide = useCallback(() => {
//         if (!isTransitioning) {
//             setIsTransitioning(true);
//             setCurrentSlide((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
//         }
//     }, [isTransitioning]);

//     useEffect(() => {
//         const timer = setInterval(nextSlide, 5000);
//         return () => clearInterval(timer);
//     }, [nextSlide]);

//     return (
//         <div className="carousel">
//             {/* Carousel Items */}
//             <div className="carousel-items">
//                 {CAROUSEL_ITEMS.map((item, index) => (
//                     <div
//                         key={index}
//                         className={`carousel-slide ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`}
//                         onTransitionEnd={() => setIsTransitioning(false)}
//                     >
//                         <div>
//                             <Image
//                                 src={item.image}
//                                 alt={item.title}
//                                 width={item.width}   // Utilisez les propriétés de largeur
//                                 height={item.height} // Utilisez les propriétés de hauteur
//                             />
//                             <div className="carousel-overlay" />
//                             <div className="carousel-content">
//                                 <div>
//                                     <h2>{item.title}</h2>
//                                     <p>{item.description}</p>
//                                     <Button label='Explore Now' />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Navigation Buttons */}
//             <button
//                 onClick={prevSlide}
//                 className="carousel-button left"
//                 disabled={isTransitioning}
//             >
//                 <ChevronLeft size={24} />
//             </button>
//             <button
//                 onClick={nextSlide}
//                 className="carousel-button right"
//                 disabled={isTransitioning}
//             >
//                 <ChevronRight size={24} />
//             </button>

//             {/* Indicators */}
//             <div className="carousel-indicators">
//                 {CAROUSEL_ITEMS.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentSlide(index)}
//                         className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

"use client"; // Assurez-vous que ce composant est un composant client

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import des icônes de Font Awesome
import { useState, useEffect, useCallback } from 'react';
import Button from '../ui/button/button';
import './Caroussel.module.css';
import Image from 'next/image';

const CAROUSEL_ITEMS = [
    {
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
        title: 'Luxury Homes',
        description: 'Discover extraordinary properties in prime locations',
        width: 800,
        height: 600,
    },
    {
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80',
        title: 'Premium Cars',
        description: 'Find your dream vehicle from our exclusive collection',
        width: 800,
        height: 600,
    },
    {
        image: 'https://images.unsplash.com/photo-1600607687126-c2813205203e?auto=format&fit=crop&q=80',
        title: 'Investment Land',
        description: 'Secure your future with prime real estate investments',
        width: 800,
        height: 600,
    },
];

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
        }
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);
        }
    }, [isTransitioning]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="carousel">
            {/* Carousel Items */}
            <div className="carousel-items">
                {CAROUSEL_ITEMS.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`}
                        onTransitionEnd={() => setIsTransitioning(false)}
                    >
                        <div>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={item.width}
                                height={item.height}
                            />
                            <div className="carousel-overlay" />
                            <div className="carousel-content">
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <Button label='Explore Now' />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="carousel-button left"
                disabled={isTransitioning}
            >
                <FaChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="carousel-button right"
                disabled={isTransitioning}
            >
                <FaChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="carousel-indicators">
                {CAROUSEL_ITEMS.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}
