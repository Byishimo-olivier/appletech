"use client";
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Smartphone, LogOut, Plus, User } from 'lucide-react';
import styles from './ClientLayout.module.css';

export default function ClientLayout({ children }) {
  const router = useRouter();
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link href="/client" className={styles.logo}>
            <div className={styles.logoIcon}>
              <Smartphone size={24} color="white" />
            </div>
            <span className={styles.logoText}>KAT (Kigali Apple Tech) Client</span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/client" className={styles.navLink}>My Dashboard</Link>
            <Link href="/client/new-ticket" className={styles.navButton}>
              <Plus size={16} />
              New Ticket
            </Link>
            <button className={styles.profileButton}>
              <User size={20} />
            </button>
            <button className={styles.logoutButton} onClick={() => router.push('/login')}>
              <LogOut size={20} />
            </button>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>© 2026 KAT (Kigali Apple Tech) Repair Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
