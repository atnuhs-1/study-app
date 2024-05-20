import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const protectedRoute = ["/test"];

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [Google],
  basePath: "/api/auth",
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtectedRoute = protectedRoute.includes(nextUrl.pathname);
      console.log(isProtectedRoute);
      if (isProtectedRoute) {
        if (isLoggedIn) {
          return true;
        } 
        return false;
      }

      return true;
    },
  },
});
