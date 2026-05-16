export type Endpoint = {
  id: string;
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  price: string;
  asset: "USDC" | "USDT";
  chain: "base" | "optimism" | "solana";
  calls24h: number;
  revenue24h: number;
  p95ms: number;
  status: "live" | "paused";
};

export const endpoints: Endpoint[] = [
  { id: "ep_01", path: "/v1/forecast", method: "GET", price: "0.01", asset: "USDC", chain: "base", calls24h: 184219, revenue24h: 1842.19, p95ms: 412, status: "live" },
  { id: "ep_02", path: "/v1/geocode", method: "GET", price: "0.002", asset: "USDC", chain: "base", calls24h: 412847, revenue24h: 825.69, p95ms: 188, status: "live" },
  { id: "ep_03", path: "/v1/llm/complete", method: "POST", price: "0.05", asset: "USDC", chain: "optimism", calls24h: 28471, revenue24h: 1423.55, p95ms: 2104, status: "live" },
  { id: "ep_04", path: "/v1/ocr", method: "POST", price: "0.025", asset: "USDC", chain: "base", calls24h: 8412, revenue24h: 210.30, p95ms: 980, status: "live" },
  { id: "ep_05", path: "/v1/tts", method: "POST", price: "0.015", asset: "USDC", chain: "solana", calls24h: 3284, revenue24h: 49.26, p95ms: 1450, status: "paused" },
];

export type ApiKey = {
  id: string;
  label: string;
  prefix: string;
  env: "live" | "test";
  createdAt: string;
  lastUsed: string;
};

export const apiKeys: ApiKey[] = [
  { id: "key_01", label: "Production", prefix: "pk_live_8f4a", env: "live", createdAt: "2026-02-14", lastUsed: "12s ago" },
  { id: "key_02", label: "Staging", prefix: "pk_live_2c91", env: "live", createdAt: "2026-03-02", lastUsed: "4m ago" },
  { id: "key_03", label: "Local dev", prefix: "pk_test_a17e", env: "test", createdAt: "2026-04-08", lastUsed: "2h ago" },
];

export type Payment = {
  id: string;
  endpoint: string;
  amount: number;
  asset: "USDC";
  chain: "base" | "optimism" | "solana";
  payer: string;
  ts: string;
  latencyMs: number;
};

export const recentPayments: Payment[] = [
  { id: "tx_8f4a01", endpoint: "/v1/forecast",     amount: 0.01,  asset: "USDC", chain: "base",     payer: "0x71C…3aF2", ts: "just now", latencyMs: 401 },
  { id: "tx_8f4a02", endpoint: "/v1/geocode",      amount: 0.002, asset: "USDC", chain: "base",     payer: "0xAa9…91B0", ts: "1s ago",   latencyMs: 188 },
  { id: "tx_8f4a03", endpoint: "/v1/llm/complete", amount: 0.05,  asset: "USDC", chain: "optimism", payer: "0x14d…7E11", ts: "2s ago",   latencyMs: 2104 },
  { id: "tx_8f4a04", endpoint: "/v1/forecast",     amount: 0.01,  asset: "USDC", chain: "base",     payer: "0x71C…3aF2", ts: "3s ago",   latencyMs: 388 },
  { id: "tx_8f4a05", endpoint: "/v1/geocode",      amount: 0.002, asset: "USDC", chain: "base",     payer: "0x5dE…cC02", ts: "4s ago",   latencyMs: 201 },
  { id: "tx_8f4a06", endpoint: "/v1/ocr",          amount: 0.025, asset: "USDC", chain: "base",     payer: "0x14d…7E11", ts: "5s ago",   latencyMs: 932 },
  { id: "tx_8f4a07", endpoint: "/v1/forecast",     amount: 0.01,  asset: "USDC", chain: "base",     payer: "0xb22…81dD", ts: "6s ago",   latencyMs: 420 },
  { id: "tx_8f4a08", endpoint: "/v1/llm/complete", amount: 0.05,  asset: "USDC", chain: "optimism", payer: "0x91A…0017", ts: "7s ago",   latencyMs: 1980 },
];

// 24 hourly buckets, USDC revenue
export const revenueByHour: number[] = [
  120, 134, 145, 162, 178, 190, 212, 240, 268, 290, 305, 312,
  321, 318, 324, 340, 352, 368, 380, 372, 388, 401, 415, 428,
];

export const orgTotals = {
  revenue24h: 4351.0,
  revenueDelta: 0.184,
  calls24h: 637_233,
  callsDelta: 0.092,
  p95ms: 487,
  p95Delta: -0.04,
  payersActive: 1284,
  payersDelta: 0.218,
};
