import React from 'react'
import styles from './modal.module.css'

export default function Heading({
    title,
    subtitle,
    center = 'center',
}) {
    return (
        <div className={styles.bodyHeading} style={{ alignItems: center }}>
            <h4 className={styles.bodyTitle}> {title} </h4>
            <h6 className={styles.bodySubtitle}> {subtitle} </h6>
        </div>
    )
}
