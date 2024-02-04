import React, { useEffect, useRef, useState } from 'react';
import styles from 'src/styles/components/hamburger.module.scss';
import Link from 'next/link';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className={isOpen ? `${styles.menu} ${styles.open}` : styles.menu} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>

            {isOpen && (
                <div className={`${styles.modal} ${styles.open}`} onClick={closeMenu}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    <div className={styles.sidebar}>
                        <Link href="/" passHref>
                            <div className={styles.link}>Home</div>
                        </Link>
                        <Link href="/about" passHref>
                            <div className={styles.link}>About</div>
                        </Link>
                        <Link href="/contact" passHref>
                            <div className={styles.link}>Contact</div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;