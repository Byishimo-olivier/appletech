"use client";
import React from 'react';
import Sidebar from '@/components/modules/Sidebar';
import Header from '@/components/modules/Header';
// We reused the internal layout styles from a previous step if available, 
// or I can assume standard layout since I am creating this fresh.
// Let's use a new CSS module for this specific layout to be safe.
import styles from './AuthenticatedLayout.module.css';

export default function AuthenticatedLayout({ children }) {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.mainWrapper}>
                <Header />
                <main className={styles.content}>
                    {children}
                </main>
            </div>
        </div>
    );
}
