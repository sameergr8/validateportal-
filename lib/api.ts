// Central API client. All data flows through this module.
// While the Laravel backend is in flight, NEXT_PUBLIC_USE_MOCKS=true serves
// data from lib/mocks.ts. Flip the flag to "false" once the API is reachable.
//
// Each function below documents the planned Laravel endpoint inline so the
// backend team has a contract to build against.

import type { Paginated } from "@/types/api";
import type {
  Case,
  CaseStatus,
  CaseSummary,
  CreateCaseInput,
  UpdateCaseStatusInput,
} from "@/types/case";
import type { ServiceType } from "@/types/document";
import type { AuthSession, LoginCredentials, User } from "@/types/user";

import {
  mockAdmin,
  mockCaseDetail,
  mockCaseSummaries,
  mockEmployer,
  mockIndividual,
  mockServices,
  mockStats,
} from "./mocks";

const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS !== "false";
const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api";

// Tiny artificial latency so loading states actually flash during dev.
const sleep = (ms = 250) => new Promise((r) => setTimeout(r, ms));

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(init?.headers ?? {}),
    },
    credentials: "include",
  });
  if (!res.ok) {
    const body = (await res.json().catch(() => ({}))) as { message?: string };
    throw new Error(body.message ?? `Request failed: ${res.status}`);
  }
  return (await res.json()) as T;
}

// ── Auth ───────────────────────────────────────────────────────────────
// Planned endpoints:
//   POST /auth/login          → AuthSession
//   POST /auth/logout         → 204
//   GET  /auth/me             → User
//   POST /auth/refresh        → AuthSession

export const api = {
  async login(creds: LoginCredentials): Promise<AuthSession> {
    if (USE_MOCKS) {
      await sleep();
      const user =
        creds.email === mockAdmin.email
          ? mockAdmin
          : creds.email === mockEmployer.email
          ? mockEmployer
          : mockIndividual;
      return {
        user,
        accessToken: "mock.jwt.access",
        refreshToken: "mock.jwt.refresh",
        expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
      };
    }
    return request<AuthSession>("/auth/login", { method: "POST", body: JSON.stringify(creds) });
  },

  async logout(): Promise<void> {
    if (USE_MOCKS) {
      await sleep(50);
      return;
    }
    await request<void>("/auth/logout", { method: "POST" });
  },

  async me(): Promise<User | null> {
    if (USE_MOCKS) {
      await sleep(50);
      return mockIndividual;
    }
    return request<User>("/auth/me");
  },

  // ── Services (catalogue of verification types) ────────────────────────────────────
  // Planned: GET /services → ServiceType[]
  async listServices(): Promise<ServiceType[]> {
    if (USE_MOCKS) {
      await sleep(100);
      return mockServices;
    }
    return request<ServiceType[]>("/services");
  },

  // ── Cases ───────────────────────────────────────────────────────────────
  // Planned:
  //   GET    /cases?page=&perPage=&status=&q=     → Paginated<CaseSummary>
  //   GET    /cases/:id                           → Case
  //   POST   /cases                               → Case
  //   PATCH  /cases/:id/status                    → Case
  async listCases(opts?: {
    page?: number;
    perPage?: number;
    status?: CaseStatus | "all";
    forUser?: string;
  }): Promise<Paginated<CaseSummary>> {
    if (USE_MOCKS) {
      await sleep();
      let rows = [...mockCaseSummaries];
      if (opts?.forUser) {
        rows = rows.filter((c) => c.applicantName === mockIndividual.fullName);
      }
      if (opts?.status && opts.status !== "all") {
        rows = rows.filter((c) => c.status === opts.status);
      }
      const page = opts?.page ?? 1;
      const perPage = opts?.perPage ?? 10;
      const start = (page - 1) * perPage;
      return {
        data: rows.slice(start, start + perPage),
        meta: {
          page,
          perPage,
          total: rows.length,
          totalPages: Math.max(1, Math.ceil(rows.length / perPage)),
        },
      };
    }
    const params = new URLSearchParams();
    if (opts?.page) params.set("page", String(opts.page));
    if (opts?.perPage) params.set("perPage", String(opts.perPage));
    if (opts?.status && opts.status !== "all") params.set("status", opts.status);
    return request<Paginated<CaseSummary>>(`/cases?${params}`);
  },

  async getCase(_id: string): Promise<Case> {
    if (USE_MOCKS) {
      await sleep();
      return mockCaseDetail;
    }
    return request<Case>(`/cases/${_id}`);
  },

  async createCase(input: CreateCaseInput): Promise<Case> {
    if (USE_MOCKS) {
      await sleep();
      // Mock: return the seeded detail with the requested service.
      return { ...mockCaseDetail, serviceType: input.serviceType };
    }
    return request<Case>("/cases", { method: "POST", body: JSON.stringify(input) });
  },

  async updateCaseStatus(input: UpdateCaseStatusInput): Promise<Case> {
    if (USE_MOCKS) {
      await sleep();
      return { ...mockCaseDetail, status: input.status };
    }
    return request<Case>(`/cases/${input.caseId}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status: input.status, internalNote: input.internalNote }),
    });
  },

  // ── Admin stats ────────────────────────────────────────────────────────────
  // Planned: GET /admin/stats → AdminStats
  async adminStats() {
    if (USE_MOCKS) {
      await sleep(100);
      return mockStats;
    }
    return request<typeof mockStats>("/admin/stats");
  },
};

export type Api = typeof api;
