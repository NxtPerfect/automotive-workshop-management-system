import { getUser } from "@/app/utils";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials, req) {
        console.log('Before check');
        const user = await getUser(credentials.email as string);
        if (!user) return null;
        const passwordsMatch = await bcrypt.compare(credentials.password, user.password);
        console.log(passwordsMatch, credentials.password, user.password)

        if (passwordsMatch) return user;
        // return user;
        console.log("Invalid credentials");
        return null;
      }
    })
  ]
})

export { handler as GET, handler as POST };
