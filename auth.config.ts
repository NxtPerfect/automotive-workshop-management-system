import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (nextUrl.pathname.startsWith('/zlecenia') || nextUrl.pathname.startsWith('/zlecenie') || nextUrl.pathname.startsWith('/czesci')) {
        if (isLoggedIn) return true;
        return false;
      }
      if (isLoggedIn) return Response.redirect(new URL('/zlecenia'), nextUrl);
      return true;
    }
  },
  providers: [],
} satisfies NextAuthConfig;
