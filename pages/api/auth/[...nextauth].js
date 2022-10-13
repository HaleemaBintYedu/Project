import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "../../../lib/dbConnect";
import User from "../../../models/user";
import FacebookProvider from "next-auth/providers/facebook";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    CredentialsProvider({
      //credentials host email and the password
      type: "credentials",
      async authorize(credentials) {
        //connect DB
        await db.connect();
        //find user
        const user = await User.findOne({
          email: credentials.email,
        });

        //disconnect DB
        await db.disconnect();

        //check for user's password
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return {
            id: user._id,
            name: user.name,
            email: user.email,
          };
        }
        throw new Error("Invalid credentials");
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.name) token.name = user.name;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.name) session.user.name = token.name;
      return session;
    },
  },
});
