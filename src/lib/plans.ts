export type HorizonTierId = 'free' | 'strategist' | 'grandCru' | 'aiAgent';

export interface HorizonPlan {
  id: HorizonTierId;
  name: string;
  price: string;
  cadence: string;
  audience: string;
  summary: string;
  cta: string;
  featured?: boolean;
  features: string[];
}

export const horizonPlans: HorizonPlan[] = [
  {
    id: 'free',
    name: 'Free Scout',
    price: 'GBP 0',
    cadence: 'forever',
    audience: 'Curious managers',
    summary: 'A fast taste of the model for weekly squad discovery.',
    cta: 'Start free',
    features: [
      'Safe-mode recommendations',
      '1 gameweek squad view',
      'Top picks by position',
      'Performance snapshots'
    ]
  },
  {
    id: 'strategist',
    name: 'Horizon Strategist',
    price: 'GBP 9.99',
    cadence: 'per month',
    audience: 'Active mini-league players',
    summary: 'The original LP engine packaged for practical weekly decisions.',
    cta: 'Select Strategist',
    features: [
      'Linear-programmed optimal squad',
      'Safe, Risky, and Value modes',
      'Team sync and 1-for-1 transfers',
      'Rules-based chip guidance'
    ]
  },
  {
    id: 'grandCru',
    name: 'Horizon Grand Cru',
    price: 'GBP 24.99',
    cadence: 'per month',
    audience: 'Serious rank climbers',
    summary: 'The V3 multiverse engine for 8-gameweek transfer and chip planning.',
    cta: 'Unlock Grand Cru',
    featured: true,
    features: [
      '8-gameweek beam-search simulation',
      'Multi-transfer LP optimization',
      'Variance-aware risk modeling',
      'Autonomous chip state machine',
      'Pre-deadline xP sniper data',
      'Priority engine access'
    ]
  },
  {
    id: 'aiAgent',
    name: 'AI Optimizer Agent',
    price: 'GBP 49.99',
    cadence: 'per month',
    audience: 'Hardcore rank maximizers',
    summary: 'The flagship Hybrid FPL Agent combining LLM reasoning with mathematical simulation.',
    cta: 'Upgrade to FPL Optimizer',
    features: [
      'Conversational AI Chat Interface',
      'Press conference & injury news parser',
      'Interactive transfer path scenarios',
      'Autonomous team planner and advisor'
    ]
  }
];

export const tierFeatureMatrix = [
  { feature: 'Optimal squad', free: 'Basic', strategist: 'LP', grandCru: 'LP + horizon (8 GW)', aiAgent: 'LP + Multiverse' },
  { feature: 'Team sync', free: 'Locked', strategist: 'Included', grandCru: 'Included', aiAgent: 'Included' },
  { feature: 'Transfer logic', free: 'Locked', strategist: '1-for-1', grandCru: 'Multi-transfer', aiAgent: 'Multi-transfer' },
  { feature: 'Chip advice', free: 'Locked', strategist: 'Rules', grandCru: 'Simulated', aiAgent: 'Simulated' },
  { feature: 'Lookahead', free: '1 GW', strategist: '1 GW', grandCru: '8 GWs', aiAgent: '8 GWs' },
  { feature: 'Conversational UI', free: 'Locked', strategist: 'Locked', grandCru: 'Locked', aiAgent: 'Included' },
  { feature: 'News & Press Parser', free: 'Locked', strategist: 'Locked', grandCru: 'Locked', aiAgent: 'Included' }
];
