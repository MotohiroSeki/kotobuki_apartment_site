import React, { useState, useEffect } from 'react';
import styles from 'src/styles/components/slider.module.scss';

const PictureSlider = ({ images }: { images: string[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalOfIndex = images.length
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000); // Slide every 5 seconds

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, [currentIndex]); // Dependency array to reset the interval when currentIndex changes

    return (
        <div>
            <div className={styles.imageContainer}>
                <img src={images[currentIndex]} alt="slider image" className={styles.image} />
            </div>
            <div className={styles.slider}>

                <button onClick={goToPrevious} className={styles.arrow}>
                    ◀︎
                </button>
                <p>{currentIndex+1}&nbsp;/&nbsp;{totalOfIndex}</p>
                <button onClick={goToNext} className={styles.arrow}>
                    ▶︎
                </button>
            </div>
        </div>
    );
};

export default PictureSlider;