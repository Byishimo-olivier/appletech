"use client";
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { Plus, Search, FileText, Download, Send, MoreHorizontal } from 'lucide-react';
import styles from './page.module.css';

export default function QuotationsPage() {
    const quotations = [
        { id: 'Q-2023-001', customer: 'Jean Dupont', device: 'iPhone 13', amount: '120,000 RWF', status: 'Draft', date: '2023-10-26' },
        { id: 'Q-2023-002', customer: 'Marie Claire', device: 'MacBook Air', amount: '45,000 RWF', status: 'Sent', date: '2023-10-25' },
        { id: 'Q-2023-003', customer: 'John Smith', device: 'iPad Pro', amount: '85,000 RWF', status: 'Accepted', date: '2023-10-24' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Quotations</h1>
                    <p className={styles.subtitle}>Manage repair estimates and invoices</p>
                </div>
                <Link href="/quotations/new">
                    <Button>
                        <Plus size={18} />
                        Create Quote
                    </Button>
                </Link>
            </div>

            <Card className={styles.tableCard}>
                <div className={styles.toolbar}>
                    <div className={styles.searchWrapper}>
                        <Search size={18} className={styles.searchIcon} />
                        <Input
                            placeholder="Search quotes..."
                            className={styles.searchInput}
                        />
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Quote ID</th>
                                <th>Customer</th>
                                <th>Device</th>
                                <th>Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quotations.map((quote) => (
                                <tr key={quote.id}>
                                    <td>
                                        <div className={styles.idCell}>
                                            <FileText size={16} />
                                            {quote.id}
                                        </div>
                                    </td>
                                    <td>{quote.customer}</td>
                                    <td>{quote.device}</td>
                                    <td>{quote.date}</td>
                                    <td className={styles.amount}>{quote.amount}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${styles[quote.status.toLowerCase()]}`}>
                                            {quote.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.actionButton} title="Download PDF">
                                                <Download size={16} />
                                            </button>
                                            <button className={styles.actionButton} title="Send Email">
                                                <Send size={16} />
                                            </button>
                                            <button className={styles.actionButton}>
                                                <MoreHorizontal size={16} />
                                            </button>
                                        </div>
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
