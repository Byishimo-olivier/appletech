"use client";
import React, { useState } from 'react';
import { useLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import { Plus, Search, MoreHorizontal, Phone, Mail, Smartphone } from 'lucide-react';
import styles from './page.module.css';
import CustomerForm from '@/components/modules/CustomerForm';
import Modal from '@/components/ui/Modal';

export default function CustomersPage() {
    const { t } = useLanguage();
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Mock Data
    const customers = [
        { id: 1, name: 'Jean Dupont', phone: '+250 788 123 456', email: 'jean@example.com', devices: 2 },
        { id: 2, name: 'Marie Claire', phone: '+250 788 654 321', email: 'marie@example.com', devices: 1 },
        { id: 3, name: 'John Smith', phone: '+250 788 987 654', email: 'john@example.com', devices: 3 },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>{t('customers.title')}</h1>
                    <p className={styles.subtitle}>Manage your customer base</p>
                </div>
                <Button onClick={() => setIsFormOpen(true)}>
                    <Plus size={18} />
                    {t('customers.add_new')}
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
                                <th>{t('customers.name')}</th>
                                <th>{t('customers.phone')}</th>
                                <th>{t('customers.email')}</th>
                                <th>{t('customers.devices')}</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer) => (
                                <tr key={customer.id}>
                                    <td>
                                        <div className={styles.nameCell}>
                                            <div className={styles.avatar}>
                                                {customer.name.charAt(0)}
                                            </div>
                                            <span className={styles.nameText}>{customer.name}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.iconText}>
                                            <Phone size={14} className={styles.cellIcon} />
                                            {customer.phone}
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.iconText}>
                                            <Mail size={14} className={styles.cellIcon} />
                                            {customer.email}
                                        </div>
                                    </td>
                                    <td>
                                        <div className={styles.devicesBadge}>
                                            <Smartphone size={14} />
                                            {customer.devices}
                                        </div>
                                    </td>
                                    <td>
                                        <button className={styles.actionButton}>
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            <Modal
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                title={t('customers.add_new')}
            >
                <CustomerForm
                    onClose={() => setIsFormOpen(false)}
                    onSubmit={() => {
                        console.log("Form Submitted");
                        // Refresh data logic here
                    }}
                />
            </Modal>
        </div>
    );
}
