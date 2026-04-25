"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Logo } from "@/components/ui/Logo";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/useToast";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const user = await login({ email, password });
      toast(`Welcome back, ${user.fullName}`, "success");
      router.push(user.accountType === "admin" ? "/admin" : "/dashboard");
    } catch {
      toast("Login failed", "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthLayout
      brand={
        <>
          <Logo />

          <div className="flex-1 flex flex-col justify-center pb-10">
            <div className="w-12 h-[3px] bg-gold rounded-sm mb-8" />
            <div className="font-display text-[38px] font-bold text-white leading-tight mb-5">
              Credential<br />Verification<br /><span className="text-gold">You Can Trust.</span>
            </div>
            <p className="text-sm text-white/55 leading-loose max-w-[340px] font-light">
              Submit and track your verification requests, upload documents, and receive certified reports — all in one secure platform.
            </p>

            <div className="mt-10 flex flex-col gap-3.5">
              {["Certificate & Degree Verification","Background Screening","Due Diligence Services","Real-time Case Tracking"].map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  <span className="text-[13px] text-white/65">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <p className="text-[11px] text-white/30 leading-relaxed">
              Accredited by Dubai Chamber · ASIS Member<br />
              ISO Certified · 10+ Years of Experience
            </p>
          </div>
        </>
      }
    >
      <div className="mb-9">
        <h2 className="font-display text-[28px] font-bold text-navy mb-1.5">Welcome Back</h2>
        <p className="text-sm text-sub font-light">Sign in to your TrueValidate account</p>
      </div>

      <button
        type="button"
        className="w-full px-5 py-3.5 rounded-lg bg-navy hover:bg-navy-mid flex items-center justify-center gap-3 mb-5 transition-colors cursor-pointer"
      >
        <div className="w-7 h-7 bg-gold rounded-md flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.35C17.25 22.15 21 17.25 21 12V7L12 2z" fill="#1E3A5F" />
          </svg>
        </div>
        <div className="text-left">
          <div className="text-[13px] font-semibold text-gold">Continue with UAE Pass</div>
          <div className="text-[11px] text-white/50">UAE Government Digital Identity</div>
        </div>
      </button>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-grey font-medium">or sign in with email</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <Input
          label="Email Address"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-semibold text-navy tracking-wide uppercase">Password</label>
            <a href="#" className="text-xs text-gold font-medium no-underline">Forgot password?</a>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" fullWidth size="lg" disabled={submitting}>
          {submitting ? "Signing in…" : "Sign In to Portal"}
        </Button>
      </form>

      <p className="text-center text-[13px] text-sub mt-5">
        Don&apos;t have an account?{" "}
        <a href="#" className="text-navy font-semibold no-underline">Register here</a>
      </p>

      <div className="mt-6 px-5 py-4 bg-muted rounded-xl border border-border">
        <p className="text-xs text-sub leading-relaxed">
          <strong className="text-navy">Employer / Company?</strong>{" "}
          Register a corporate account to manage employee verifications in bulk.{" "}
          <a href="#" className="text-gold font-semibold no-underline">Create company account →</a>
        </p>
      </div>

      <p className="text-center text-[11px] text-grey mt-7">
        © 2025 Validate Group · Dubai, UAE · <a href="#" className="text-grey">Privacy Policy</a>
      </p>
    </AuthLayout>
  );
}
