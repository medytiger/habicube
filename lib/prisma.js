import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

let prisma;

// Vérifiez si vous êtes en mode production
const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  // En développement, utilisez global pour éviter plusieurs instances
  if (!global.prismaGlobal) {
    global.prismaGlobal = prismaClientSingleton();
  }
  prisma = global.prismaGlobal;
} else {
  // En production, créez une nouvelle instance de PrismaClient
  prisma = prismaClientSingleton();
}

export default prisma;
