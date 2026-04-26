"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import type { Case, CaseStatus, CaseSummary } from "@/types/case";
import type { Paginated } from "@/types/api";

interface UseCasesOpts {
  status?: CaseStatus | "all";
  forUser?: string;
  page?: number;
  perPage?: number;
}

export function useCases(opts?: UseCasesOpts) {
  const [data, setData] = useState<Paginated<CaseSummary> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api
      .listCases(opts)
      .then((res) => { if (!cancelled) setData(res); })
      .catch((e) => { if (!cancelled) setError(e); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opts?.status, opts?.forUser, opts?.page, opts?.perPage]);

  return { data, loading, error };
}

export function useCase(id: string | undefined) {
  const [data, setData] = useState<Case | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    api
      .getCase(id)
      .then((res) => { if (!cancelled) setData(res); })
      .catch((e) => { if (!cancelled) setError(e); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [id]);

  return { data, loading, error };
}
