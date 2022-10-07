import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// import { signIn, signOut } from "next-auth/react";
import { signIn } from "next-auth/react";
import db from "../../../lib/dbConnect";
import User from "../../../models/user";

export default NextAuth({
  providers: [
    CredentialsProviders({
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
            email: user.password,
          };
        }
        throw new Error("Invalid credentials");
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
});
