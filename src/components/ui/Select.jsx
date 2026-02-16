import React, { useId } from 'react';
import styles from './Select.module.css';

export default function Select({
    label,
    options = [],
    error,
    className = '',
    id,
    placeholder = 'Select an option',
    ...props
}) {
    const generatedId = useId();
    const selectId = id || props.name || generatedId;

    return (
        <div className={`${styles.container} ${className}`}>
            {label && <label htmlFor={selectId} className={styles.label}>{label}</label>}
            <div className={styles.selectWrapper}>
                <select
                    id={selectId}
                    className={`${styles.select} ${error ? styles.hasError : ''}`}
                    {...props}
                >
                    <option value="" disabled hidden>{placeholder}</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <span className={styles.arrow} />
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}
