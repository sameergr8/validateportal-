"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { api } from "@/lib/api";
import { isAdmin, isEmployer, isIndividual } from "@/lib/auth";
import type { LoginCredentials, User } from "@/types/user";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  login: (creds: LoginCredentials) => Promise<User>;
  logout: () => Promise<void>;
  isAdmin: boolean;
  isEmployer: boolean;
  isIndividual: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.me().then((u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  async function login(creds: LoginCredentials) {
    const session = await api.login(creds);
    setUser(session.user);
    return session.user;
  }

  async function logout() {
    await api.logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAdmin: isAdmin(user),
        isEmployer: isEmployer(user),
        isIndividual: isIndividual(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
