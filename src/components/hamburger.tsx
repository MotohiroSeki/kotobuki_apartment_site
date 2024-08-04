'use client';
import React, { useState } from 'react';
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
                    <div className={styles.closer}>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                    </div>
                    <div className={styles.sidebar}>
                        <Link href="/" passHref>
                            <div className={styles.link}>ホーム</div>
                        </Link>
                        <Link href="/access" passHref>
                            <div className={styles.link}>アクセス</div>
                        </Link>
                        <Link href="/contact" passHref>
                            <div className={styles.link}>お問い合わせ・内見申込</div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;