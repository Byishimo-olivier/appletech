"use client";
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import styles from './CustomerForm.module.css';

export default function CustomerForm({ onClose, onSubmit }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            onSubmit && onSubmit();
            onClose && onClose();
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.grid}>
                <Input label="Full Name" placeholder="e.g. John Doe" required />
                <Input label="Email" type="email" placeholder="john@example.com" />
                <Input label="Phone Number" type="tel" placeholder="+250..." required />
                <Input label="Address" placeholder="Kigali, Rwanda" />
            </div>

            <div className={styles.actions}>
                <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
                <Button type="submit" isLoading={isLoading}>Save Customer</Button>
            </div>
        </form>
    );
}
