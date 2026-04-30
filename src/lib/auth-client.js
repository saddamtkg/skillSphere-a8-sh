import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // This base URL is used in client-side auth requests.
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export const { signIn, signUp, signOut, useSession } = authClient;
