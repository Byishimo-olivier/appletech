"use client";
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import { Smartphone, Camera, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

export default function RemoteRequestPage() {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    if (submitted) {
        return (
            <div className={styles.container}>
                <Card className={styles.successCard}>
                    <div className={styles.iconWrapper}>
                        <CheckCircle size={48} color="var(--system-green)" />
                    </div>
                    <h1 className={styles.title}>Request Received!</h1>
                    <p className={styles.description}>
                        We have received your repair request. Our technicians will review the details and notify you shortly via WhatsApp or SMS if you should bring the device in.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">Submit Another Request</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.logoIcon}>
                    <Smartphone size={24} color="white" />
                </div>
                <span className={styles.logoText}>Kigali Apple Tech Remote Support</span>
            </header>

            <main className={styles.main}>
                <h1 className={styles.title}>Describe Your Issue</h1>
                <p className={styles.description}>
                    Tell us what's wrong with your device, and we'll let you know if we can fix it.
                </p>

                <Card className={styles.formCard}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Contact Information</h3>
                            <Input label="Full Name" placeholder="John Doe" required />
                            <Input label="Phone Number" placeholder="+250 7..." type="tel" required />
                            <Input label="Email (Optional)" placeholder="john@example.com" type="email" />
                        </div>

                        <div className={styles.section}>
                            <h3 className={styles.sectionTitle}>Device Details</h3>
                            <Select
                                label="Device Type"
                                options={[
                                    { label: 'iPhone', value: 'iphone' },
                                    { label: 'iPad', value: 'ipad' },
                                    { label: 'MacBook', value: 'macbook' },
                                    { label: 'Watch', value: 'watch' },
                                    { label: 'Other', value: 'other' }
                                ]}
                                required
                            />
                            <Input label="Model (if known)" placeholder="e.g. iPhone 13 Pro" />
                            <Textarea
                                label="Issue Description"
                                placeholder="Please describe the problem in detail..."
                                required
                            />

                            <div className={styles.uploadSection}>
                                <span className={styles.uploadLabel}>Upload Photo of Issue (Optional)</span>
                                <div className={styles.uploadBox}>
                                    <Camera size={24} className={styles.uploadIcon} />
                                    <span>Tap to take photos</span>
                                    <input type="file" accept="image/*" className={styles.fileInput} />
                                </div>
                            </div>
                        </div>

                        <Button type="submit" size="lg" isLoading={isLoading} className={styles.submitButton}>
                            Submit Request
                        </Button>
                    </form>
                </Card>
            </main>
        </div>
    );
}
