"use client";
import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import { Smartphone, User, Save, Printer } from 'lucide-react';
import styles from './page.module.css';

export default function IntakePage() {
    const [isSaved, setIsSaved] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSaved(true);
    };

    if (isSaved) {
        return (
            <div className={styles.container}>
                <Card className={styles.successCard}>
                    <h1>Intake Complete</h1>
                    <p>Ticket #T-2049 generated successfully.</p>
                    <div className={styles.actions}>
                        <Button variant="outline"><Printer size={16} /> Print Ticket</Button>
                        <Button onClick={() => setIsSaved(false)}>New Intake</Button>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Device Intake</h1>
                <p className={styles.subtitle}>Check-in new device for repair</p>
            </header>

            <form onSubmit={handleSubmit} className={styles.formGrid}>
                <Card className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <User size={20} className={styles.icon} />
                        <h3>Customer</h3>
                    </div>
                    <Input label="Search Customer" placeholder="Name or Phone..." />
                    <div className={styles.divider}>OR</div>
                    <Input label="New Customer Name" placeholder="Full Name" />
                    <Input label="Phone Number" placeholder="+250..." />
                </Card>

                <Card className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <Smartphone size={20} className={styles.icon} />
                        <h3>Device Details</h3>
                    </div>
                    <Select
                        label="Device Type"
                        options={[{ label: 'iPhone', value: 'iphone' }, { label: 'Mac', value: 'mac' }]}
                    />
                    <Input label="Model" placeholder="e.g. iPhone 13" required />
                    <Input label="Serial / IMEI" placeholder="Scan or type..." />
                    <Input label="Passcode" placeholder="Optional" />
                </Card>

                <Card className={`${styles.section} ${styles.fullWidth}`}>
                    <h3>Issue Description</h3>
                    <Textarea
                        label="Reported Issue"
                        placeholder="Customer's description of the problem..."
                        rows={4}
                        required
                    />
                    <div className={styles.checklist}>
                        <label><input type="checkbox" /> Data Backed Up?</label>
                        <label><input type="checkbox" /> SIM Card Removed?</label>
                        <label><input type="checkbox" /> Case Removed?</label>
                    </div>
                </Card>

                <div className={styles.footer}>
                    <Button type="submit" size="lg" className={styles.submitBtn}>
                        <Save size={18} /> Create Ticket
                    </Button>
                </div>
            </form>
        </div>
    );
}
