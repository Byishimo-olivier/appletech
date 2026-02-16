"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import { Smartphone, Lock, User } from 'lucide-react';
import styles from './page.module.css';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Simulate login delay
        setTimeout(() => {
            // Mock validation
            setIsLoading(false);
            router.push('/dashboard'); // Redirect to dashboard
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <Card className={styles.loginCard}>
                <div className={styles.header}>
                    <div className={styles.logoIcon}>
                        <Smartphone size={32} color="white" />
                    </div>
                    <h1 className={styles.title}>Kigali Apple Tech</h1>
                    <p className={styles.subtitle}>Sign in to your account</p>
                </div>

                <form onSubmit={handleLogin} className={styles.form}>
                    <Input
                        label="Username"
                        placeholder="admin"
                        icon={User}
                        required
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        icon={Lock}
                        required
                    />

                    {error && <div className={styles.error}>{error}</div>}

                    <Button type="submit" isLoading={isLoading} className={styles.submitBtn}>
                        Sign In
                    </Button>
                </form>

                <div className={styles.footer}>
                    <a href="#" className={styles.link}>Forgot password?</a>
                    <div className={styles.divider}></div>
                    <p className={styles.version}>v1.0.0</p>
                </div>
            </Card>
        </div>
    );
}
