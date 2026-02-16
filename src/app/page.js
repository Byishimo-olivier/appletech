"use client";
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Smartphone, ShieldCheck, Clock, ArrowRight, Wrench } from 'lucide-react';
import styles from './page.module.css';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Smartphone size={24} color="white" />
          </div>
          <span className={styles.logoText}>AppleTech</span>
        </div>
        <div className={styles.navLinks}>
          <Link href="/client" className={styles.link}>Already a Customer?</Link>
          <Link href="/login">
            <Button variant="outline" size="sm">Staff Login</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Expert Repairs. <br />
            <span className={styles.heroHighlight}>Authorized Quality.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            We bring your devices back to life with genuine parts and certified expertise. 
            Fast, reliable, and transparent.
          </p>
          <div className={styles.heroActions}>
            <Link href="/request">
              <Button size="lg" className={styles.ctaButton}>
                Book a Repair <ArrowRight size={18} />
              </Button>
            </Link>
            <Link href="/client">
              <Button variant="ghost" size="lg">Check Status</Button>
            </Link>
          </div>
        </div>
        
        {/* Abstract graphical element or image placeholder */}
        <div className={styles.heroVisual}>
          <div className={styles.deviceMockup}>
             <div className={styles.screenContent}>
                <Wrench size={64} className={styles.floatingIcon} />
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>
            <ShieldCheck size={32} />
          </div>
          <h3>Genuine Parts</h3>
          <p>We use only authentic components to ensure your device works exactly as intended.</p>
        </div>
        <div className={styles.featureCard}>
           <div className={styles.featureIcon}>
            <Clock size={32} />
          </div>
          <h3>Fast Turnaround</h3>
          <p>Most repairs are completed within 24 hours. Screen replacements in under 1 hour.</p>
        </div>
        <div className={styles.featureCard}>
           <div className={styles.featureIcon}>
            <Smartphone size={32} />
          </div>
          <h3>All Devices</h3>
          <p>From iPhones and iPads to MacBooks and Apple Watches, we fix them all.</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 AppleTech Solutions. Kigali, Rwanda.</p>
      </footer>
    </div>
  );
}
