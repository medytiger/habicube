import { Poppins } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./hooks/Context";
import ClientOnly from "./components/ClientOnly";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/auth";
// import { AuthProvider } from './AuthProvider';

// Importation des polices Google
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Métadonnées de l'application
export const metadata = {
  title: "Nomades",
  description:
    "Habicube est une plate-forme communautaire gestionnaire et prestataire de services immobiliers et automobiles. Que ce soit pour des locations de courte, moyenne ou longue durée, ou pour des achats à l'ère du nomadisme digital.",
};

// Mise en page racine
export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="fr" className={`${poppins.className}`}>
        <body>
          {/* <AuthProvider> */}
          <ClientOnly>
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </ClientOnly>
          {/* </AuthProvider> */}
        </body>
      </html>
    </SessionProvider>
  );
}
