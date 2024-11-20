// actions/authentification.js

import prisma from "@/lib/prisma"; // Assurez-vous que cela pointe vers votre instance Prisma
import bcrypt from "bcryptjs"; // Pour le hachage des mots de passe
import SaltAndHashPassword from "@/lib/bcrypt"; // Importez la fonction pour hacher les mots de passe
import { signIn, signOut } from "next-auth/react";

// Fonction pour se connecter avec des identifiants
export const loginWithCredentials = async ({ email, password }) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return { error: "Utilisateur non trouvé." };
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
      return { error: "Mot de passe incorrect." };
    }

    // Connexion réussie
    await signIn("credentials", {
      email,
      password,
      redirect: true, // Ne pas rediriger automatiquement
    });

    return {}; // Retourne un objet vide si la connexion réussie
  } catch (error) {
    console.error("Erreur lors de la connexion :", error);
    return { error: "Une erreur est survenue." };
  }
};

// Fonction pour s'inscrire
export const registerUser = async ({ name, email, password }) => {
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return { error: "Un utilisateur avec cet e-mail existe déjà." };
    }

    // Hachage du mot de passe
    const hashedPassword = SaltAndHashPassword(password);

    // Création de l'utilisateur
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return {}; // Inscription réussie
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    return { error: "Une erreur est survenue lors de l'inscription." };
  }
};

// Fonction pour se connecter avec Google
export const loginWithGoogle = async (provider) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

// Fonction pour se déconnecter
export const logout = async (provider) => {
  try {
    await signOut(provider, { redirectTo: "/" }); // Déconnexion sans redirection automatique
    revalidatePath("/");
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
  }
};
