"use client";
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Textarea from '@/components/ui/Textarea';
import Input from '@/components/ui/Input';
import {
    ArrowLeft, Smartphone, User, Calendar,
    AlertCircle, CheckCircle, Clock, Save,
    FileText, Activity
} from 'lucide-react';
import AISuggestions from '@/components/modules/AISuggestions';
import styles from './page.module.css';

export default function RepairDetailPage() {
    const params = useParams();
    const [activeTab, setActiveTab] = useState('overview');
    const [status, setStatus] = useState('In Progress');
    const [diagnosis, setDiagnosis] = useState('Screen cracked. LCD appears damaged. Touch ID functioning.');
    const [notes, setNotes] = useState('');

    // Mock Data
    const repair = {
        id: params.id,
        device: 'iPhone 13 Pro',
        customer: 'Jean Dupont',
        dateIn: '2023-10-25',
        issue: 'Screen Replacement',
        serial: 'SN-123456789',
        history: [
            { date: '2023-10-25 10:00', top: 'System', msg: 'Ticket Created' },
            { date: '2023-10-25 10:15', top: 'Tech', msg: 'Device received. Initial inspection started.' },
        ]
    };

    const tabs = [
        { id: 'overview', label: 'Overview', icon: FileText },
        { id: 'diagnosis', label: 'Diagnosis', icon: Activity },
        { id: 'repair', label: 'Repair Log', icon: WrenchIcon }, // Defined below component
    ];

    return (
        <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.headerTop}>
                    <Link href="/repairs" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Repairs
                    </Link>
                    <div className={styles.actions}>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className={styles.statusSelect}
                        >
                            <option>Pending</option>
                            <option>Diagnosis</option>
                            <option>In Progress</option>
                            <option>Waiting for Parts</option>
                            <option>Completed</option>
                        </select>
                        <Button size="sm">
                            <Save size={16} /> Save Changes
                        </Button>
                    </div>
                </div>
                <div className={styles.titleRow}>
                    <h1 className={styles.title}>Repair #{repair.id}</h1>
                    <span className={styles.statusBadge}>{status}</span>
                </div>
            </div>

            <div className={styles.contentGrid}>
                {/* Left Column - Main Content */}
                <div className={styles.mainColumn}>
                    {/* Tabs */}
                    <div className={styles.tabs}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ''}`}
                            >
                                <tab.icon size={16} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <Card className={styles.tabContent}>
                        {activeTab === 'overview' && (
                            <div className={styles.overviewSection}>
                                <h3 className={styles.sectionTitle}>Issue Description</h3>
                                <p className={styles.description}>{repair.issue}</p>

                                <h3 className={styles.sectionTitle}>Timeline</h3>
                                <div className={styles.timeline}>
                                    {repair.history.map((event, index) => (
                                        <div key={index} className={styles.timelineItem}>
                                            <div className={styles.timelineDot}></div>
                                            <div className={styles.timelineContent}>
                                                <span className={styles.timelineDate}>{event.date}</span>
                                                <p className={styles.timelineMsg}>
                                                    <strong>{event.top}:</strong> {event.msg}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'diagnosis' && (
                            <div className={styles.formSection}>
                                <AISuggestions />
                                <h3 className={styles.sectionTitle}>Technician Diagnosis</h3>
                                <Textarea
                                    label="Diagnostic Findings"
                                    value={diagnosis}
                                    onChange={(e) => setDiagnosis(e.target.value)}
                                    rows={6}
                                />
                                <div className={styles.checklist}>
                                    <label className={styles.checkItem}>
                                        <input type="checkbox" defaultChecked /> Screen
                                    </label>
                                    <label className={styles.checkItem}>
                                        <input type="checkbox" defaultChecked /> Battery
                                    </label>
                                    <label className={styles.checkItem}>
                                        <input type="checkbox" /> Face ID
                                    </label>
                                    <label className={styles.checkItem}>
                                        <input type="checkbox" /> Charging Port
                                    </label>
                                </div>
                            </div>
                        )}

                        {activeTab === 'repair' && (
                            <div className={styles.formSection}>
                                <h3 className={styles.sectionTitle}>Repair Notes & Parts</h3>
                                <Textarea
                                    label="Work Performed"
                                    placeholder="Detailed notes on repair actions..."
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />
                                <Button variant="outline" size="sm" className={styles.addPartBtn}>
                                    + Add Part Used
                                </Button>
                            </div>
                        )}
                    </Card>
                </div>

                {/* Right Column - Info Sidebar */}
                <div className={styles.sideColumn}>
                    <Card className={styles.infoCard}>
                        <h3 className={styles.cardTitle}>Device Info</h3>
                        <div className={styles.infoRow}>
                            <Smartphone size={16} className={styles.infoIcon} />
                            <div>
                                <span className={styles.infoLabel}>Model</span>
                                <p className={styles.infoValue}>{repair.device}</p>
                            </div>
                        </div>
                        <div className={styles.infoRow}>
                            <AlertCircle size={16} className={styles.infoIcon} />
                            <div>
                                <span className={styles.infoLabel}>Serial</span>
                                <p className={styles.infoValue}>{repair.serial}</p>
                            </div>
                        </div>
                    </Card>

                    <Card className={styles.infoCard}>
                        <h3 className={styles.cardTitle}>Customer</h3>
                        <div className={styles.infoRow}>
                            <User size={16} className={styles.infoIcon} />
                            <div>
                                <span className={styles.infoLabel}>Name</span>
                                <p className={styles.infoValue}>{repair.customer}</p>
                            </div>
                        </div>
                        <div className={styles.infoRow}>
                            <Calendar size={16} className={styles.infoIcon} />
                            <div>
                                <span className={styles.infoLabel}>Date In</span>
                                <p className={styles.infoValue}>{repair.dateIn}</p>
                            </div>
                        </div>
                        <div className={styles.actionRow}>
                            <Button variant="ghost" size="sm" className={styles.contactBtn}>Contact Customer</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function WrenchIcon({ size }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
    );
}
