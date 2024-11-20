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

export default function RegisterModal() {
    const { isRegisterModalOpen, closeRegisterModal, setIsConnexionModalOpen } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [registerFormData, setRegisterFormData] = useState({ name: "", email: "", password: "" });


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Validation locale
        const errors = {};
        if (!registerFormData.name) errors.name = "Le nom est requis.";
        if (!registerFormData.email) errors.email = "L'email est requis.";
        if (!registerFormData.password) errors.password = "Le mot de passe est requis.";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            setIsLoading(false);
            return;
        }

        // Appel de l'API d'inscription
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(registerFormData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Une erreur est survenue.");
            }

            toast.success("Inscription réussie !");
            setFormData({ name: "", email: "", password: "" }); // Réinitialiser le formulaire
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };


    const bodyContent = (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <Heading
                title="Bienvenue sur Nomades !"
                subtitle="Veuillez vous identifier s'il vous plaît"
                center='flex-start'
            />

            <Input
                id="name"
                label="Nom"
                disabled={isLoading}
                value={registerFormData.name}
                onChange={(e) => setRegisterFormData({ ...registerFormData, name: e.target.value })}
                errors={formErrors.name}
            />

            <Input
                id="email"
                label="Email"
                type="email"
                disabled={isLoading}
                value={registerFormData.email}
                onChange={(e) => setRegisterFormData({ ...registerFormData, email: e.target.value })}
                errors={formErrors.email}
            />

            <Input
                id="password"
                type='password'
                label="Password"
                disabled={isLoading}
                value={registerFormData.password}
                onChange={(e) => setRegisterFormData({ ...registerFormData, password: e.target.value })}
                errors={formErrors.password}
            />


            <div className={styles.formButton}>
                <Button
                    type="submit"
                    label="S'inscrire"
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
                onClick={() => loginWithGoogle('google')} // Utilisez la fonction ici aussi pour Google
            />

            <div className={styles.instruction}>
                <div>
                    Avez-vous un compte ?
                </div>
                <div className={styles.linkConnexion} onClick={() => {
                    closeRegisterModal();
                    setIsConnexionModalOpen(true);
                }}>
                    Se connecter
                </div>
            </div>
        </div>
    );

    return (
        <Modals
            disabled={isLoading}
            isOpen={isRegisterModalOpen}
            title="Inscription"
            itemWidth='380px'
            onClose={closeRegisterModal}
            body={bodyContent}
            footer={footerContent}
        />
    );
}