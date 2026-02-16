import React, { useId } from 'react';
import styles from './Input.module.css';

export default function Input({
    type = 'text',
    label,
    error,
    className = '',
    id,
    ...props
}) {
    const generatedId = useId();
    const inputId = id || props.name || generatedId;

    return (
        <div className={`${styles.container} ${className}`}>
            {label && <label htmlFor={inputId} className={styles.label}>{label}</label>}
            <input
                id={inputId}
                type={type}
                className={`${styles.input} ${error ? styles.hasError : ''}`}
                {...props}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
