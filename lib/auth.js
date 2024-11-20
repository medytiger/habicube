// auth.js
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "./prisma";
import { registerUser } from "@/actions/authentification";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        name: { label: "Nom", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (
          !credentials ||
          !credentials.email ||
          !credentials.password ||
          !credentials.name
        ) {
          return null;
        }

        const { name, email, password } = credentials;

        // Vérifie si l'utilisateur existe déjà dans la base de données
        let user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          // Si l'utilisateur n'existe pas, on le crée en appelant `registerUser`
          const registrationResult = await registerUser({
            name,
            email,
            password,
          });
          if (registrationResult.error) {
            throw new Error(registrationResult.error);
          }
          user = await prisma.user.findUnique({ where: { email } });
        } else {
          // Si l'utilisateur existe, on vérifie le mot de passe
          const isPasswordValid = bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Mot de passe incorrect.");
          }
        }

        // Retourne l'utilisateur pour la connexion
        return user;
      },
    }),
  ],
});
