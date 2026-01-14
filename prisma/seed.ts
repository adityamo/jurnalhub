import { PrismaClient } from "@prisma/client";
import { getJsonData } from "./utils";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function createAdminUser() {
  const password = "password123";
  const passwordHash = await bcrypt.hash(password, 10);

  // ====== USER ======
  const user = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@example.com",
      emailVerified: new Date(),
      passwordHash,
      image: "https://avatars.githubusercontent.com/u/1?v=4",
    },
  });

  console.log("✅ User created:", user.email);

  await prisma.account.upsert({
    where: {
      provider_providerAccountId: {
        provider: "credentials",
        providerAccountId: user.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      type: "credentials",
      provider: "credentials",
      providerAccountId: user.id,
    },
  });

  console.log("✅ Account created");

  // ====== SESSION ======
  await prisma.session.create({
    data: {
      sessionToken: crypto.randomUUID(),
      userId: user.id,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 hari
    },
  });

  // ====== VERIFICATION TOKEN ======
  await prisma.verificationToken.create({
    data: {
      identifier: user.email,
      token: crypto.randomUUID(),
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    },
  });
}

async function main() {
  await createAdminUser();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
