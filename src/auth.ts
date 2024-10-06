import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { getUserCredentials } from "./lib/data";
import { signInSchema } from "./lib/validate";
import { ZodError } from "zod";
import { UserCredentials } from "./lib/definitions";

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

          const user: UserCredentials | null = await getUserCredentials(email);

          if (!user) {
            throw new Error("Mauvais IDs de connexion");
          }

          if (user && (await bcrypt.compare(password, user.password))) {
            return user;
          } else {
            return null;
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
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? `${baseUrl}/dashboard` : baseUrl;
    },
  },
  basePath: process.env.BASE_PATH,
  secret: process.env.AUTH_SECRET,
  cookies: {
    sessionToken: {
      name: process.env.NODE_ENV === "production" ? "__Secure-authjs.session-token" : "authjs.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
});
