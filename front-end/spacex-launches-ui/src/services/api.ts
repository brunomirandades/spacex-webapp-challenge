import { Launch } from "../types/launch";

const BASE_URL = process.env.SPACEX_API_URL;

export interface SummaryResponse {
  next: Launch;
  previous: Launch;
  upcoming: Launch[];
  past: Launch[];
}

export async function fetchSummary(): Promise<SummaryResponse> {
  const res = await fetch(`${BASE_URL}/launches/summary`);
  if (!res.ok) throw new Error("Failed to fetch summary");
  return res.json();
}