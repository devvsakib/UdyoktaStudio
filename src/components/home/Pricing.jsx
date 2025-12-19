import { useApp } from "@/hooks/useApp";
import { toast } from "sonner";

function Pricing() {
  const { theme, t } = useApp();
  const isDark = theme === "dark";

  return (
    <section id="pricing" className="py-24">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
            {t.pricing.badge}
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-slate-50">
            {t.pricing.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Starter card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5
                          backdrop-blur-2xl p-8 shadow-[0_24px_60px_rgba(15,23,42,0.75)]">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
              {t.pricing.starter.label}
            </p>
            <h3 className="text-2xl font-semibold text-slate-50 mb-4">
              {t.pricing.starter.name}
            </h3>
            <div className="flex items-end gap-1 mb-6">
              <span className="text-4xl font-semibold text-slate-50">
                {t.pricing.starter.price}
              </span>
              {/* <span className="text-sm text-slate-400">/ {t.pricing.starter.period}</span> */}
              <span className="text-sm text-slate-400">/ 1M</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              {t.pricing.starter.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-purple-400" />
                  {f}
                </li>
              ))}
            </ul>
            {/* CTA */}
            <div className="mt-6">
              <button
                className="inline-block w-full rounded-lg bg-slate-50 px-8 py-2 text-center font-semibold text-slate-900 hover:bg-slate-100"
                onClick={() => {
                  toast.success(t.pricing.starter.ctaSuccess);
                }}
              >
                {t.pricing.starter.cta}
              </button>
            </div>
          </div>

          {/* Business card (highlighted) */}
          <div className="relative rounded-3xl border border-purple-400/70 bg-linear-to-br
                          from-purple-500/40 via-purple-500/10 to-slate-950
                          backdrop-blur-2xl p-8 shadow-[0_24px_80px_rgba(88,28,135,0.85)]">
            <p className="text-xs uppercase tracking-[0.2em] text-purple-100 mb-2">
              {t.pricing.enterprise.label}
            </p>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t.pricing.enterprise.name}
            </h3>
            <p className="text-sm text-purple-100/80 mb-6">
              {t.pricing.enterprise.caption}
            </p>
            <ul className="space-y-2 text-sm text-purple-50">
              {t.pricing.enterprise.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button
                className="inline-block w-full rounded-lg bg-purple-500 px-8 py-2 text-center font-semibold  hover:bg-purple-400"
                onClick={() => {
                  toast.success(t.pricing.enterprise.ctaSuccess);
                }}
              >
                {t.pricing.enterprise.cta}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;