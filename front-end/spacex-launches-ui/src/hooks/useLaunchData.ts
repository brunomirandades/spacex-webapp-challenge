import { useQuery } from "@tanstack/react-query";
import { LaunchSummary } from "@/types/launch";

const BASE_URL = import.meta.env.VITE_SPACEX_API_URL;

const fetchLaunchSummary = async (): Promise<LaunchSummary> => {
  const response = await fetch(`${BASE_URL}/launches/summary`);

  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to fetch launch data");
  }

  return response.json();
};

export const useLaunchData = () => {
  return useQuery({
    queryKey: ['launchSummary'],
    queryFn: fetchLaunchSummary,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 10 * 60 * 1000, // 10 minutes
  });
};
