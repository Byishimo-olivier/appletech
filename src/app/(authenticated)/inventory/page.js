"use client";
import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { Plus, Search, Package, PenTool, AlertTriangle } from 'lucide-react';
import styles from './page.module.css';

export default function InventoryPage() {
    const [activeTab, setActiveTab] = useState('parts');

    const parts = [
        { id: 'P-001', name: 'iPhone 13 Screen', category: 'Screen', stock: 5, minStock: 2, price: '85,000 RWF' },
        { id: 'P-002', name: 'MacBook Air Battery', category: 'Battery', stock: 1, minStock: 2, price: '45,000 RWF' },
        { id: 'P-003', name: 'Lightning Port', category: 'Charging', stock: 12, minStock: 5, price: '15,000 RWF' },
    ];

    const tools = [
        { id: 'T-001', name: 'Precision Screwdriver Set', condition: 'Good', assignedTo: 'Tech A' },
        { id: 'T-002', name: 'Heat Gun', condition: 'Fair', assignedTo: 'Tech B' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Inventory</h1>
                    <p className={styles.subtitle}>Manage spare parts and tools</p>
                </div>
                <div className={styles.headerActions}>
                    <Button variant="outline">Request Tool</Button>
                    <Button>
                        <Plus size={18} />
                        Add Item
                    </Button>
                </div>
            </div>

            <div className={styles.tabs}>
                <button
                    className={`${styles.tab} ${activeTab === 'parts' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('parts')}
                >
                    <Package size={18} /> Spare Parts
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'tools' ? styles.activeTab : ''}`}
                    onClick={() => setActiveTab('tools')}
                >
                    <PenTool size={18} /> Tools & Equipment
                </button>
            </div>

            <Card className={styles.tableCard}>
                <div className={styles.toolbar}>
                    <div className={styles.searchWrapper}>
                        <Search size={18} className={styles.searchIcon} />
                        <Input
                            placeholder={`Search ${activeTab}...`}
                            className={styles.searchInput}
                        />
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            {activeTab === 'parts' ? (
                                <tr>
                                    <th>Part ID</th>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Stock Level</th>
                                    <th>Unit Price</th>
                                    <th>Actions</th>
                                </tr>
                            ) : (
                                <tr>
                                    <th>Tool ID</th>
                                    <th>Name</th>
                                    <th>Condition</th>
                                    <th>Assigned To</th>
                                    <th>Actions</th>
                                </tr>
                            )}
                        </thead>
                        {activeTab === 'parts' ? (
                            <tbody>
                                {parts.map((part) => (
                                    <tr key={part.id}>
                                        <td>{part.id}</td>
                                        <td>{part.name}</td>
                                        <td>{part.category}</td>
                                        <td>
                                            <div className={styles.stockCell}>
                                                {part.stock <= part.minStock && (
                                                    <AlertTriangle size={16} color="var(--system-orange)" />
                                                )}
                                                <span className={part.stock <= part.minStock ? styles.lowStock : ''}>
                                                    {part.stock} units
                                                </span>
                                            </div>
                                        </td>
                                        <td>{part.price}</td>
                                        <td>
                                            <Button variant="ghost" size="sm">Edit</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <tbody>
                                {tools.map((tool) => (
                                    <tr key={tool.id}>
                                        <td>{tool.id}</td>
                                        <td>{tool.name}</td>
                                        <td>{tool.condition}</td>
                                        <td>{tool.assignedTo}</td>
                                        <td>
                                            <Button variant="ghost" size="sm">Edit</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
            </Card>
        </div>
    );
}
