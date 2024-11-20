import React, { useCallback } from 'react';
import styles from './Counters.module.css';

export default function Counters({ title, subtitle, value, onChange }) {

    const onAdd = useCallback(() => {
        onChange(value + 1);
    }, [onChange, value]);

    const onReduce = useCallback(() => {
        if (value > 1) {  // Évitez de descendre en dessous de 1
            onChange(value - 1);
        }
    }, [onChange, value]);

    return (
        <div className={styles.counterContainer}>
            <div className={styles.CounterDetail}>
                <h5 className={styles.CounterTitle}>
                    {title}
                </h5>
                <h6 className={styles.CounterSubtitle}>
                    {subtitle}
                </h6>
            </div>
            <div className={styles.CounterValue}>
                <span onClick={onReduce} className={styles.CounterButton}> - </span>
                <div className={styles.value}>{value}</div>
                <span onClick={onAdd} className={styles.CounterButton}> + </span>
            </div>
        </div>
    );
}
