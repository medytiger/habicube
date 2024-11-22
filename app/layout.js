import { Poppins } from "next/font/google";
import "./globals.css";
import { GlobalContextProvider } from "./hooks/Context";
import ClientOnly from "./components/ClientOnly";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/lib/auth";

// Importation des polices Google
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Métadonnées de l'application
export const metadata = {
  title: "Habicube",
  description:
    "Habicube est une plate-forme communautaire gestionnaire et prestataire de services immobiliers et automobiles. Que ce soit pour des locations de courte, moyenne ou longue durée, ou pour des achats à l'ère du nomadisme digital.",
};

// Mise en page racine
export default async function RootLayout({ children }) {
  const session = await auth(); // Assurez-vous que cette fonction fonctionne correctement
  return (
    <html lang="fr" className={`${poppins.className}`}>
      <body>
        <SessionProvider session={session}>
          {/* <AuthProvider> */}
          <ClientOnly>
            <GlobalContextProvider>{children}</GlobalContextProvider>
          </ClientOnly>
          {/* </AuthProvider> */}
        </SessionProvider>
      </body>
    </html>
  );
}
