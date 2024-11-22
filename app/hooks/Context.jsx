"use client"; // Assurez-vous que ce composant est un composant client

import { logout } from "@/actions/authentification";
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isConnexionModalOpen, setIsConnexionModalOpen] = useState(false);
    const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
    const [user, setUser] = useState(null);

    const closeRegisterModal = () => setIsRegisterModalOpen(false);
    const closeConnexionModal = () => setIsConnexionModalOpen(false);
    const closeAddProductModal = () => setIsAddProductModalOpen(false);

    // Fonction handleLogout pour gérer la déconnexion
    const handleLogout = async () => {
        try {
            await logout();
            setUser(null);
            closeConnexionModal(); // Fermer le modal de connexion après déconnexion
            window.location.href = "/"; // Rediriger vers la page d'accueil
        } catch (error) {
            console.error("Erreur lors de la déconnexion :", error);
        }
    };

    return (
        <GlobalContext.Provider value={{
            isRegisterModalOpen,
            setIsRegisterModalOpen,
            closeRegisterModal,
            isConnexionModalOpen,
            setIsConnexionModalOpen,
            closeConnexionModal,
            isAddProductModalOpen,
            setIsAddProductModalOpen,
            closeAddProductModal,
            user,
            setUser,
            handleLogout
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);