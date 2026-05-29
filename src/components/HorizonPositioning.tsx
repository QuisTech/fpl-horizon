import { Check, Crown, Lock, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { horizonPlans, tierFeatureMatrix } from '../lib/plans';
import { cn } from '../lib/utils';

const productLadder = [
  {
    name: 'Horizon Strategist',
    label: 'Original app',
    icon: ShieldCheck,
    description: 'A weekly LP optimizer for managers who want a clean answer fast: optimal squad, risk modes, team sync, and practical transfer tips.',
    metrics: ['1 GW lookahead', 'LP squad solver', 'Rules-based chips']
  },
  {
    name: 'Horizon Grand Cru',
    label: 'V3 engine',
    icon: Crown,
    description: 'The premium multiverse planner: beam search, multi-transfer packages, sniper xP data, variance-aware decisions, and simulated chip timing.',
    metrics: ['8 GW horizon', '5,200+ paths', 'Deadline data']
  }
];

export const HorizonPositioning = () => {
  return (
    <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
      <section className="rounded-2xl border border-fpl-border bg-slate-950/50 p-5 sm:p-6">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded bg-fpl-green/10 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-fpl-green border border-fpl-green/20">
                Product ladder
              </span>
              <span className="rounded bg-slate-900 px-2 py-1 text-[9px] font-black uppercase tracking-widest text-cyan-300 border border-cyan-500/20">
                FPL Horizon
              </span>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                One brand, two levels of decision support.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                FPL Horizon turns the original Strategist app into the entry product, then positions Grand Cru as the premium simulation engine for serious rank climbers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {productLadder.map((product) => {
              const Icon = product.icon;
              return (
                <div key={product.name} className="rounded-2xl border border-fpl-border bg-card-bg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-fpl-border">
                        <Icon className="h-5 w-5 text-fpl-green" />
                      </div>
                      <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{product.label}</p>
                        <h3 className="text-base font-black text-white">{product.name}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-slate-400">{product.description}</p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {product.metrics.map((metric) => (
                      <div key={metric} className="rounded-lg border border-fpl-border bg-slate-950/60 px-2 py-2 text-center text-[9px] font-bold uppercase text-slate-300">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        {horizonPlans.map((plan) => (
          <div
            key={plan.id}
            className={cn(
              'relative rounded-2xl border bg-card-bg p-5 flex flex-col min-h-[360px]',
              plan.featured ? 'border-fpl-green shadow-[0_0_24px_rgba(0,255,133,0.08)]' : 'border-fpl-border'
            )}
          >
            {plan.featured && (
              <div className="absolute right-4 top-4 rounded bg-fpl-green px-2 py-1 text-[8px] font-black uppercase tracking-widest text-slate-950">
                Best edge
              </div>
            )}
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">{plan.audience}</p>
              <h3 className="mt-2 text-lg font-black text-white">{plan.name}</h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-2xl font-black text-fpl-green">{plan.price}</span>
                <span className="pb-1 text-[10px] font-bold uppercase text-slate-500">{plan.cadence}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">{plan.summary}</p>
            </div>

            <div className="mt-5 space-y-2 flex-grow">
              {plan.features.map((feature) => (
                <div key={feature} className="flex gap-2 text-[11px] leading-snug text-slate-300">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fpl-green" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              className={cn(
                'mt-5 w-full rounded-lg px-3 py-2 text-[10px] font-black uppercase tracking-widest transition-colors',
                plan.featured ? 'bg-fpl-green text-slate-950 hover:bg-fpl-green/90' : 'bg-slate-950 text-white border border-fpl-border hover:bg-slate-900'
              )}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-fpl-border bg-card-bg overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-fpl-border p-4">
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-white">Feature gating map</h3>
            <p className="mt-1 text-[11px] text-slate-500">Use this table to wire Supabase roles and Stripe subscription states next.</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-fpl-border bg-slate-950 px-3 py-2 text-[10px] font-bold uppercase text-slate-400">
            <Lock className="h-3.5 w-3.5 text-fpl-green" />
            Stripe-ready tiers
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[720px] text-left">
            <thead className="bg-slate-950/70 text-[9px] uppercase tracking-widest text-slate-500">
              <tr>
                <th className="px-4 py-3">Feature</th>
                <th className="px-4 py-3">Free</th>
                <th className="px-4 py-3">Strategist</th>
                <th className="px-4 py-3">Grand Cru</th>
                <th className="px-4 py-3">API</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-fpl-border text-[11px] text-slate-300">
              {tierFeatureMatrix.map((row) => (
                <tr key={row.feature} className="hover:bg-white/[0.02]">
                  <td className="px-4 py-3 font-bold text-white">{row.feature}</td>
                  <td className="px-4 py-3">{row.free}</td>
                  <td className="px-4 py-3">{row.strategist}</td>
                  <td className="px-4 py-3 text-fpl-green font-bold">{row.grandCru}</td>
                  <td className="px-4 py-3">{row.api}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-fpl-border bg-slate-950/50 p-5">
          <Rocket className="h-5 w-5 text-fpl-green" />
          <h3 className="mt-3 text-sm font-black uppercase tracking-widest text-white">Launch copy</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Stop guessing before the deadline. FPL Horizon compares simple optimizer picks with an 8-gameweek simulation engine built for transfer, captaincy, and chip decisions.
          </p>
        </div>
        <div className="rounded-2xl border border-fpl-border bg-slate-950/50 p-5">
          <Sparkles className="h-5 w-5 text-fpl-green" />
          <h3 className="mt-3 text-sm font-black uppercase tracking-widest text-white">Upgrade trigger</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Free users see locked Grand Cru features after they sync a team or switch from Safe mode, creating a natural path from curiosity to paid planning.
          </p>
        </div>
        <div className="rounded-2xl border border-fpl-border bg-slate-950/50 p-5">
          <ShieldCheck className="h-5 w-5 text-fpl-green" />
          <h3 className="mt-3 text-sm font-black uppercase tracking-widest text-white">Trust notes</h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Keep public copy grounded: entertainment-only, no affiliation with Fantasy Premier League, transparent data freshness, and no guaranteed rank promises.
          </p>
        </div>
      </section>
    </div>
  );
};

