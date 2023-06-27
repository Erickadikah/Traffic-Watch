import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Admin", email: "admin@admin.com" };
        return user;
      },
    }),
    GoogleProvider({
      clientId: '74060280128-srahfv87jcjccmc2evv9p2onapjk7248.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    GitHubProvider({
    clientId: 'process.env.GITHUB_ID',
    clientSecret: 'process.env.GITHUB_SECRET'
  }),
    TwitterProvider({
    clientId: 'process.env.TWITTER_CLIENT_ID',
    clientSecret: 'process.env.TWITTER_CLIENT_SECRET'
  }),
  ],
};