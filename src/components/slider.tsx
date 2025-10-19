import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from 'src/styles/components/slider.module.scss';

const PictureSlider = ({ images, delay }: { images: string[], delay: number }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalOfIndex = images.length
    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, delay); // Slide every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [delay, goToNext]);

    return (
        <div>
            <div className={styles.imageContainer}>
                <Image
                    src={images[currentIndex]}
                    alt="スライダー画像"
                    fill
                    sizes="(max-width: 768px) 90vw, 800px"
                    className={styles.image}
                    priority={currentIndex === 0}
                />
            </div>
            <div className={styles.slider}>
                <button onClick={goToPrevious} className={styles.arrow}>
                    ◀︎
                </button>
                <p>{currentIndex + 1}&nbsp;/&nbsp;{totalOfIndex}</p>
                <button onClick={goToNext} className={styles.arrow}>
                    ▶︎
                </button>
            </div>
        </div>
    );
};

export default PictureSlider;
