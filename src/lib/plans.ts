export type HorizonTierId = 'free' | 'strategist' | 'grandCru' | 'api';

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
    cta: 'Upgrade to Strategist',
    features: [
      'Linear-programmed optimal squad',
      'Safe, Risky, and Value modes',
      'Team sync and 1-for-1 transfers',
      'Rules-based chip guidance',
      'Historical expected-vs-actual tracking'
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
    id: 'api',
    name: 'Horizon API',
    price: 'Custom',
    cadence: 'for teams',
    audience: 'Creators, communities, tools',
    summary: 'Embed the optimization engine into content, bots, and partner products.',
    cta: 'Request access',
    features: [
      'API keys and usage reporting',
      'White-label recommendations',
      'Creator and community integrations',
      'Custom league analysis',
      'Commercial support'
    ]
  }
];

export const tierFeatureMatrix = [
  { feature: 'Optimal squad', free: 'Basic', strategist: 'LP', grandCru: 'LP + horizon', api: 'Custom' },
  { feature: 'Team sync', free: 'Locked', strategist: 'Included', grandCru: 'Included', api: 'Included' },
  { feature: 'Transfer logic', free: 'Locked', strategist: '1-for-1', grandCru: 'Multi-transfer', api: 'Custom' },
  { feature: 'Chip advice', free: 'Locked', strategist: 'Rules', grandCru: 'Simulated', api: 'Custom' },
  { feature: 'Lookahead', free: '1 GW', strategist: '1 GW', grandCru: '8 GWs', api: 'Configurable' },
  { feature: 'Risk modes', free: 'Safe', strategist: 'All modes', grandCru: 'All modes + variance', api: 'Configurable' },
  { feature: 'Fresh xP data', free: 'Standard', strategist: 'Standard', grandCru: 'Deadline sniper', api: 'SLA option' }
];

