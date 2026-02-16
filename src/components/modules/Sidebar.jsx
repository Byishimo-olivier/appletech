"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LayoutDashboard, Users, Smartphone, PenTool, ClipboardList, Settings, LogOut } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const { t } = useLanguage();

    const navItems = [
        { name: t('common.dashboard'), href: '/dashboard', icon: LayoutDashboard },
        { name: t('common.intake'), href: '/intake', icon: ClipboardList },
        { name: t('common.requests'), href: '/requests', icon: Users },
        { name: t('common.repairs'), href: '/repairs', icon: Smartphone },
        { name: t('common.inventory'), href: '/inventory', icon: PenTool },
        { name: t('common.quotations'), href: '/quotations', icon: ClipboardList },
        { name: t('common.settings'), href: '/settings', icon: Settings },
    ];

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logoContainer}>
                <div className={styles.logoIcon}>
                    <Smartphone size={24} color="white" />
                </div>
                <span className={styles.logoText}>KAT (Kigali Apple Tech)</span>
            </div>

            <nav className={styles.nav}>
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
                        >
                            <item.icon size={20} className={styles.icon} />
                            <span className={styles.label}>{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className={styles.footer}>
                <button className={styles.logoutButton} onClick={() => router.push('/login')}>
                    <LogOut size={20} />
                    <span>Sign Out</span>
                </button>
            </div>
        </aside>
    );
}
