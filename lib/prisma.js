import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

let prisma;

// Vérifiez si vous êtes en mode développement pour utiliser `global`
if (process.env.DATABASE_URL !== "production") {
  if (!global.prismaGlobal) {
    global.prismaGlobal = prismaClientSingleton();
  }
  prisma = global.prismaGlobal;
} else {
  // En production, créez une nouvelle instance de PrismaClient
  prisma = prismaClientSingleton();
}

export default prisma;
