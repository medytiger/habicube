"use client"

import React, { useCallback, useEffect, useState } from 'react';
import styles from "./modal.module.css";
import { IoMdClose } from 'react-icons/io';
import Button from '../ui/button/button';

export default function Modals({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
    itemWidth = '600px',
    itemHeight
}) {
    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }

        setShowModal(false);
        setTimeout(() => {
            onClose();
        }, 300);
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalContainer}>
            <div className={styles.ModalCard}>

                <div className={`${styles.content} ${showModal ? styles.modalIsOpen : ''}`}>

                    <div className={styles.item} style={{ width: itemWidth, height: itemHeight }}>

                        {/* {modal Head } */}
                        <div className={styles.modalHead}>
                            <h3 className={styles.title}> {title} </h3>
                            <button className={styles.closeModal} onClick={handleClose}>
                                <IoMdClose />
                            </button>
                        </div>

                        {/* {modal body } */}
                        <div className={styles.body}>
                            {body}
                        </div>

                        {/* {modal footer } */}
                        <div className={styles.footer}>
                            {footer}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

