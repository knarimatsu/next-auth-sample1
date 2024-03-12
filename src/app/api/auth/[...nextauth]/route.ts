import { options } from "@/src/app/lib/next-auth/option";
import NextAuth, { AuthOptions } from "next-auth";

const handler = NextAuth(options);

export { handler as GET, handler as POST };
