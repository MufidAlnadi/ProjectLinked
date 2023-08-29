export { default } from "next-auth/middleware";
export const config = {
  matcher: [
    "/checkout/:path*",
    "/job/:path*",
    "/JobDetails/:path*",
    "/applications/:path*",
    "/myProjects",
  ],
};
