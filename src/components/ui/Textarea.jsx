import React, { useId } from 'react';
import styles from './Textarea.module.css';

export default function Textarea({
    label,
    error,
    className = '',
    id,
    rows = 4,
    ...props
}) {
    const generatedId = useId();
    const textareaId = id || props.name || generatedId;

    return (
        <div className={`${styles.container} ${className}`}>
            {label && <label htmlFor={textareaId} className={styles.label}>{label}</label>}
            <textarea
                id={textareaId}
                className={`${styles.textarea} ${error ? styles.hasError : ''}`}
                rows={rows}
                {...props}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
