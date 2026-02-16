"use client";
import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/i18n';
import styles from './page.module.css';
import { Activity, Users, Wrench, Clock, DollarSign, BarChart3, CheckCircle } from 'lucide-react';

export default function Dashboard() {
  const { t } = useLanguage();
  const [role, setRole] = useState('admin'); // 'admin' | 'technician'

  const adminStats = [
    { title: t('dashboard.totalRepairs'), value: '124', icon: Wrench, color: 'blue' },
    { title: t('dashboard.activeCustomers'), value: '892', icon: Users, color: 'green' },
    { title: t('dashboard.pendingRequests'), value: '15', icon: Clock, color: 'orange' },
    { title: "Monthly Revenue", value: '4.2M RWF', icon: DollarSign, color: 'purple' },
  ];

  const techStats = [
    { title: "My Assigned Repairs", value: '8', icon: Wrench, color: 'blue' },
    { title: "Completed Today", value: '3', icon: CheckCircle, color: 'green' },
    { title: "Pending Diagnosis", value: '2', icon: Activity, color: 'orange' },
  ];

  const stats = role === 'admin' ? adminStats : techStats;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>{t('dashboard.welcome')}</h1>
          <p className={styles.subtitle}>{t('dashboard.overview')}</p>
        </div>
        <div className={styles.roleSwitcher}>
          <span className={styles.roleLabel}>View as:</span>
          <select
            className={styles.roleSelect}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="technician">Technician</option>
          </select>
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <Card key={index} className={styles.statCard}>
            <div className={styles.statIcon} style={{ backgroundColor: `var(--system-${stat.color})` }}>
              <stat.icon size={24} color="white" />
            </div>
            <div className={styles.statInfo}>
              <p className={styles.statTitle}>{stat.title}</p>
              <h3 className={styles.statValue}>{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className={styles.sectionsGrid}>
        <Card className={styles.chartCard}>
          <h3 className={styles.cardTitle}>{role === 'admin' ? 'Revenue Overview' : 'Repair Performance'}</h3>
          <div className={styles.placeholderChart}>
            <BarChart3 size={48} className={styles.chartIcon} />
            <p>Chart Visualization Placeholder</p>
          </div>
        </Card>

        <Card className={styles.recentActivity}>
          <h3 className={styles.cardTitle}>{t('dashboard.recentActivity')}</h3>
          <ul className={styles.activityList}>
            <li className={styles.activityItem}>
              <span className={styles.activityTime}>10:42 AM</span>
              <p><strong>Jean Dupont</strong> submitted a new request.</p>
            </li>
            <li className={styles.activityItem}>
              <span className={styles.activityTime}>09:15 AM</span>
              <p>Technician <strong>John</strong> completed repair #T-1023.</p>
            </li>
            <li className={styles.activityItem}>
              <span className={styles.activityTime}>Yesterday</span>
              <p>New inventory added: <strong>iPhone 13 Screens (x5)</strong></p>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
