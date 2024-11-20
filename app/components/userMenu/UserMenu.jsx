"use client";

import React, { useCallback, useState, useEffect } from "react";
import style from "./userMenu.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../ui/avatar/Avatar";
import { useGlobalContext } from "@/app/hooks/Context";
import Image from "next/image";

export default function UserMenu() {
    const { user, setUser, handleLogout, setIsAddProductModalOpen, setIsConnexionModalOpen, setIsRegisterModalOpen } = useGlobalContext();
    const [isOpen, setIsOpen] = useState(false);

    // Utilisation de useEffect pour récupérer la session
    useEffect(() => {
        const fetchSession = async () => {
            try {
                const response = await fetch('/api/session'); // Appel à l'API pour récupérer la session
                if (!response.ok) {
                    throw new Error("Erreur lors de la récupération de la session");
                }
                const session = await response.json();
                if (session && session.user) {
                    setUser(session.user);
                }
            } catch (error) {
                console.error("Erreur lors de la récupération de la session:", error);
            }
        };

        fetchSession();
    }, []); // Appel initial

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);



    const menuItems = user ? [
        { label: "Profil", onClick: toggleOpen },
        { label: "Ma favorite", onClick: toggleOpen },
        { label: "Mes réservations", onClick: toggleOpen },
        { label: "Mes biens", onClick: toggleOpen },
        { label: "Ajouter un bien en ligne", onClick: () => { setIsAddProductModalOpen(true); toggleOpen(); } },
        { label: "Annonce", onClick: () => { setIsAddProductModalOpen(true); toggleOpen(); } },
        { label: "Mon historique", onClick: toggleOpen },
        { label: "Se déconnecter", onClick: handleLogout }
    ] : [
        { label: "Se connecter", onClick: () => { setIsConnexionModalOpen(true); toggleOpen(); } },
        { label: "S'inscrire", onClick: () => { setIsRegisterModalOpen(true); toggleOpen(); } }
    ];

    return (
        <div className={style.userMenuContainer}>
            <div className={style.userMenu} onClick={toggleOpen}>
                {user ? (
                    <>
                        <span className={style.userName}>
                            {user.name}
                        </span>
                        {user.image ? (
                            <Image
                                src={user.image}
                                alt={`La photo de profil de ${user.name}`}
                                width={30}
                                height={30}
                                className={style.userAvatar}
                            />
                        ) : (
                            <Avatar />
                        )}
                        <AiOutlineMenu />
                    </>
                ) : (
                    <>
                        <AiOutlineMenu />
                        <Avatar />
                    </>
                )}
            </div>

            {isOpen && (
                <div className={`${style.userMenuLinks} ${isOpen ? style.open : ""}`}>
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className={style.menuItem}
                            onClick={item.onClick}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}