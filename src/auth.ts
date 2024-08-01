import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserCredentials } from "./app/lib/data";
import { signInSchema } from "./app/lib/validate";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Bienvenue" },
        password: { label: "Mot de passe", type: "password", placeholder: "******" },
      },
      authorize: async (credentials): Promise<User | null> => {
        try {
          const { email, password } = await signInSchema.parseAsync(credentials);

          const user = await getUserCredentials(email, password);

          if (!user) {
            throw new Error("Mauvais IDs de connexion");
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation error:", error);
            return null;
          }
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  basePath: process.env.BASE_PATH,
  secret: process.env.AUTH_SECRET,
});
