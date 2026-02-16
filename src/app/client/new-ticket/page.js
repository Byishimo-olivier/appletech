"use client";
import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import { Smartphone, CreditCard, CheckCircle, ArrowLeft } from 'lucide-react';
import styles from './page.module.css';
import Link from 'next/link';

export default function NewTicketPage() {
    const [step, setStep] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API and Payment delay
        setTimeout(() => {
            setIsLoading(false);
            setStep(3); // Success step
        }, 2000);
    };

    if (step === 3) {
        return (
            <div className={styles.container}>
                <Card className={styles.successCard}>
                    <div className={styles.iconWrapper}>
                        <CheckCircle size={64} color="var(--system-green)" />
                    </div>
                    <h1 className={styles.successTitle}>Ticket Purchased!</h1>
                    <p className={styles.successText}>
                        Your repair ticket #T-2048 has been created.
                        Estimated queue time: 24 hours.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/client">
                            <Button>Go to Dashboard</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <Link href="/client" className={styles.backLink}>
                <ArrowLeft size={16} /> Back
            </Link>

            <h1 className={styles.title}>New Repair Ticket</h1>

            <div className={styles.steps}>
                <div className={`${styles.step} ${step >= 1 ? styles.activeStep : ''}`}>1. Device Details</div>
                <div className={styles.line}></div>
                <div className={`${styles.step} ${step >= 2 ? styles.activeStep : ''}`}>2. Payment</div>
            </div>

            <Card className={styles.formCard}>
                <form onSubmit={handleSubmit}>
                    {step === 1 && (
                        <div className={styles.stepContent}>
                            <h2 className={styles.stepTitle}>What needs fixing?</h2>

                            <Select
                                label="Device Type"
                                options={[
                                    { label: 'iPhone', value: 'iphone' },
                                    { label: 'MacBook', value: 'macbook' },
                                    { label: 'iPad', value: 'ipad' },
                                    { label: 'Other', value: 'other' }
                                ]}
                            />
                            <Input label="Device Model" placeholder="e.g. iPhone 14 Pro Max" required />
                            <Input label="Serial Number (Optional)" placeholder="XXXXXXXXXX" />
                            <Textarea
                                label="Problem Description"
                                placeholder="Describe the issue... (e.g. Screen cracked, Battery not holding charge)"
                                required
                            />

                            <Button type="button" onClick={() => setStep(2)} className={styles.nextButton}>
                                Next: Payment
                            </Button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className={styles.stepContent}>
                            <h2 className={styles.stepTitle}>Purchase Ticket - 5,000 RWF</h2>
                            <p className={styles.description}>
                                This fee covers the initial diagnosis and secures your spot in the queue.
                            </p>

                            <div className={styles.paymentMethods}>
                                <div className={styles.method}>
                                    <CreditCard size={24} />
                                    <span>Card / Mobile Money</span>
                                </div>
                            </div>

                            <Input label="Phone Number for Payment" placeholder="+250 7..." required />

                            <div className={styles.actions}>
                                <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
                                <Button type="submit" isLoading={isLoading}>Pay & Create Ticket</Button>
                            </div>
                        </div>
                    )}
                </form>
            </Card>
        </div>
    );
}
