"use client";
import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Smartphone, MapPin, Clock, Wrench, ChevronRight } from 'lucide-react';
import styles from './page.module.css';
import Link from 'next/link';

export default function ClientDashboard() {
  // Mock User Data
  const user = {
    name: "John Client",
    email: "john.client@example.com",
    phone: "+250 788 000 000",
    address: "Kigali, Rwanda"
  };

  // Mock Tickets
  const tickets = [
    { id: 'T-1024', device: 'iPhone 13 Pro', issue: 'Cracked Screen', status: 'In Progress', date: '2023-10-25' },
    { id: 'T-1020', device: 'MacBook Air', issue: 'Battery Service', status: 'Completed', date: '2023-10-20' },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.welcomeHeader}>
        <h1 className={styles.welcomeTitle}>Welcome back, {user.name}</h1>
        <p className={styles.welcomeSubtitle}>Track your repairs and manage your devices.</p>
      </header>

      <div className={styles.grid}>
        {/* Profile Details */}
        <Card className={styles.profileCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>My Profile</h2>
            <Button variant="ghost" size="sm">Edit</Button>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.infoRow}>
              <span className={styles.label}>Email</span>
              <span className={styles.value}>{user.email}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Phone</span>
              <span className={styles.value}>{user.phone}</span>
            </div>
            <div className={styles.infoRow}>
              <span className={styles.label}>Address</span>
              <div className={styles.valueWithIcon}>
                <MapPin size={14} />
                {user.address}
              </div>
            </div>
          </div>
        </Card>

        {/* Action Card */}
        <Card className={styles.actionCard}>
          <div className={styles.actionContent}>
            <Wrench size={32} className={styles.actionIcon} />
            <div>
              <h2 className={styles.cardTitle}>Need a Repair?</h2>
              <p className={styles.cardText}>Submit a new ticket and get a quote instantly.</p>
            </div>
          </div>
          <Link href="/client/new-ticket">
            <Button className={styles.fullWidthBtn}>Buy Ticket / Request Repair</Button>
          </Link>
        </Card>
      </div>

      {/* Active Tickets */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>My Tickets</h2>
        <div className={styles.ticketList}>
          {tickets.map(ticket => (
            <Card key={ticket.id} className={styles.ticketCard}>
              <div className={styles.ticketIcon}>
                <Smartphone size={24} color="white" />
              </div>
              <div className={styles.ticketInfo}>
                <h3 className={styles.deviceModel}>{ticket.device}</h3>
                <p className={styles.issue}>{ticket.issue}</p>
                <span className={styles.ticketId}>#{ticket.id} &bull; {ticket.date}</span>
              </div>
              <div className={styles.ticketStatus}>
                <span className={`${styles.badge} ${ticket.status === 'Completed' ? styles.completed : styles.pending}`}>
                  {ticket.status}
                </span>
                <ChevronRight size={20} className={styles.chevron} />
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
