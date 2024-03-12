import { options } from "@/app/lib/next-auth/option";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth(options);

export { handler as GET, handler as POST };
