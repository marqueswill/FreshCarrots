import { prisma } from "./prisma";

async function seed() {
  console.log("Seed completed successfully");
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
