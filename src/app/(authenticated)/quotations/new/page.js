"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { ArrowLeft, Plus, Trash2, Save, Send } from 'lucide-react';
import styles from './page.module.css';

export default function NewQuotationPage() {
    const [items, setItems] = useState([
        { id: 1, description: '', quantity: 1, unitPrice: 0 }
    ]);

    const addItem = () => {
        setItems([...items, { id: Date.now(), description: '', quantity: 1, unitPrice: 0 }]);
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const updateItem = (id, field, value) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, [field]: value } : item
        ));
    };

    const calculateTotal = () => {
        return items.reduce((sum, item) => sum + (item.quantity * item.unitPrice), 0);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href="/quotations" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back
                    </Link>
                    <h1 className={styles.title}>New Quotation</h1>
                </div>
                <div className={styles.actions}>
                    <Button variant="outline">
                        <Save size={16} /> Save Draft
                    </Button>
                    <Button>
                        <Send size={16} /> Send Quote
                    </Button>
                </div>
            </div>

            <div className={styles.grid}>
                {/* Customer & Device Info */}
                <Card className={styles.infoCard}>
                    <div className={styles.sectionHeader}>
                        <h3 className={styles.cardTitle}>Client Details</h3>
                    </div>
                    <div className={styles.formGrid}>
                        <Select
                            label="Select Customer"
                            options={[
                                { label: 'Jean Dupont', value: '1' },
                                { label: 'Marie Claire', value: '2' }
                            ]}
                        />
                        <Input label="Date" type="date" />
                        <Input label="Reference / Ticket ID" placeholder="e.g. T-1024" />
                        <Input label="Device Model" placeholder="e.g. iPhone 13" />
                    </div>
                </Card>

                {/* Line Items */}
                <Card className={styles.itemsCard}>
                    <div className={styles.sectionHeader}>
                        <h3 className={styles.cardTitle}>Services & Parts</h3>
                    </div>

                    <table className={styles.itemTable}>
                        <thead>
                            <tr>
                                <th style={{ width: '40%' }}>Description</th>
                                <th style={{ width: '15%' }}>Qty</th>
                                <th style={{ width: '25%' }}>Unit Price (RWF)</th>
                                <th style={{ width: '15%' }}>Total</th>
                                <th style={{ width: '5%' }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <Input
                                            placeholder="Item description"
                                            value={item.description}
                                            onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                                            className={styles.tableInput}
                                        />
                                    </td>
                                    <td>
                                        <Input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                                            className={styles.tableInput}
                                        />
                                    </td>
                                    <td>
                                        <Input
                                            type="number"
                                            min="0"
                                            value={item.unitPrice}
                                            onChange={(e) => updateItem(item.id, 'unitPrice', parseFloat(e.target.value) || 0)}
                                            className={styles.tableInput}
                                        />
                                    </td>
                                    <td className={styles.rowTotal}>
                                        {(item.quantity * item.unitPrice).toLocaleString()}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className={styles.deleteButton}
                                            disabled={items.length === 1}
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className={styles.tableFooter}>
                        <Button variant="ghost" onClick={addItem} size="sm">
                            <Plus size={16} /> Add Item
                        </Button>

                        <div className={styles.totalSection}>
                            <div className={styles.totalRow}>
                                <span>Subtotal:</span>
                                <span>{calculateTotal().toLocaleString()} RWF</span>
                            </div>
                            <div className={styles.totalRow}>
                                <span>Tax (18%):</span>
                                <span>{(calculateTotal() * 0.18).toLocaleString()} RWF</span>
                            </div>
                            <div className={styles.grandTotal}>
                                <span>Total:</span>
                                <span>{(calculateTotal() * 1.18).toLocaleString()} RWF</span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Notes */}
                <Card>
                    <h3 className={styles.cardTitle}>Terms & Notes</h3>
                    <Input placeholder="Additional notes for the client..." />
                </Card>
            </div>
        </div>
    );
}
