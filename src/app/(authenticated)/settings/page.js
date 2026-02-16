"use client";
import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { useLanguage } from '@/lib/i18n';
import { Save, Bell, Globe, Shield, Database } from 'lucide-react';
import styles from './page.module.css';

export default function SettingsPage() {
    const { t, language, setLanguage } = useLanguage();
    const [isLoading, setIsLoading] = useState(false);
    const [timezone, setTimezone] = useState('CAT');
    const [currency, setCurrency] = useState('RWF');

    const handleSave = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1500);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>System Settings</h1>
                <p className={styles.subtitle}>Manage application configuration and preferences</p>
            </div>

            <div className={styles.grid}>
                {/* General Settings */}
                <Card className={styles.card}>
                    <div className={styles.cardHeader}>
                        <Globe size={20} className={styles.icon} />
                        <h3>General & Localization</h3>
                    </div>
                    <div className={styles.formGroup}>
                        <Select
                            label="System Language"
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            options={[
                                { label: 'English', value: 'en' },
                                { label: 'Français', value: 'fr' },
                                { label: 'Ikinyarwanda', value: 'rw' },
                                { label: 'Kiswahili', value: 'sw' },
                                { label: 'Arabic', value: 'ar' },
                                { label: 'Hindi', value: 'hi' },
                            ]}
                        />
                        <Select
                            label="Timezone"
                            options={[{ label: '(GMT+02:00) Central Africa Time', value: 'CAT' }]}
                            value={timezone}
                            onChange={(e) => setTimezone(e.target.value)}
                        />
                        <Select
                            label="Currency"
                            options={[{ label: 'Rwandan Franc (RWF)', value: 'RWF' }]}
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                        />
                    </div>
                </Card>

                {/* Notifications */}
                <Card className={styles.card}>
                    <div className={styles.cardHeader}>
                        <Bell size={20} className={styles.icon} />
                        <h3>Notifications</h3>
                    </div>
                    <div className={styles.toggles}>
                        <label className={styles.toggle}>
                            <input type="checkbox" defaultChecked />
                            <span>Email Alerts for New Requests</span>
                        </label>
                        <label className={styles.toggle}>
                            <input type="checkbox" defaultChecked />
                            <span>SMS Notifications to Customers</span>
                        </label>
                        <label className={styles.toggle}>
                            <input type="checkbox" />
                            <span>Weekly Performance Report</span>
                        </label>
                    </div>
                </Card>

                {/* Security */}
                <Card className={styles.card}>
                    <div className={styles.cardHeader}>
                        <Shield size={20} className={styles.icon} />
                        <h3>Security & Access</h3>
                    </div>
                    <div className={styles.formGroup}>
                        <Button variant="outline" size="sm">Manage Users & Roles</Button>
                        <Button variant="outline" size="sm">View Audit Logs</Button>
                        <Button variant="outline" size="sm" className={styles.dangerBtn}>Reset System Data</Button>
                    </div>
                </Card>

                {/* Database Backup */}
                <Card className={styles.card}>
                    <div className={styles.cardHeader}>
                        <Database size={20} className={styles.icon} />
                        <h3>Data Management</h3>
                    </div>
                    <p className={styles.infoText}>Last backup: Today, 09:00 AM</p>
                    <div className={styles.formGroup}>
                        <Button variant="outline" size="sm">Download Backup</Button>
                    </div>
                </Card>
            </div>

            <div className={styles.footer}>
                <Button size="lg" onClick={handleSave} isLoading={isLoading}>
                    <Save size={18} /> Save Changes
                </Button>
            </div>
        </div>
    );
}
