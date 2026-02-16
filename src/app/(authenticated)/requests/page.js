"use client";
import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Smartphone, Check, X, Clock, MessageCircle } from 'lucide-react';
import styles from './page.module.css';

export default function RequestsPage() {
    const [requests, setRequests] = useState([
        { id: 1, name: 'Alice M.', device: 'iPhone 13', issue: 'Screen cracked', time: '10 mins ago', status: 'pending' },
        { id: 2, name: 'Bob K.', device: 'MacBook Pro M1', issue: 'Battery draining fast', time: '1 hour ago', status: 'pending' },
        { id: 3, name: 'Charlie D.', device: 'iPad Air', issue: 'Broken charging port', time: '2 hours ago', status: 'pending' },
    ]);

    const handleAction = (id, action) => {
        // In a real app, API call here
        setRequests(requests.filter(req => req.id !== id));
        alert(`Request ${action}ed! Notification sent to customer.`);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Pending Repair Requests</h1>
                <p className={styles.subtitle}>Review and approve requests from online intake</p>
            </header>

            <div className={styles.grid}>
                {requests.length === 0 ? (
                    <div className={styles.emptyState}>No pending requests.</div>
                ) : (
                    requests.map((req) => (
                        <Card key={req.id} className={styles.requestCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.deviceIcon}>
                                    <Smartphone size={20} color="white" />
                                </div>
                                <div className={styles.meta}>
                                    <span className={styles.time}><Clock size={12} /> {req.time}</span>
                                    <span className={styles.statusBadge}>{req.status}</span>
                                </div>
                            </div>

                            <div className={styles.cardBody}>
                                <h3 className={styles.deviceName}>{req.device}</h3>
                                <p className={styles.customerName}>{req.name}</p>
                                <div className={styles.issueBox}>
                                    <p className={styles.issue}>{req.issue}</p>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <Button
                                    className={styles.rejectBtn}
                                    variant="ghost"
                                    onClick={() => handleAction(req.id, 'reject')}
                                >
                                    <X size={16} /> Reject
                                </Button>
                                <Button
                                    className={styles.approveBtn}
                                    onClick={() => handleAction(req.id, 'approve')}
                                >
                                    <Check size={16} /> Approve
                                </Button>
                            </div>
                            <Button variant="outline" className={styles.chatBtn}>
                                <MessageCircle size={16} /> Chat
                            </Button>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
