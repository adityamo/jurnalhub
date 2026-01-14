import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { z } from "zod";

import { UserRegisterSchema } from "@/entities";
import * as bs from "bcryptjs";
import { prisma } from "@/server/db";
import { TRPCError } from "@trpc/server";

export const authRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return "trpc running bro";
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "You can see this in server side";
  }),
  getUserInfo: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return "";
    }),
  registerUser: publicProcedure
    .input(UserRegisterSchema)
    .mutation(async ({ input }: any) => {
      const { name, email, password } = input;
      const passwordEncrypt = await bs.hash(password, await bs.genSalt(12));

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `User sudah terdaftar`,
        });
      }

      const registerData: any = {
        name: name,
        password: passwordEncrypt,
        email: email,
        rolesId: "",
      };

      const user = await prisma.user.create({
        data: registerData,
      });

      return user;
    }),
});
