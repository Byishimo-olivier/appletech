"use client";
import React from 'react';
import { useLanguage } from '@/lib/i18n';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { Plus, Search, Smartphone, Wrench, CheckCircle, Clock } from 'lucide-react';
import styles from './page.module.css';

export default function RepairsPage() {
    const { t } = useLanguage();

    const repairs = [
        { id: 101, device: 'iPhone 13', customer: 'Jean Dupont', issue: 'Screen Replacement', status: 'In Progress', icon: Wrench, color: 'var(--system-blue)' },
        { id: 102, device: 'MacBook Air M1', customer: 'Marie Claire', issue: 'Battery Replacement', status: 'Pending', icon: Clock, color: 'var(--system-orange)' },
        { id: 103, device: 'iPad Pro', customer: 'John Smith', issue: 'Charging Port', status: 'Completed', icon: CheckCircle, color: 'var(--system-green)' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>{t('common.repairs')}</h1>
                    <p className={styles.subtitle}>Track diagnosis and repair jobs</p>
                </div>
                <Button>
                    <Plus size={18} />
                    New Repair
                </Button>
            </div>

            <Card className={styles.tableCard}>
                <div className={styles.toolbar}>
                    <div className={styles.searchWrapper}>
                        <Search size={18} className={styles.searchIcon} />
                        <Input
                            placeholder={t('common.search')}
                            className={styles.searchInput}
                        />
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Device</th>
                                <th>Customer</th>
                                <th>Issue</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {repairs.map((repair) => (
                                <tr key={repair.id}>
                                    <td>#{repair.id}</td>
                                    <td>
                                        <div className={styles.deviceCell}>
                                            <Smartphone size={16} />
                                            {repair.device}
                                        </div>
                                    </td>
                                    <td>{repair.customer}</td>
                                    <td>{repair.issue}</td>
                                    <td>
                                        <span
                                            className={styles.statusBadge}
                                            style={{ backgroundColor: repair.color }}
                                        >
                                            <repair.icon size={12} className={styles.statusIcon} />
                                            {repair.status}
                                        </span>
                                    </td>
                                    <td>
                                        <Link href={`/repairs/${repair.id}`}>
                                            <Button variant="ghost" size="sm">View</Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
