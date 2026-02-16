"use client";
import React from 'react';
import { Search, Bell, User, Globe } from 'lucide-react';
import styles from './Header.module.css';
import { useLanguage } from '@/lib/i18n';

export default function Header() {
    const { language, setLanguage } = useLanguage();

    return (
        <header className={styles.header}>
            <div className={styles.searchContainer}>
                <Search size={18} className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search..."
                    className={styles.searchInput}
                />
            </div>

            <div className={styles.actions}>
                <div className={styles.langSwitcher}>
                    <Globe size={18} className={styles.langIcon} />
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className={styles.langSelect}
                    >
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="rw">Kinyarwanda</option>
                        <option value="sw">Kiswahili</option>
                        <option value="ar">العربية</option>
                        <option value="hi">हिन्दी</option>
                    </select>
                </div>

                <button className={styles.iconButton}>
                    <Bell size={20} />
                    <span className={styles.badge}>2</span>
                </button>

                <div className={styles.userProfile}>
                    <div className={styles.avatar}>
                        <User size={20} color="white" />
                    </div>
                    <div className={styles.userInfo}>
                        <span className={styles.userName}>Admin User</span>
                        <span className={styles.userRole}>Store Manager</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
