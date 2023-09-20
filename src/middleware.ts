import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  beforeAuth: () => {
    // Do something here
    console.log("beforeAuth");
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
