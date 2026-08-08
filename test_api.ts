import { FPLService } from './api/index.js';

(async () => {
  try {
    console.log('Testing FPL Horizon Squad Recommendations across all 3 modes...\n');
    
    for (const mode of ['safe', 'aggressive', 'value'] as const) {
      const rec = await FPLService.getRecommendations(mode, 1000);
      console.log(`=== MODE: ${mode.toUpperCase()} ===`);
      console.log(`Team Expected Points: ${rec.expectedPoints.toFixed(1)} xP`);
      console.log(`Total Cost: £${(rec.totalCost / 10).toFixed(1)}M`);
      console.log(`Captain: ${rec.captain?.web_name || 'None'} (xP: ${rec.captain?.xP?.toFixed(1)}, score: ${rec.captain?.score?.toFixed(1)})`);
      console.log(`Starting XI: ${rec.startingXI.map(p => `${p.web_name} (${p.xP?.toFixed(1)} xP)`).join(', ')}\n`);
    }

  } catch (err: any) {
    console.error('Test Failed:', err);
  }
})();
