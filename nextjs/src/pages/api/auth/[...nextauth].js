import { prisma } from "../../../../prisma/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

export default NextAuth(authOptions);
