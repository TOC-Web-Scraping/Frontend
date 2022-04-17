import httpClient from "../utils/httpClient";
import { useQuery } from "react-query";

export function useTeams() {
  return useQuery("teams", async () => {
    const { data } = await httpClient.get("/teams");
    return data;
  });
}
