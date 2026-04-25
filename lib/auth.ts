// Auth helpers — currently mocked. The real implementation will:
//   - exchange password for JWT via api.login
//   - store access token in memory + refresh token in httpOnly cookie (set by Laravel)
//   - automatically retry 401s with the refresh endpoint
//
// Per CLAUDE.md security rules: never use localStorage for tokens.

import { api } from "./api";
import type { LoginCredentials, User } from "@/types/user";

let currentSession: { user: User; accessToken: string } | null = null;

export async function login(creds: LoginCredentials): Promise<User> {
  const session = await api.login(creds);
  currentSession = { user: session.user, accessToken: session.accessToken };
  return session.user;
}

export async function logout(): Promise<void> {
  await api.logout();
  currentSession = null;
}

export function getCurrentUser(): User | null {
  return currentSession?.user ?? null;
}

export function getAccessToken(): string | null {
  return currentSession?.accessToken ?? null;
}

export function isAdmin(user: User | null): boolean {
  return user?.accountType === "admin";
}

export function isEmployer(user: User | null): boolean {
  return user?.accountType === "employer";
}

export function isIndividual(user: User | null): boolean {
  return user?.accountType === "individual";
}
