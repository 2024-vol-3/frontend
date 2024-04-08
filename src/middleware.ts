import { authMiddleware } from "@clerk/nextjs";

// welcomeページのアクセスを許可
export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
