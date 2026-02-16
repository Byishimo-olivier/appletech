"use client";
import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Sparkles, BrainCircuit, Check } from 'lucide-react';
import styles from './AISuggestions.module.css';

export default function AISuggestions({ issueDescription }) {
    const [analyzing, setAnalyzing] = useState(false);
    const [suggestions, setSuggestions] = useState(null);

    const analyzeIssue = () => {
        setAnalyzing(true);
        // Simulate AI analysis delay
        setTimeout(() => {
            setAnalyzing(false);
            setSuggestions({
                diagnosis: "Likely Display Assembly Failure or Flex Cable damage.",
                parts: ["iPhone 13 Pro OLED Screen", "Display Adhesive"],
                estimatedCost: "250,000 - 300,000 RWF",
                confidence: 85
            });
        }, 2000);
    };

    return (
        <Card className={styles.card}>
            <div className={styles.header}>
                <div className={styles.titleRow}>
                    <BrainCircuit size={20} className={styles.icon} />
                    <h3 className={styles.title}>AI Diagnostic Assistant</h3>
                </div>
                {!suggestions && (
                    <Button size="sm" onClick={analyzeIssue} isLoading={analyzing}>
                        <Sparkles size={14} /> Analyze Issue
                    </Button>
                )}
            </div>

            {analyzing && (
                <div className={styles.loading}>
                    <div className={styles.spinner}></div>
                    <p>Analyzing symptoms...</p>
                </div>
            )}

            {suggestions && (
                <div className={styles.results}>
                    <div className={styles.resultItem}>
                        <span className={styles.label}>Suggested Diagnosis</span>
                        <p className={styles.value}>{suggestions.diagnosis}</p>
                    </div>

                    <div className={styles.resultItem}>
                        <span className={styles.label}>Recommended Parts</span>
                        <ul className={styles.partList}>
                            {suggestions.parts.map((p, i) => (
                                <li key={i}><Check size={12} className={styles.check} /> {p}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.confidence}>
                            <span>Confidence Score:</span>
                            <div className={styles.bar}>
                                <div className={styles.fill} style={{ width: `${suggestions.confidence}%` }}></div>
                            </div>
                            <span>{suggestions.confidence}%</span>
                        </div>
                        <p className={styles.estimate}>Est. Cost: {suggestions.estimatedCost}</p>
                    </div>
                </div>
            )}
        </Card>
    );
}
