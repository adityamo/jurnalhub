// import { RegisterCompanySchema } from "@/entities/regbusiness";
import { createTRPCRouter } from "@/server/api/trpc";
import { publicProcedure } from "@/server/api/trpc";
import { prisma } from "@/server/db";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const registerBusiness = createTRPCRouter({
  getTypeCompany: publicProcedure.query(({ ctx }) => {
    return "";
  }),
  getTypeBank: publicProcedure.query(({ ctx }) => {
    return "";
  }),
  checkHaveCompany: publicProcedure
    .input(z.object({ email: z.string().email() })) // Validasi input menggunakan zod
    .query(async ({ ctx, input }) => {
      // Cari user berdasarkan email dan sertakan data perusahaan
      const user = await ctx.prisma.user.findUnique({
        where: {
          email: input.email,
        },
      });

      if (!user) {
        throw new Error("User not found");
      }

      return "";
    }),
  registerBusiness: publicProcedure
    .input((input) => input)
    .mutation(async ({ input }: any) => {
      const { company } = input;
      const ownerID: string = company.ownerId;

      console.log(ownerID);
      if (!ownerID) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `User tidak boleh kosong`,
        });
      }

      const existingUser = await prisma.user.findUnique({
        where: {
          id: ownerID,
        },
      });

      if (!existingUser) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: `User tidak ditemukan`,
        });
      }
    }),
});
