# FPL Horizon

FPL Horizon is the umbrella product for two Fantasy Premier League decision tools:

- **Horizon Strategist**: the original linear-programming app for practical weekly squad, transfer, and chip decisions.
- **Horizon Grand Cru**: the V3 premium engine with multi-horizon beam search, LP transfer packages, variance-aware planning, and pre-deadline xP data.

The product positioning is simple: Strategist gives managers a smart weekly answer; Grand Cru simulates the next eight gameweeks to plan transfers and chips like a serious rank climber.

## Product Ladder

| Tier | Audience | Core Promise |
| --- | --- | --- |
| Free Scout | Curious managers | Basic safe-mode squad discovery |
| Horizon Strategist | Active mini-league players | LP-powered weekly decision support |
| Horizon Grand Cru | Serious rank climbers | 8-gameweek simulation and premium planning |
| Horizon API | Creators and partner tools | Commercial access to the recommendation engine |

## Grand Cru Engine

The V3 engine combines:

- **Multi-Horizon Simulator** (`api/simulator.ts`): beam search over future gameweek states.
- **LP Solver** (`api/lp-solver.ts`): squad and transfer optimization under FPL constraints.
- **CSV Oracle** (`api/ingestion.ts`): expected points and variance data from the scraped projection source.
- **Deadline Sniper** (`scripts/check-deadline.ts`, `scripts/fetch-xp.ts`): scheduled refresh near the FPL deadline.

## Monetization Notes

The app now includes reusable tier definitions in `src/lib/plans.ts` and a visible Horizon positioning/pricing view in `src/components/HorizonPositioning.tsx`.

Recommended next integrations:

1. Supabase or Auth0 for user accounts and subscription roles.
2. Stripe Checkout and webhooks for tier changes.
3. Rate limits and API keys for API/Enterprise access.
4. Feature gates based on the tier matrix in `src/lib/plans.ts`.

Keep public claims grounded: this is for entertainment and decision support, is not affiliated with Fantasy Premier League, and does not guarantee rank gains.

## Running Locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```
