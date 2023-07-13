import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: '74060280128-srahfv87jcjccmc2evv9p2onapjk7248.apps.googleusercontent.com',
      clientSecret: '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',
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)