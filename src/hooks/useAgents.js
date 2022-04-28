import httpClient from "../utils/httpClient";
import { useQuery } from "react-query";

export function useAgents() {
  return useQuery("agents", async () => {
    const { data } = await httpClient.get(`/agents`);
    return data;
  });
}