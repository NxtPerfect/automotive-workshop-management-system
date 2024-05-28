import NextAuth from "next-auth/next";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/login', '/register']
}
