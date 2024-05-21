import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const protectedRoute = ["/test"];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  basePath: "/api/auth",
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; // !!は真偽値に変換
      const isProtectedRoute = protectedRoute.includes(nextUrl.pathname);
      if (isProtectedRoute) { // プロテクトされたページにアクセス
        if (isLoggedIn) { // ログイン済み
          return true;
        } else {
            return false;
        }
      }

      return true;
    },
  },
});
