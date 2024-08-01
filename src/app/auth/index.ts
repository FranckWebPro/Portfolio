import NextAuth, { User, NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserCredentials } from "../lib/data";
import { UserCredentials } from "../lib/definitions";

const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Welcome" },
        password: { label: "Password", type: "password", placeholder: "******" },
      },
      async authorize(credentials): Promise<User | null> {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials as UserCredentials;

        const user = await getUserCredentials(email, password);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  basePath: process.env.BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
};

const { handlers, auth, signIn, signOut } = NextAuth(authOptions);

export { handlers, auth, signIn, signOut };
