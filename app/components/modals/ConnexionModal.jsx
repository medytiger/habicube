"use client";

import React, { useState } from 'react';
import styles from "./modal.module.css";
import { FcGoogle } from "react-icons/fc";
import Modals from './Modals';
import { useGlobalContext } from '../../hooks/Context';
import Heading from './Heading';
import { toast } from 'react-toastify'; // Importez toast ici
import Button from '../ui/button/button';
import Input from '../ui/inputs/input';
import { loginWithGoogle } from '@/actions/authentification'; // Importez la fonction pour Google

export default function ConnexionModal() {
    const { isConnexionModalOpen, closeConnexionModal, setIsRegisterModalOpen } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        setIsLoading(true);
        setFormErrors({}); // Réinitialiser les erreurs

        // Validation des champs
        const errors = {};
        if (!loginFormData.email) errors.email = "L'email est requis.";
        if (!loginFormData.password) errors.password = "Le mot de passe est requis.";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setIsLoading(false);
            return; // Arrête le traitement si des erreurs sont présentes
        }

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginFormData), // Envoie les données du formulaire
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Une erreur est survenue.");
            }

            toast.success("Connexion réussie !");
            closeConnexionModal(); // Ferme le modal après une connexion réussie
        } catch (error) {
            console.error("Erreur lors de la connexion :", error);
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const bodyContent = (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <Heading
                title="Ravi de vous revoir !"
                subtitle="Veuillez vous identifier s'il vous plaît"
                center='flex-start'
            />

            <Input
                id="email"
                label="Email"
                type="email"
                disabled={isLoading}
                value={loginFormData.email}
                onChange={(e) => setLoginFormData({ ...loginFormData, email: e.target.value })}
                errors={formErrors.email}
            />

            <Input
                id="password"
                type='password'
                label="Password"
                disabled={isLoading}
                value={loginFormData.password}
                onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
                errors={formErrors.password}
            />

            <div className={styles.formButton}>
                <Button
                    type="submit"
                    label="Se connecter"
                    disabled={isLoading}
                />
            </div>
        </form>
    );

    const footerContent = (
        <div>
            <Button
                outline
                label={'Continuer avec Google'}
                icon={FcGoogle}
                onClick={() => loginWithGoogle('google')} // Utilisez la fonction ici pour Google
            />

            <div className={styles.instruction}>
                <div>
                    Vous n&apos; avez pas un compte ?
                </div>
                <div className={styles.linkConnexion} onClick={() => {
                    closeConnexionModal();
                    setIsRegisterModalOpen(true);
                }}>
                    S&apos; inscrire
                </div>
            </div>
        </div>
    );

    return (
        <Modals
            disabled={isLoading}
            isOpen={isConnexionModalOpen}
            title="Connexion"
            itemWidth='380px'
            onClose={closeConnexionModal}
            body={bodyContent}
            footer={footerContent}
        />
    );
}